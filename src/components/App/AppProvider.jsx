import React, {Component} from 'react';
import _ from 'lodash';
const cc = require('cryptocompare');

export const AppContext = React.createContext();

const MAX_FAVORITES = 10;

class AppProvider extends Component {
    constructor() {
        super();
        this.state = {
            page: 'dashboard',
            favorites: [],
            ...this.savedSettings(),
            setPage: this.setPage,
            addCoin: this.addCoin,
            removeCoin: this.removeCoin,
            isInFavorites: this.isInFavorites,
            confirmFavorites: this.confirmFavorites
        };
    }



    componentDidMount() {
        this.fetchCoins()
    }

    fetchCoins = async () => {
        const coinList = (await cc.coinList()).Data;
        this.setState({coinList});
    };

    addCoin = key => {
        let favorites = [...this.state.favorites];
        if(favorites.length < MAX_FAVORITES) {
            favorites.push(key);
            this.setState({favorites})
        }
    };

    removeCoin = key => {
        let favorites = [...this.state.favorites];

        this.setState({favorites: _.pull(favorites, key)})
    };

    isInFavorites = key => _.includes(this.state.favorites, key);

    confirmFavorites = () => {
        this.setState({
            firstVisit: false,
            page: 'dashboard'
        });

        localStorage.setItem('cryptoDash', JSON.stringify({
            favorites: this.state.favorites
        }));
    };

    savedSettings = () => {
        const cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
        if(!cryptoDashData) {
            return {
                page: 'settings',
                firstVisit: true
            }
        }

        const {favorites} = cryptoDashData;
        console.log(favorites);
        return {favorites};
    };

    setPage = page => this.setState({page});

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export default AppProvider;
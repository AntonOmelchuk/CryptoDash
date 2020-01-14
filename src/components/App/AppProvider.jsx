import React, {Component} from 'react';
import _ from 'lodash';
const crypto = require('cryptocompare');

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
            setFilteredCoins: this.setFilteredCoins,
            confirmFavorites: this.confirmFavorites
        };
    }

    componentDidMount() {
        this.fetchCoins();
        this.setPrices();
    }

    fetchCoins = async () => {
        const coinList = (await crypto.coinList()).Data;
        this.setState({coinList});
    };

    setPrices = async () => {
        if(this.state.firstVisit) return;
        const prices = await this.prices();
        this.setState({prices})
    };

    prices = async () => {
        const data = [];

        for(let i = 0; i < this.state.favorites.length; i ++) {
            try {
                const res = await crypto.priceFull(this.state.favorites[i], 'USD');
                data.push(res)
            } catch(err) {
                console.warn('Fetch price error', err)
            }
        }

        return data;
    };

    addCoin = key => {
        let favorites = [...this.state.favorites];
        if(favorites.length < MAX_FAVORITES) {
            favorites.push(key);
            this.setState({favorites})
        }
    };

    removeCoin = key => {
        const favorites = [...this.state.favorites];

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
        return {favorites};
    };

    setFilteredCoins = filteredCoins => this.setState({filteredCoins});

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
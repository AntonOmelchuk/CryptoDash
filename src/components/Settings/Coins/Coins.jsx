import React from 'react';
import {AppContext} from "../../App/AppProvider";
import {CoinsGrid} from "./coins.style";

const Coins = () => {
    return (
        <AppContext.Consumer>
            {({coinList}) => (
                <CoinsGrid>
                    {Object.keys(coinList).map(coinKey => (
                        <div key={coinKey}>{coinKey}</div>
                        )
                    )}
                </CoinsGrid>
            )}
        </AppContext.Consumer>
    );
};

export default Coins;

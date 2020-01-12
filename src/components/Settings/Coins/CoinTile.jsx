import React from 'react';
import {AppContext} from "../../App/AppProvider";
import {SelectedTile} from "../../Shared/tile.style";
import {CoinHeaderGridStyled, CoinSymbol} from "./coins.style";
import CoinImage from "../../Shared/CoinImage";

const CoinTile = ({coinKey}) => {

    return (
        <AppContext.Consumer>
            {({coinList}) => {
                const coin = coinList[coinKey];
                const TileClass = SelectedTile;

                return <TileClass>
                    <CoinHeaderGridStyled>
                        <div>{coin.CoinName}</div>
                        <CoinSymbol>{coin.Symbol}</CoinSymbol>
                        <CoinImage coin={coin} />
                    </CoinHeaderGridStyled>
                </TileClass>
            }}
        </AppContext.Consumer>
    );
};

export default CoinTile;

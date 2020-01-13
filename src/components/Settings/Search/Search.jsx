import React from 'react';
import _ from 'lodash';
import fuzzy from 'fuzzy';

import {SearchGrid, SearchInput} from './search.style';
import {AppContext} from '../../App/AppProvider';

const handleFilter = _.debounce((inputValue, coinList, setFilteredCoins) => {
  const coinSymbols = Object.keys(coinList);
  const coinNames = coinSymbols.map(sym => coinList[sym].CoinName);
  const allStringsToSearch = coinSymbols.concat(coinNames);

  const fuzzyResults = fuzzy
      .filter(inputValue, allStringsToSearch, {})
      .map(result => result.string);

  let filteredCoins = _.pickBy(coinList, (result, symKey) => {
    let coinName = result.CoinName;
    return (_.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, coinName));
  });

  setFilteredCoins(filteredCoins);
}, 500);

const filterCoins = (e, setFilterCoins, coinList) => {
  const inputValue = e.target.value;
  if(!inputValue) setFilterCoins(null);
  handleFilter(inputValue, coinList, setFilterCoins);
};

const Search = () => {
  return (
    <AppContext.Consumer>
      {({setFilteredCoins, coinList}) => (
        <SearchGrid>
          <h2>Search all coins</h2>
          <SearchInput
            onKeyUp={e => filterCoins(e, setFilteredCoins, coinList)}
          />
        </SearchGrid>
      )}
    </AppContext.Consumer>
  );
};

export default Search;

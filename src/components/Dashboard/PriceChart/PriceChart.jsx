import React from 'react';
import ReactHighcharts from 'react-highcharts/src/ReactHighcharts';
import highchartConfig from '../HighchartsConfig';
import {Tile} from '../../Shared/tile.style';

const PriceChart = () => {
  return (
    <Tile>
      <ReactHighcharts config={highchartConfig()} />
    </Tile>
  );
};

export default PriceChart;

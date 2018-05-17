import * as React from 'react';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  Grid,
  BarSeries,
} from '@devexpress/dx-react-chart-material-ui';
import Paper from '@material-ui/core/Paper';
import { ageStructure } from '../../../demo-data/data-vizualization';

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: ageStructure,
      width: 700,
      height: 400,
    };
  }
  render() {
    const {
      data: chartData, width, height,
    } = this.state;
    return (
      <Paper>
        <Chart
          data={chartData}
          width={width}
          height={height}
        >

          <ArgumentAxis name="state" type="band" />
          <ValueAxis name="age" min={0} />

          <Grid name="state" />
          <Grid name="age" />

          <BarSeries
            name="Young"
            valueField="young"
            argumentField="state"
            axisName="age"
            stack="a"
            style={{ stroke: 'none', fill: '#ff6666' }}
          />
          <BarSeries
            name="Middle"
            valueField="middle"
            argumentField="state"
            axisName="age"
            stack="a"
            style={{ stroke: 'none', fill: '#9fff80' }}
          />
          <BarSeries
            name="Older"
            valueField="older"
            argumentField="state"
            axisName="age"
            stack="a"
            style={{ stroke: 'none', fill: '#9999ff' }}
          />
        </Chart>
      </Paper>
    );
  }
}

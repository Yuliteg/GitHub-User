
import React from "react";

import ReactFC from "react-fusioncharts";

import FusionCharts from "fusioncharts";

import Column2D from "fusioncharts/fusioncharts.charts";

import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";


ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);


const ChartComponenet = ({data}) => {
  const chartConfigs = {
    type: "bar3d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {

      chart: {
       caption: "Most Forked",
       yAxisName: "Forks",   
       xAxisName: "Repos",
       xAxisNameFontSize: "16px",
       yAxisNameFontSize: "16px",       
      },
      // Chart Data
      data,
    }
  };

  return <ReactFC {...chartConfigs} />
}
// STEP 4 - Creating the DOM element to pass the react-fusioncharts component


export default ChartComponenet;


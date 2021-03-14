import * as d3 from 'd3';
import { svg } from './App.js';
import { CombinedGeoData } from '../lib/countries.geojson';

svg.selectAll('.country')
  .data(CombinedGeoData.feature)
  .join('path')
  .attr("class", "country")
  .attr("fill")
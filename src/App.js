import React, { useRef, useEffect } from 'react';
import { event, select, geoPath, geoMercator, min, max, scaleLinear, svg } from 'd3';
import './App.css';
import CombinedGeoData from './lib/countries.geojson';

function App() {
  const svgRef = useRef();

  useEffect(() => {

  }, [svgRef]);

  return (
    <div>
      <h1>Drew's Map</h1>
      <svg style={{ height: '800px', width: '1000px'}} ref={svgRef} />
      { 
      svgRef.selectAll('.country')
        .data(CombinedGeoData.feature)
        .join('path')
        .attr("class", "country")
      }
    </div>
  );
}

export default App;

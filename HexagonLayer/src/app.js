/*
 * Copyright 2019 Google LLC

 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 *  https://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * 
 *  RODRIGO RUBIO HARO. ESOURCE | GOOGLE MAPS. 
 */
import { map_styles } from './map_styles';
import { GoogleMapsOverlay } from '@deck.gl/google-maps';
import { HexagonLayer } from '@deck.gl/aggregation-layers';

/* SET YOU APIR KEY HERE OR IN GoogleMapsAPIKey ENV VAR */
const YOUR_API_KEY = 'YOUR_API_KEY';

/*
 * Demo of Hexagon Layer that aggregates Los Angeles active business data
 *
 * Datasource: Los Angeles Open Data
 * https://data.lacity.org/A-Prosperous-City/Listing-of-Active-Businesses/6rrh-rzua
 */
function getHexagonLayer() {
    //var data = require('./simple.data.json'); //(with path)

    const HEXAGON_LAYER = new HexagonLayer({
        id: 'heatmap',
        data: data,
        colorDomain: [0, 50],
        getPosition: d => [+d.longitude, +d.latitude],
        colorRange: [
            [196, 255, 255],
            [116, 255, 255],
            [72, 189, 150],
            [0, 171, 152],
            [63, 141, 90],
            [47, 142, 34]
        ],
        count: 33,
        elevationRange: [0, 100],
        elevationScale: 5000,
        extruded: true,
        radius: 90000,
        //   opacity: 0.1,        
        upperPercentile: 50,
        coverage: 2
    });
    return HEXAGON_LAYER;
}

// Init the base map and deck.gl GoogleMapsOverlay, then add the layer
async function init() {
    await loadScript();
    const MAP = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 24.068739, lng: -94.323170 },
        zoom: 4,
        styles: map_styles
    });

    const HEXAGON_LAYER = getHexagonLayer();

    const overlay = new GoogleMapsOverlay({
        layers: [HEXAGON_LAYER]
    });
    overlay.setMap(MAP);
}

// Load the Google Maps Platform JS API async
function loadScript() {
    const GOOGLE_MAPS_API_KEY = YOUR_API_KEY || process.env.GoogleMapsAPIKey,
        GOOGLE_MAPS_API_URI = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`,
        HEAD = document.querySelector('head'),
        SCRIPT = document.createElement('script');

    SCRIPT.type = 'text/javascript';
    SCRIPT.src = GOOGLE_MAPS_API_URI;
    HEAD.appendChild(SCRIPT);
    return new Promise(resolve => {
        SCRIPT.onload = resolve;
    });
}

init();
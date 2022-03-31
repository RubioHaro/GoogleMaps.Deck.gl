# Maps JS API with deck.gl Hexagon Layer Example App

This example app shows how use the [Deck.gl](https://deck.gl) Hexagon Layer data visualization on Google Maps. The Hexagon Layer ingests a set of geocodes and aggregates them into hexagon-shaped areas. The hexagons are then rendered with height on the z-axis based on the number of data points each contains.

<p align="center"><img src="https://github.com/googlemaps/deck.gl-demos/raw/master/img/hexagon.png" /></p>

## Running the app

To run the app on localhost, do the following:

1. Download or clone the repo.

2. Set your [API key](https://developers.google.com/maps/documentation/javascript/get-api-key) in a `GoogleMapsAPIKey` environment variable or at the top of `src/app.js` in the `YOUR_API_KEY` constant.

3. Run `npm install` to download dependencies.

4. Run `npm start`.

Your browser will open to `http://localhost:8080`.

### The app won't run!

Make sure that your API key is valid and doesn't have any restrictions that would prevent it making calls to the Maps JS API, Directions API, or Places API on localhost.

Also, the URIs for some of the city open data sources sometimes change. We try to keep them updated but if you find them out of date a quick search of one of the datasources below can get you an updated URI to plug into the demo.

## Documentation & resources

- [Google Maps JS API docs](https://developers.google.com/maps/documentation/javascript/)
- [`GoogleMapsOverlay` deck.gl submodule docs](https://deck.gl/#/documentation/submodule-api-reference/deckgl-google-maps/overview)
- [Hexagon Layer docs](https://github.com/uber/deck.gl/blob/master/docs/layers/hexagon-layer.md)
- [deck.gl docs](https://deck.gl/#/documentation/overview/introduction)

## Datasource

This demo uses a dataset available from [Los Angeles Open Data](https://data.lacity.org/) that provides geocodes for registered active businesses in the Los Angeles area.
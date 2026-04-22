import VectorLayer from "ol/layer/Vector.js";
import VectorSource from "ol/source/Vector.js";
import GeoJSON from "ol/format/GeoJSON.js";
import { Style, Stroke } from "ol/style.js";

const municipalitiesSource = new VectorSource({
  url: "/geojson/municipalities.geojson",
  format: new GeoJSON(),
});

const municipalitiesStyle = new Style({
  stroke: new Stroke({
    color: "rgba(5,91,133,0.8)",
    width: 1,
  }),
});

export const municipalitiesLayer = new VectorLayer({
  source: municipalitiesSource,
  style: municipalitiesStyle,
});

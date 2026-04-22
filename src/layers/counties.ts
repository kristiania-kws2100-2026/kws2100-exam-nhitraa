import VectorLayer from "ol/layer/Vector.js";
import VectorSource from "ol/source/Vector.js";
import GeoJSON from "ol/format/GeoJSON.js";
import { Style, Stroke, Fill } from "ol/style.js";

const countiesSource = new VectorSource({
  url: "/geojson/counties.geojson",
  format: new GeoJSON({
    dataProjection: "EPSG:4258",
    featureProjection: "EPSG:4326",
  }),
});

const countiesStyle = new Style({
  stroke: new Stroke({
    color: "rgba(22,52,151,0.8)",
    width: 2,
  }),
  fill: new Fill({ color: "rgba(155,180,188,0.2)" }),
});

export const countiesLayer = new VectorLayer({
  source: countiesSource,
  style: countiesStyle,
});

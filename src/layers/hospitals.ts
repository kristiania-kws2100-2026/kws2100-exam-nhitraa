import VectorLayer from "ol/layer/Vector.js";
import VectorSource from "ol/source/Vector.js";
import GeoJSON from "ol/format/GeoJSON.js";
import { Style, Fill, Stroke, RegularShape } from "ol/style.js";

const hospitalsStyle = new Style({
  image: new RegularShape({
    points: 4,
    radius: 7,
    angle: 0,
    fill: new Fill({ color: "rgba(0,150,255,0.85)" }),
    stroke: new Stroke({ color: "#fff", width: 1.5 }),
  }),
});

export const hospitalsLayer = new VectorLayer({
  source: new VectorSource({
    url: "/geojson/hospitals.geojson",
    format: new GeoJSON(),
  }),
  style: hospitalsStyle,
});

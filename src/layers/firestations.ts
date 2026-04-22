import VectorLayer from "ol/layer/Vector.js";
import VectorSource from "ol/source/Vector.js";
import GeoJSON from "ol/format/GeoJSON.js";
import { Style, Fill, Stroke, RegularShape } from "ol/style.js";

const firestationsSource = new VectorSource({
  url: "/geojson/firestations.geojson",
  format: new GeoJSON(),
});

const firestationsStyle = new Style({
  image: new RegularShape({
    points: 4,
    radius: 4,
    angle: Math.PI / 4,
    fill: new Fill({ color: "rgba(255,60,60,0.5)" }),
    stroke: new Stroke({ color: "red", width: 2 }),
  }),
});

export const firestationsLayer = new VectorLayer({
  source: firestationsSource,
  style: firestationsStyle,
});

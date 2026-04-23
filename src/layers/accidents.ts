import type { FeatureLike } from "ol/Feature.js";
import GeoJSON from "ol/format/GeoJSON.js";
import VectorLayer from "ol/layer/Vector.js";
import ClusterSource from "ol/source/Cluster.js";
import VectorSource from "ol/source/Vector.js";
import { Circle, Fill, Stroke, Style, Text } from "ol/style.js";

const lightColor: Record<string, string> = {
  Dagslys: "rgba(255,210,0,0.85)",
  "Mørkt med vegbelysning": "rgba(255,140,0,0.85)",
  "Mørkt uten vegbelysning": "rgba(200,30,30,0.85)",
  Ukjent: "rgba(150,150,150,0.85)",
};

function accidentsStyle(feature: FeatureLike) {
  const features = feature.get("features") as FeatureLike[];
  const count = features.length;

  if (count === 1) {
    const lysforhold = features[0]?.get("lysforhold");
    const color = lysforhold && lightColor[lysforhold];
    return new Style({
      image: new Circle({
        radius: 6,
        fill: new Fill({ color }),
        stroke: new Stroke({ color: "#fff", width: 1.5 }),
      }),
    });
  }

  const radius = 8 + Math.min(Math.log2(count) * 3, 18);
  return new Style({
    image: new Circle({
      radius,
      fill: new Fill({ color: "rgba(255,140,0,0.75)" }),
      stroke: new Stroke({ color: "#fff", width: 1.5 }),
    }),
    text: new Text({
      text: String(count),
      fill: new Fill({ color: "#fff" }),
      font: "bold 11px sans-serif",
    }),
  });
}

const accidentsSource = new VectorSource({
  url: "/geojson/accidents.geojson",
  format: new GeoJSON(),
});

const clusterSource = new ClusterSource({
  source: accidentsSource,
  distance: 80,
});

export const accidentsLayer = new VectorLayer({
  source: clusterSource,
  style: accidentsStyle,
});

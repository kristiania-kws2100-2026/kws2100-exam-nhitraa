import VectorLayer from "ol/layer/Vector.js";
import VectorSource from "ol/source/Vector.js";
import ClusterSource from "ol/source/Cluster.js";
import GeoJSON from "ol/format/GeoJSON.js";
import { Style, Fill, Stroke, RegularShape, Text } from "ol/style.js";
import type { FeatureLike } from "ol/Feature.js";
import type Feature from "ol/Feature.js";
import { Point } from "ol/geom.js";
import type { MultiPoint } from "ol/geom.js";

function firestationsStyle(feature: FeatureLike) {
  const count = (feature.get("features") as FeatureLike[]).length;
  const radius = count === 1 ? 6 : 8 + Math.min(Math.log2(count) * 3, 18);
  return new Style({
    image: new RegularShape({
      points: 4,
      radius,
      angle: Math.PI / 4,
      fill: new Fill({ color: "rgba(255,60,60,0.75)" }),
      stroke: new Stroke({ color: "#fff", width: 1.5 }),
    }),
    text:
      count > 1
        ? new Text({
            text: String(count),
            fill: new Fill({ color: "#fff" }),
            font: "bold 11px sans-serif",
          })
        : undefined,
  });
}

const firestationsSource = new VectorSource({
  url: "/geojson/firestations.geojson",
  format: new GeoJSON(),
});

const clusterSource = new ClusterSource({
  source: firestationsSource,
  distance: 60,
  geometryFunction: (feature: Feature) => {
    const geom = feature.getGeometry();
    if (!geom) return null;
    if (geom.getType() === "MultiPoint") {
      const coords = (geom as MultiPoint).getFirstCoordinate();
      return new Point(coords);
    }
    return geom as Point;
  },
});

export const firestationsLayer = new VectorLayer({
  source: clusterSource,
  style: firestationsStyle,
});

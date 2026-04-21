import React, { useEffect, useRef } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile.js";
import { OSM } from "ol/source.js";
import { useGeographic } from "ol/proj.js";

import "ol/ol.css";
import { municipalitiesLayer } from "./layers/municipalities.js";
import { countiesLayer } from "./layers/counties.js";

useGeographic();

const map = new Map({
  view: new View({ center: [10.7, 59.9], zoom: 8 }),
  layers: [
    new TileLayer({ source: new OSM() }),
    municipalitiesLayer,
    countiesLayer,
  ],
});

export function Application() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    map.setTarget(mapRef.current!);
  }, []);
  return <div ref={mapRef}></div>;
}

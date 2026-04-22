import React, { useEffect, useRef, useState } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile.js";
import { OSM } from "ol/source.js";
import { useGeographic } from "ol/proj.js";
import "ol/ol.css";

import { municipalitiesLayer } from "./layers/municipalities.js";
import { countiesLayer } from "./layers/counties.js";
import { firestationsLayer } from "./layers/firestations.js";

useGeographic();

const map = new Map({
  view: new View({ center: [10.7, 59.9], zoom: 8 }),
  layers: [
    new TileLayer({ source: new OSM() }),
    municipalitiesLayer,
    countiesLayer,
    firestationsLayer,
  ],
});

export function Application() {
  const mapRef = useRef<HTMLDivElement | null>(null);

  const [popup, setPopup] = useState<{
    navn: string;
    brannvesen: string;
    kasernert: string;
  } | null>(null);

  useEffect(() => {
    map.setTarget(mapRef.current!);

    map.on("click", (e) => {
      map.forEachFeatureAtPixel(e.pixel, (feature) => {
        const props = feature.getProperties();
        if (props.brannstasj) {
          setPopup({
            navn: props.brannstasj,
            brannvesen: props.brannvesen,
            kasernert:
              props.kasernert === "IK" ? "Ikke kasernert" : "Kasernert",
          });
        }
      });
    });
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <div ref={mapRef} style={{ width: "100vw", height: "100vh" }} />
      {popup && (
        <div
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            background: "rgba(255,255,255,0.6)",
            padding: "16px",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
            minWidth: "200px",
          }}
        >
          <button onClick={() => setPopup(null)} style={{ float: "right" }}>
            ✕
          </button>
          <h3>🚒 {popup.navn} </h3>
          <p>{popup.brannvesen}</p>
          <p>{popup.kasernert}</p>
        </div>
      )}
    </div>
  );
}

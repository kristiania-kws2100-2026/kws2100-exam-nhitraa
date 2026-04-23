import React, { useEffect, useRef, useState } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile.js";
import { OSM } from "ol/source.js";
import { useGeographic } from "ol/proj.js";
import "ol/ol.css";
import "./application.css";

import { municipalitiesLayer } from "./layers/municipalities.js";
import { countiesLayer } from "./layers/counties.js";
import { firestationsLayer } from "./layers/firestations.js";
import { accidentsLayer } from "./layers/accidents.js";
import {
  type AccidentPopup,
  type FirestationPopup,
  Popup,
} from "./components/Popup.js";
import type { FeatureLike } from "ol/Feature.js";
import OverviewMap from "ol/control/OverviewMap.js";

useGeographic();

const overviewMap = new OverviewMap({
  collapsed: false,
  layers: [new TileLayer({ source: new OSM() })],
});

const map = new Map({
  view: new View({ center: [10.7, 59.9], zoom: 8 }),
  layers: [
    new TileLayer({ source: new OSM() }),
    municipalitiesLayer,
    countiesLayer,
    accidentsLayer,
    firestationsLayer,
  ],
});

export function Application() {
  const mapRef = useRef<HTMLDivElement | null>(null);

  const [popup, setPopup] = useState<AccidentPopup | FirestationPopup | null>(
    null,
  );

  useEffect(() => {
    map.setTarget(mapRef.current!);
    map.addControl(overviewMap);

    map.on("click", (e) => {
      let found = false;
      map.forEachFeatureAtPixel(e.pixel, (feature) => {
        if (found) return;
        const clustered = feature.get("features") as FeatureLike[];
        if (!clustered || clustered.length !== 1) return;
        const clusterProps = clustered[0]!.getProperties();

        if (clusterProps.brannstasj) {
          found = true;
          setPopup({
            type: "firestation",
            navn: clusterProps.brannstasj,
            brannvesen: clusterProps.brannvesen,
            kasernert:
              clusterProps.kasernert === "IK" ? "Ikke kasernert" : "Kasernert",
          });
        } else if (clusterProps.ulykkesdato) {
          found = true;
          setPopup({
            type: "accident",
            dato: clusterProps.ulykkesdato,
            ukedag: clusterProps.ukedag,
            uhellskode: clusterProps.uhellskode,
            fartsgrense: clusterProps.fartsgrense,
            lysforhold: clusterProps.lysforhold,
            antallEnheter: clusterProps.antallEnheter,
          });
        }
      });
      if (!found) setPopup(null);
    });
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <div ref={mapRef} style={{ width: "100vw", height: "100vh" }} />
      {popup && <Popup popup={popup} onClose={() => setPopup(null)} />}
    </div>
  );
}

import TileLayer from "ol/layer/Tile.js";
import TileWMS from "ol/source/TileWMS.js";

export const roadsLayer = new TileLayer({
  source: new TileWMS({
    url: "https://wms.geonorge.no/skwms1/wms.vegnett2",
    params: {
      LAYERS: "europaveg,riksveg,fylkesveg",
      FORMAT: "image/png",
      TRANSPARENT: true,
    },
  }),
  opacity: 0.7,
});

import locationMarkerImg from "@tags/nature.svg"

import L from "leaflet";

export const locationMarker = L.icon({
    iconUrl: locationMarkerImg,
    iconSize: [40, 40], // size of the icon
    iconAnchor: [20, 20], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -15] // point from which the popup should open relative to the iconAnchor
  });
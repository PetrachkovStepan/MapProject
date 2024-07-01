import userLocationMarker from "@assets/UserIcon.svg"

import L from "leaflet";

export const userMarker = L.icon({
    iconUrl: userLocationMarker,
    iconSize: [98, 98], // size of the icon
    iconAnchor: [49, 49], // point of the icon which will correspond to marker's location
  });
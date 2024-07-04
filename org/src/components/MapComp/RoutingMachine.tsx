import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import { useTypeSelector } from "@//hooks/useTypeSelector";

const createRoutineMachineLayer = () => {
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(Number.parseFloat(localStorage.userLat), Number.parseFloat(localStorage.userLng)),
      L.latLng(Number.parseFloat(localStorage.destLat), Number.parseFloat(localStorage.destLng))
    ],
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }],
      extendToWaypoints: false,
      missingRouteTolerance: 0
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    fitSelectedRoutes: true,
    showAlternatives: false
  });

  return instance;
};

export const RoutingMachine = createControlComponent(createRoutineMachineLayer);

import { userMarker } from '@map/MapIcons/UserMarker';

import { LatLng } from 'leaflet';
import { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, useMapEvents } from 'react-leaflet'
import { TileLayer } from 'react-leaflet'
import PlaceList from './Lists/PlaceList';
import { useTypeSelector } from '@//hooks/useTypeSelector';
import { MapItemInfo, MapItems } from '@//store/types';


function LocationMarker() {
  const [position, setPosition] = useState<LatLng | null>(null)
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, 17)
    },
  })
  return position === null ? null : (
    <Marker position={position} icon={userMarker}>
    </Marker>
  )
}

function MapComp() {
  const state = useTypeSelector(state => state.map)
  const [places, setPlases] = useState<MapItemInfo[]>([])
  useEffect(() => {
    setPlases(state.items)
  });

  return (
    <div className = " h-screen w-full bg-white border-l-[3px] border-grey">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.4.0/dist/leaflet.css"/>
    <MapContainer center={[53.8563323, 30.3478746]} zoom={7}  className='h-screen w-[100%] overflow-hidden fixed'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      <LocationMarker/>
      <PlaceList items={places}/>
    </MapContainer>
    </div>
  );
}

export default MapComp;
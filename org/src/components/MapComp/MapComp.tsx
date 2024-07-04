import { userMarker } from '@map/MapIcons/UserMarker';

import L, { LatLng, latLng } from 'leaflet';
import { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, useMapEvents } from 'react-leaflet'
import { TileLayer } from 'react-leaflet'
import PlaceList from './Lists/PlaceList';
import { useTypeSelector } from '@//hooks/useTypeSelector';
import { MapItemInfo } from '@//store/types';
import { RoutingMachine } from './RoutingMachine';
import { useDispatch } from 'react-redux';
import { SET_USER_POSITION } from '@//store/userReducer';


function LocationMarker() {
  const state = useTypeSelector(state => state.user)
  const buffer = state
  const dispatch = useDispatch()
  const [position, setPosition] = useState<LatLng | null>(null)
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      buffer.userPosition = [e.latlng]
      dispatch({type: SET_USER_POSITION, userInfo:[e.latlng]})
      console.log("state.userPosition");
      console.log(state.userPosition);
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
    <MapContainer center={[53.8563323, 30.3478746]} zoom={10}  className='h-screen w-[100%] overflow-hidden fixed'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      <LocationMarker/>
      <PlaceList items={places}/>
      <RoutingMachine/>
    </MapContainer>
    </div>
  );
}

export default MapComp;
import { userMarker } from '@utils/MapLogic/MapIcons/UserMarker';
import { locationMarker } from '@utils/MapLogic/MapIcons/PlaceMarker';
import PlaceModal from '@map/MapAttributes/PlaceModal';

import { LatLng } from 'leaflet';
import { useState } from 'react';
import { MapContainer, Marker, Popup, useMapEvents } from 'react-leaflet'
import { TileLayer } from 'react-leaflet'


function LocationMarker() {
  const [position, setPosition] = useState<LatLng | null>(null)
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })
  return position === null ? null : (
    <Marker position={position} icon={locationMarker}>
      <Popup>
        <PlaceModal/>
      </Popup>
    </Marker>
  )
}
function MapComp() {
  return (
    <div className = " h-screen w-full bg-white border-l-[3px] border-grey">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.4.0/dist/leaflet.css"/>
    <MapContainer center={[53.8563323, 30.3478746]} zoom={19}  className='h-screen w-[100%] overflow-hidden fixed'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      <LocationMarker/>
    </MapContainer>
    </div>
  );
}

export default MapComp;
import { YMaps, Map } from '@pbe/react-yandex-maps';

function MapComp() {
  return (
    <div className = " h-screen w-full bg-white border-l-[3px] border-grey">
      <YMaps>
        <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} className='h-screen w-[]'/>
      </YMaps>
    </div>
  );
}

export default MapComp;
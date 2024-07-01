import tagImg from "@tags/nature.svg"
import { tagList } from "@//constants/TagList";
import { locationMarker } from '@//components/MapComp/MapIcons/PlaceMarker';
import PlaceModal from '@map/MapAttributes/PlaceModal';
import {Marker, Popup } from 'react-leaflet'
import { useEffect, useState } from "react";

const Place = (props: any) => {
    const[img, setImg] = useState<string>(tagImg)
    
    useEffect(() => {
        const arr = props.item.properties.kinds.split(",")
        for (let i = 0; i < tagList.length; i++) {
            if(arr[0] == tagList[i].tag){
                setImg(tagList[i].image)
                return
            }
        }
        setImg(tagList[tagList.length - 1].image)
      });
  return (
    <Marker position={[props.item.geometry.coordinates[1],props.item.geometry.coordinates[0]]} icon={locationMarker(img)}>
      <Popup>
        <PlaceModal/>
      </Popup>
    </Marker>
  );
};

export default Place;
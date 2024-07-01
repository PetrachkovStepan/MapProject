import { MapItems } from "@//store/types";
import Place from "./Place";

const PlaceList = ({items}: MapItems) => {
  return (
    <>
        {
        items.map((item) =>
            <Place key={item.id} item={item}></Place>
        )}
    </>
  );
};

export default PlaceList;
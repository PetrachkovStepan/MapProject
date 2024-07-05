import tagImg from "@tags/nature.svg"
import { useEffect, useState } from "react";

const Tag = (props: any) => {
  const[img, setImg] = useState<string>(props.item.image)
  const changeOnSearch = () => {
    props.item.onSearch = !props.item.onSearch;
    if(props.item.onSearch){      
      setImg(props.item.image)
    }else{
      setImg(props.item.altImage)
    }
    console.log(props.item.onSearch);
  }
  return (
    <button className=" flex flex-row w-full items-center mb-[10px]"
      onClick={changeOnSearch}>
        <img src={img} alt="" className="h-[30px] w-[30px]"/>
        <div className="text-dark-grey text-[16px] mx-[20px] text-clip overflow-hidden  font-mono font-bold">{props.item.name}</div>
    </button>
  );
};

export default Tag;
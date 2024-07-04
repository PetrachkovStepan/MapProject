import noteImg from "@assets/Note.svg"
import arrowImg from "@assets/Arrow.svg"
import { Link, useNavigate } from "react-router-dom";
import { getPlaceInfoById } from "@//utils/http/MapAPI";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import testImg from "@assets/TestImage.png"
import { SET_PLACE } from "@//store/placeReduser";
import { NoteType, PlaceInfo } from "@//store/types";
import { useTypeSelector } from "@//hooks/useTypeSelector";

const Note = (props: any) => {
  const state = useTypeSelector(state => state.place)
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [text, setText] = useState("Нет информации")
  const [img, setImg] = useState(testImg)
  const [name, setName] = useState("")
  
  useEffect(() => {
    getInfo()
  },[]);
  const getInfo = async () => {
    let info = await getPlaceInfoById(props.item.xid)
    setName(info.name)
    if(info.wikipedia_extracts != undefined){
      setText(info.wikipedia_extracts.text)
    }
    if(info.preview != undefined){
      setImg(info.preview.source)
    }
}
const toThePlacePage = async () => {
  dispatch({type: SET_PLACE, item: await getPlaceInfoById(props.item.xid)})
  navigate("/place")
}
  return (
    <div className=" flex flex-col h-[231px] max-w-[350px] border-[3px] rounded-[10px] mb-[20px] p-[20px] border-grey">
      <button onClick={toThePlacePage}>
        <div className="flex sm:items-center flex-col sm:flex-row">
            <img src={img} alt={testImg} className="h-[99px] sm:w-[120px] rounded-[10px] bg-dark-grey"/>
            
            <div className="flex items-center mt-[10px] sm:w-[160px]">
              <div className="h-[50px] sm:ml-[16px] text-[14] text-dark-grey sm:text-[16px] flex flex-wrap text-clip overflow-hidden">{name}</div>
            </div>

        </div>
        <div className="flex items-center sm:mt-[10px]">
            <div className=" h-[0px] sm:h-[42px] text-[10px] text-dark-grey flex flex-wrap text-clip overflow-hidden ">{text}</div>
        </div>
      </button>
        <div className="flex items-center justify-between mt-[10px] sm:mt-[20px]">
            <img src={noteImg} alt="" className="h-[20px] w-[15px]"/>
            <button onClick={toThePlacePage}>
              <img src={arrowImg}/>
            </button>
        </div>
    </div>
  );
};

export default Note;
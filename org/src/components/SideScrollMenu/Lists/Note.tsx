import noteImg from "@assets/Note.svg"
import arrowImg from "@assets/Arrow.svg"
import { Link, useNavigate } from "react-router-dom";
import { getPlaceInfoById } from "@//utils/http/MapAPI";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import testImg from "@assets/TestImage.png"
import { SET_PLACE } from "@//store/placeReduser";
import { NoteType, PlaceInfo } from "@//store/types";

const Note = (props: any) => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [info, setInfo] = useState<PlaceInfo>();
  const [text, setText] = useState("Нет информации")
  const [img, setImg] = useState(testImg)
  
  useEffect(() => {
    getInfo()
    if(info?.wikipedia_extracts != undefined){
      setText(info.wikipedia_extracts.text)
  }
  if(info?.preview == undefined){
      setImg(testImg)
  }
  },[]);
  const getInfo = async () => {
    console.log("info");
    setInfo(await getPlaceInfoById(props.item.xid))
    console.log(info);
    
    // dispatch({type: SET_PLACE, item: await getPlaceInfoById(props.props.properties.xid)})
    // navigate("/place")
}
  return (
    <div className=" flex flex-col h-[231px] max-w-[350px] border-[3px] rounded-[10px] mb-[20px] p-[20px] border-grey">
      <Link to={"/place"} onClick={getInfo}>
        <div className="flex sm:items-center flex-col sm:flex-row">
            <img src={img} alt={testImg} className="h-[99px] sm:w-[120px] rounded-[10px] bg-dark-grey"/>
            
            <div className="flex items-center mt-[10px] sm:w-[160px]">
              <div className="h-[50px] sm:ml-[16px] text-[14] text-dark-grey sm:text-[16px] flex flex-wrap text-clip">{info?.name}</div>
            </div>

        </div>
        <div className="flex items-center sm:mt-[10px]">
            <div className=" h-[0px] sm:h-[42px] text-[10px] text-dark-grey flex flex-wrap text-clip overflow-hidden ">{text}</div>
        </div>
      </Link>
        <div className="flex items-center justify-between mt-[10px] sm:mt-[20px]">
            <img src={noteImg} alt="" className="h-[20px] w-[15px]"/>
            <Link to={"/place"} onClick={getInfo}>
              <img src={arrowImg}/>
            </Link>
        </div>
    </div>
  );
};

export default Note;
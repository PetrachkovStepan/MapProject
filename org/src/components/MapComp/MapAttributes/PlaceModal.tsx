import noteImg from "@assets/Note.svg"
import arrowImg from "@assets/Arrow.svg"
import { useNavigate } from "react-router-dom";
import { getPlaceInfoById } from "@//utils/http/MapAPI";
import { useDispatch } from "react-redux";
import { SET_PLACE } from "@//store/placeReduser";


function PlaceModal(props: any) {

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const getInfo = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    // await getPlaceInfoById(props.props.properties.xid)
    // let info =  await getPlaceInfoById(props.props.properties.xid)
    // console.log("info");
    // console.log(info);
    
    dispatch({type: SET_PLACE, item: await getPlaceInfoById(props.props.properties.xid)})
    navigate("/place")
}
    return (
        <div className=" flex flex-row w-[200px] border-[3px] rounded-[10px] my-[20px] py-[5px] border-grey">
          
          <div className="flex items-center mt-[10px] w-[160px]" >
            <button className=" sm:ml-[16px] text-[14] text-dark-grey sm:text-[16px] flex flex-wrap text-clip" 
              onClick={getInfo}>{props.props.properties.name}</button>
          </div>

          <div className="flex flex-col items-center justify-between mt-[10px] sm:mt-[20px]">
              <img src={noteImg} alt="" className="h-[20px] w-[15px]"/>
                <img src={arrowImg} onClick={getInfo}/>
          </div>
      </div>
    );
  }
  
export default PlaceModal;
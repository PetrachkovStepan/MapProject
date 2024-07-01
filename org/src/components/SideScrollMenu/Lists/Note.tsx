import noteImg from "@assets/Note.svg"
import arrowImg from "@assets/Arrow.svg"
import { Link } from "react-router-dom";
import { getPlaceInfoById } from "@//utils/http/MapAPI";

const Note = () => {
  const getInfo = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    await getPlaceInfoById("Q28381640")
}
  return (
    <div className=" flex flex-col h-[231px] max-w-[350px] border-[3px] rounded-[10px] mb-[20px] p-[20px] border-grey">
      <Link to={"/place"} onClick={getInfo}>
        <div className="flex sm:items-center flex-col sm:flex-row">
            <div className="h-[99px] sm:w-[120px] rounded-[10px] bg-dark-grey"/>
            
            <div className="flex items-center mt-[10px] sm:w-[160px]">
              <div className="h-[50px] sm:ml-[16px] text-[14] sm:text-[16px] flex flex-wrap text-clip">Нереальнейший городской парк</div>
            </div>

        </div>
        <div className="flex items-center sm:mt-[10px]">
            <div className=" h-[0px] sm:h-[42px] text-[10px] flex flex-wrap text-clip overflow-hidden ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
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
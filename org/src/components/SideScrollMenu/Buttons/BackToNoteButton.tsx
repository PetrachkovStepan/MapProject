import { Link } from "react-router-dom";
import arrowImg from "@assets/ArrowLeft.svg"


function BackToNoteButton() {
    return (
        <Link to={"/notes"} className = " flex items-center h-[25px] mt-[30px]">
            <img src={arrowImg} alt="" className=" h-[22px] w-[22px]"/>
            <p className="text-[20] mx-[15px]">Избранное</p>
        </Link>
    );
}
  
export default BackToNoteButton;
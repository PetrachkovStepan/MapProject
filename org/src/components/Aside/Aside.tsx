import noteImg from "../../assets/Note.svg"
import logoImg from "../../assets/Logo.svg"
import searchImg from "../../assets/SearchImg.svg"
import natureImg from "../../assets/nature.svg"
import { Link } from "react-router-dom";

function AsideComp() {
    return (
      <div className = "h-screen w-[70px] md:w-[110px] bg-white border-r-[3px] border-grey flex flex-col items-center justify-between">
        <div className="flex flex-col items-center">
          <img src={logoImg} className="h-[20px] w-[20px]  md:h-[30px] md:w-[30px] my-[30px]"></img>
          <Link to={"/search"} className=" flex justify-center items-center h-[40px] w-[40px] md:h-[60px] md:w-[60px] bg-blue rounded-[6px]">
            <img src={searchImg} className="h-[15px] w-[15px] md:h-[30px] md:w-[30px]"></img>
          </Link>
          <Link to={"/notes"} className=" flex justify-center items-center h-[40px] w-[40px] md:h-[60px] md:w-[60px] rounded-[6px] border-[3px] border-grey m-[15px]">
            <img src={noteImg} className="h-[24px] w-[18px] md:h-[30px] md:w-[30px]"></img>
          </Link>
        </div>

        <img src={natureImg} className="h-[48px] w-[48px] m-[38px]"></img>
      </div>
    );
  }
  
  export default AsideComp;
import logoImg from "@assets/Logo.svg"
import searchImg from "@assets/SearchImg.svg"
import pushedSearchButton from "@assets/PushedSearchButton.svg"
import unpushedSearchButton from "@assets/UnpushedSearchButton.svg"
import pushedNoteButton from "@assets/PushedNoteButton.svg"
import unpushedNoteButton from "@assets/UnpushedNoteButton.svg"
import natureImg from "@assets/nature.svg"
import exitImg from"@assets/ExitButton.svg"
import { Link, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";

function AsideComp() {
  const navigate = useNavigate(); 
  const [userImg, setUserImg] = useState<string>(natureImg)
  const [searchImg, setSearchImg] = useState<string>(pushedSearchButton)
  const [noteImg, setNoteImg] = useState<string>(unpushedNoteButton)
  useEffect(() => {
    if(localStorage.isLogIn == "true"){
      setUserImg(exitImg)
    }
    else{
      setUserImg(natureImg)
    }
  });
  const checkUser = () => {
    if(localStorage.isLogIn == "true"){
      setSearchImg(unpushedSearchButton)
      setNoteImg(pushedNoteButton)
      navigate("/notes")

    }else{
      navigate("/auth")
    }
  }
  const logOutUser = () => {
    if(localStorage.isLogIn == "true"){
      localStorage.setItem("isLogIn", "false")
      navigate("/auth")
    }else{
      navigate("/notes")
    }
  }
  const navigateToSearch = () => {
    setSearchImg(pushedSearchButton)
    setNoteImg(unpushedNoteButton)
    navigate("/")
  }
    return (
      <div className = "h-screen w-[70px] md:w-[110px] bg-white border-r-[3px] border-grey flex flex-col items-center justify-between">
        <div className="flex flex-col items-center">
          <img src={logoImg} className="h-[20px] w-[20px]  md:h-[30px] md:w-[30px] my-[30px]"/>
          <button className=" flex justify-center items-center h-[40px] w-[40px] md:h-[60px] md:w-[60px]"
            onClick={navigateToSearch}>
            <img src={searchImg} alt={pushedSearchButton}/>
          </button>
          <button className=" flex justify-center items-center h-[40px] w-[40px] md:h-[60px] md:w-[60px] rounded-[6px] m-[15px]"
            onClick={checkUser}>
            <img src={noteImg} alt={noteImg}/>
          </button>
        </div>

        <img src={userImg} alt={natureImg} className="h-[48px] w-[48px] m-[38px]"
          onClick={logOutUser}/>
      </div>
    );
  }
  
  export default AsideComp;
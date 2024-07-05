import { Outlet } from "react-router";
import AsideComp from "@aside/Aside";
import MapComp from "@map/MapComp";
import hideButtonImg from "@assets/HideButtonImg.svg"
import unhideButtonImg from "@assets/UnhideButtonImg.svg"
import { useState } from "react";

function Layout() {
  const[hidden, setHidden] = useState<boolean>(true)
  const[img, setImg] = useState<string>(hideButtonImg)
  const hideUnhide = () => {
    setHidden(!hidden)
    if(hidden){
      setImg(unhideButtonImg)  
    } else{
      setImg(hideButtonImg) 
    }
  }
    return (
      <div className = "h-screen w-screen flex items-center relative">
        <MapComp/>
        <div className="flex flex-row absolute  bottom-0 left-0">
          <AsideComp/>
          {hidden?
            <Outlet/>
            :
            null
          }
          <button
            onClick={hideUnhide}>
            <img src={img} alt={hideButtonImg}></img>
          </button>
        </div>
      </div>
    );
  }
  
  export default Layout;
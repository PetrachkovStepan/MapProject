import SearchBar from "@sidebars/SearchBar";
import BackToNoteButton from "@sidebuttons/BackToNoteButton";
import SaveButton from "@sidebuttons/SaveButton";
import RouteButton from "@sidebuttons/RouteButton";
import testImg from "@assets/TestImage.png"
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useEffect, useState } from "react";

function PlacePage() {
    const state = useTypeSelector(state => state.place)
    const [text, setText] = useState("Нет информации")
    const [img, setImg] = useState(testImg)
    useEffect(() => {
        if(state.item.wikipedia_extracts != undefined){
            setText(state.item.wikipedia_extracts.text)
        }
        if(state.item.preview != undefined){
            setImg(state.item.preview.source)
        }
      });
    
    return (
        <div  className = "h-screen max-w-[490px] bg-white flex flex-col px-[22px] pt-[25px]">
            <SearchBar/>
            <BackToNoteButton/>
            <div className = " overflow-auto no-scrollbar mt-[10px] ">
                <div className="flex flex-col border-[3px] border-grey rounded-[10px] px-[20px] pt-[20px]">
                    <img src={img} alt={testImg} className=" rounded-[10px] bg-dark-grey"/>
                    <div className="text-[20px] flex flex-wrap font-mono font-bold ">{state.item.name}</div>                
                    <div className=" text-[12px] mt-[10px] flex flex-wrap font-mono ">{text}</div>
                    
                    <div className="flex justify-between mt-[25px] sm:mt-[50px] mb-[15px] sm:mb-[25px]">
                        <SaveButton/>
                        <RouteButton/>
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default PlacePage;
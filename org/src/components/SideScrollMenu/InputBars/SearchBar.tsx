import searchImg from "@assets/SearchImg1.svg"
import { getPlaceByName } from "@//utils/http/MapAPI";
import { useState } from 'react';

function SearchBar() {
    const search = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        await getPlaceByName(searchLine)
    }
    const [searchLine, setSearchLine] = useState("")
    return (
        <div  className = " flex items-center pl-[30px] pr-[40px] h-[60px]  rounded-[6px] border-[3px] border-grey">
            <img src={searchImg} alt="" className=" h-[22px] w-[22px]"
            onClick={search}/>
            <input className=" text-[16px] ml-[20px] outline-none h-full w-full"
            placeholder="Место, адрес.."
            onChange={(e) => {setSearchLine(e.target.value)}} 
            value={searchLine}>

            </input>
        </div>
    );
}
  
export default SearchBar;
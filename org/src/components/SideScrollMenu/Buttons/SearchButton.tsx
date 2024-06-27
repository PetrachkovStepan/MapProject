import searchImg from "@assets/SearchImg.svg"
import { getPlacesByRadius } from "@//utils/http/MapAPI";

function SearchButton() {
    const search = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        await getPlacesByRadius(40000, 53.8563323, 30.3478746)
    }
    return (
        <button className=" flex justify-center items-center h-[50px] md:min-h-[60px] w-[40%] md:w-full bg-blue rounded-[10px] mt-[15px]"
        onClick={search}>
            <img src={searchImg} alt=""/>
        </button>
    );
}
  
export default SearchButton;
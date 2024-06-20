import searchImg from "../../assets/SearchImg1.svg"


function SearchBar() {
    return (
        <div  className = " flex items-center pl-[30px] pr-[40px] h-[60px]  rounded-[6px] border-[3px] border-grey">
            <img src={searchImg} className=" h-[22px] w-[22px]"></img>
            <input className=" text-[16px] ml-[20px] outline-none h-full w-full"
            placeholder="Место, адрес..">

            </input>
        </div>
    );
}
  
export default SearchBar;
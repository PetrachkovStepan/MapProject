import searchImg from "@assets/SearchImg.svg"

function SearchButton() {
    return (
        <button className=" flex justify-center items-center h-[50px] md:min-h-[60px] w-[40%] md:w-full bg-blue rounded-[10px] mt-[15px]">
            <img src={searchImg}/>
        </button>
    );
}
  
export default SearchButton;
import SearchBar from "src/components/SideScrollMenu/SearchBar";
import BackToNoteButton from "src/components/SideScrollMenu/BackToNoteButton";
import SaveButton from "src/components/SideScrollMenu/SaveButton";
import RouteButton from "src/components/SideScrollMenu/RouteButton";
import testImg from "./../assets/TestImage.png"

function PlacePage() {
    return (
        <div  className = "h-screen max-w-[490px] bg-white flex flex-col px-[22px] pt-[25px]">
            <SearchBar></SearchBar>
            <BackToNoteButton></BackToNoteButton>
            <div className = " overflow-auto no-scrollbar mt-[10px] ">
                <div className="flex flex-col border-[3px] border-grey rounded-[10px] px-[20px] pt-[20px]">
                    <img src={testImg} className=" rounded-[10px] bg-dark-grey"></img>
                    <div className="text-[20px] flex flex-wrap">Нереальнейший городской парк</div>                
                    <div className=" text-[12px] mt-[10px] flex flex-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
                    
                    <div className="flex justify-between mt-[25px] sm:mt-[50px] mb-[15px] sm:mb-[25px]">
                        <SaveButton></SaveButton>
                        <RouteButton></RouteButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default PlacePage;
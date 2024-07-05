import SearchBar from "@sidebars/SearchBar";
import SearchButton from "@sidebuttons/SearchButton";
import TagList from "../components/SideScrollMenu/Lists/TagList";

function SearchPage() {
    return (
        <div  className = "relative h-screen bg-white flex flex-col px-[25px] pt-[25px] overflow-auto no-scrollbar">
            <div>
                <SearchBar/>
                <div className="mt-[30px] text-[20px] text-dark-grey md-[10px] font-mono font-bold ">Искать:</div>
                <div className="flex flex-col  h-[490px] py-[25px] border-[3px] border-grey rounded-[10px] px-[20px] ">
                    <div className="flex flex-col h-[440px] mt-[10px] overflow-auto">
                        <TagList></TagList>
                    </div>
                </div>
            </div>
            <SearchButton/>
        </div>
    );
}
  
export default SearchPage;
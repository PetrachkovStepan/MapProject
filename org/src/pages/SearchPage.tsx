import SearchBar from "src/components/SideScrollMenu/SearchBar";
import SearchButton from "src/components/SideScrollMenu/SearchButton";
import Tag from "src/components/SideScrollMenu/Tag";
import RadiusBar from "src/components/SideScrollMenu/RadiusBar";

function SearchPage() {
    return (
        <div  className = "relative h-screen bg-white flex flex-col px-[25px] pt-[25px] overflow-auto no-scrollbar">
            <div >
                <SearchBar></SearchBar>
                <div className="mt-[30px] text-[20px] text-dark-grey md-[10px]">Искать:</div>
                <div className="flex flex-col  h-[490px] py-[25px] border-[3px] border-grey rounded-[10px] px-[20px] ">
                    <div className="flex flex-col h-[440px] mt-[10px] overflow-auto">
                        <Tag></Tag>
                        <Tag></Tag>
                        <Tag></Tag>
                        <Tag></Tag>
                        <Tag></Tag>
                        <Tag></Tag>
                        <Tag></Tag>
                        <Tag></Tag>
                        <Tag></Tag>
                        <Tag></Tag>
                        <Tag></Tag>
                        <Tag></Tag>
                        <Tag></Tag>
                        <Tag></Tag>
                        <Tag></Tag>
                        <Tag></Tag>
                    </div>
                </div>
                
            </div>
            <div className="flex flex-row md:flex-col items-end md:items-start justify-between">
                <RadiusBar></RadiusBar>
                <SearchButton></SearchButton>
            </div>
        </div>
    );
}
  
export default SearchPage;
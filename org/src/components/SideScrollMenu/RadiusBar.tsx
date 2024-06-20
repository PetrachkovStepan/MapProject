

function RadiusBar() {
    return (
        <div>
            <div className="mt-[30px] text-[20px] text-dark-grey">В радиусе:</div>
            <div className="flex flex-row items-center mt-[15px]">
                <input  className = " flex items-center px-[5px] md:p-[10px] h-[30px] md:h-[50px] w-[100px] rounded-[6px] border-[3px] border-grey  outline-none">
                </input>
                <div className = "text-[16px] text-dark-grey ml-[20px]">км</div>
            </div>
        </div>
    );
}
  
export default RadiusBar;
import noteImg from "../../assets/Note.svg"

function SaveButton() {
    return (
        <button className=" flex justify-between items-center h-[40px] w-[154px] rounded-[6px] border-[3px] px-[25px] border-grey">
            <img src={noteImg} className=" h-[20px] w-[15px]"></img>
            <div className="text-dark-grey text-[14px]">Сохранено</div>
        </button>
    );
}
  
export default SaveButton;
import { useTypeSelector } from "@//hooks/useTypeSelector";
import { addNote } from "@//utils/Firebase/Controller";
import noteImg from "@assets/Note.svg"

function SaveButton() {
    const state = useTypeSelector(state => state.place)
    const addNewNote = async () =>{
        addNote(state.item.xid, localStorage.userId)
    }
    return (
        <button className=" flex justify-between items-center h-[40px] sm:w-[154px] rounded-[6px] border-[3px] px-[25px] border-grey"
            onClick={addNewNote}>
            <img src={noteImg} alt="" className=" h-[20px] w-[15px]"/>
            <div className="text-dark-grey text-[0px] sm:text-[14px]">Сохранено</div>
        </button>
    );
}
  
export default SaveButton;
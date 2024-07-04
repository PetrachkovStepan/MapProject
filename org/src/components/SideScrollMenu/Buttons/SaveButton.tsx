import { useTypeSelector } from "@//hooks/useTypeSelector";
import { NoteType } from "@//store/types";
import { addNote, deleteNote, notesCollection } from "@//utils/Firebase/Controller";
import noteImg from "@assets/Note.svg"
import { onSnapshot, QuerySnapshot, DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function SaveButton() {
    const state = useTypeSelector(state => state.place)
    const navigate = useNavigate();  
    const[img, setImg] = useState<string>(noteImg)
    const [notes, setNotes] = useState<NoteType[]>([])

    useEffect(() => onSnapshot(notesCollection, (snapshot: 
        QuerySnapshot<DocumentData>) => {
        setNotes(
            snapshot.docs.map((doc)=>{
            return{
                id: doc.id,
                ...doc.data()
            };}));
        }
    ),[]);

const filterNotes = () => {
    for(let i = 0; i< notes.length; i ++){
        if(notes[i].user_id == localStorage.userId && notes[i].xid == state.item.xid){
            console.log("notes[i].id");
            console.log(notes[i].id);
            return notes[i].id
        }
    }
    return "Save to add" 
}
    const addNewNote = async () =>{
        let id = filterNotes()
        
        if(localStorage.isLogIn == "true"){
            if(id == "Save to add"){
                console.log("Add");
                console.log(id);
                addNote(state.item.xid, localStorage.userId)
             }else{
                console.log("Delete");
                console.log(id);
                deleteNote(id)
             }
        }else{
            navigate("/auth")
        }
    }
    return (
        <button className=" flex justify-between items-center h-[40px] sm:w-[154px] rounded-[6px] border-[3px] px-[25px] border-grey"
            onClick={addNewNote}>
            <img src={img} alt={img} className=" h-[20px] w-[15px]"/>
            <div className="text-dark-grey text-[0px] sm:text-[14px]">Сохранено</div>
        </button>
    );
}
  
export default SaveButton;
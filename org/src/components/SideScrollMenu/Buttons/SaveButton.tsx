import { useTypeSelector } from "@//hooks/useTypeSelector";
import { NoteType } from "@//store/types";
import { addNote, deleteNote, notesCollection } from "@//utils/Firebase/Controller";
import noteImg from "@assets/Note.svg"
import { onSnapshot, QuerySnapshot, DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import toSaveImg from"@assets/ToSaveButtonImg.svg";
import savedImg from"@assets/SavedButtonImg.svg";

function SaveButton() {
    const state = useTypeSelector(state => state.place)
    const navigate = useNavigate();  
    const[img, setImg] = useState<string>(toSaveImg)
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
    useEffect(() => {
        let id =filterNotes()
        if(id == "Save to add"){
            console.log("Save to add");
            setImg(toSaveImg)
         }else{
            console.log("Delete");
            setImg(savedImg)
         }
      },[notes]);

const filterNotes = () => {
    for(let i = 0; i< notes.length; i ++){
        if(notes[i].user_id == localStorage.userId && notes[i].xid == state.item.xid){
            console.log("notes[i].id");
            console.log(notes[i].id);
            console.log("Сохранено");
            return notes[i].id
        }
    }
    return "Save to add" 
}
    const addNewNote = async () =>{
        const id = filterNotes()
        if(localStorage.isLogIn == "true"){
            if(id == "Save to add"){
                addNote(state.item.xid, localStorage.userId)
                setImg(savedImg)
             }else{
                console.log("Delete");
                deleteNote(id)
                setImg(toSaveImg)
             }
        }else{
            navigate("/auth")
        }
    }
    return (
        <button className=" flex justify-between items-center h-[40px] sm:w-[154px] border-grey"
            onClick={addNewNote}>
            <img src={img} alt={savedImg}/>
        </button>
    );
}
  
export default SaveButton;
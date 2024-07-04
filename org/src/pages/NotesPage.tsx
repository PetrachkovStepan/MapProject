import SearchBar from "@sidebars/SearchBar";
import Note from "@sidelists/Note";
import { useDispatch, useSelector } from "react-redux";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useEffect, useState } from "react";
import { DocumentData, QuerySnapshot, onSnapshot } from "firebase/firestore";
import { notesCollection } from "../utils/Firebase/Controller";
import { NoteType } from "../store/types";
import NoteList from "../components/SideScrollMenu/Lists/NoteList";
import { useNavigate } from "react-router";


function NotesPage() {
    const navigate = useNavigate(); 
    const [notes, setNotes] = useState<NoteType[]>([])
    const state = useTypeSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(()=>{
        if(localStorage.isLogIn == "false"){
            navigate("/auth")
        }
    },[])
    useEffect(() => onSnapshot(notesCollection, (snapshot: 
        QuerySnapshot<DocumentData>) => {
        setNotes(
            snapshot.docs.map((doc)=>{
            return{
                id: doc.id,
                ...doc.data()
            }; 
        }) 
    );           
}),[]);
console.log(notes);
    

    return (
        <div  className = "h-screen bg-white flex flex-col px-[25px] pt-[25px]">
            <SearchBar/>
            <div className="mt-[30px] text-[20px] text-dark-grey">Избранное</div>
            <div className="flex flex-col mt-[10px] overflow-auto no-scrollbar">
                <NoteList items={notes}></NoteList>
            </div>
        </div>
    );
}
  
export default NotesPage;
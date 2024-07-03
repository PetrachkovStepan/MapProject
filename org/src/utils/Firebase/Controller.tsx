import {addDoc, collection, deleteDoc, doc, getFirestore} from 'firebase/firestore'
import { app } from './Firebase'

export const firestore = getFirestore(app)

//NOTES COLLECTION--NOTES COLLECTION--NOTES COLLECTION--

export const notesCollection = collection(firestore, 'notes')

//ADD NEW NOTE BY USER ID

export const addNote = async (xid: string, user_id: string ) => {
    const newNote = await addDoc(notesCollection, {
        xid: xid,
        user_id: user_id,
        created: Date.now(),
    })
        console.log("newNote");
        console.log(newNote);
}

//DELETE THE NOTE BY ID

export const deleteNote = async (id: string) => {
    const document = doc(firestore, "notes/" + {id})
    await deleteDoc(document)
}

//USERS COLLECTION--USERS COLLECTION--USERS COLLECTION--

export const usersCollection = collection(firestore, 'users')

//REGISTRATION

export const registrateUser = async (login: string, password: string ) => {
    const newUser = await addDoc(usersCollection, {
        password: password,
        login: login,
    })
        console.log("newUser");
        console.log(newUser);
}

import {collection, getFirestore} from 'firebase/firestore'
import { app } from './Firebase'

export const firestore = getFirestore(app)

//NOTES COLLECTION

export const notesCollection = collection(firestore, 'notes')
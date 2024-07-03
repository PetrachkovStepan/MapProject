import { NoteItems } from "@//store/types";
import Note from "./Note";

const NoteList = ({items}: NoteItems) => {
  return (
    <>
        {
        items.map((item) =>
            <Note key={item.id} item={item}></Note>
        )}
    </>
  );
};

export default NoteList;
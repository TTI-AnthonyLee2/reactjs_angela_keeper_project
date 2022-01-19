import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = useState([]);

    function addNote(inputNote) {
        setNotes(prevNotes => {
            return [...prevNotes, inputNote];
        })
    }

    // function deleteNote(id) {
    //     setNotes(prevNotes => {
    //         return;
    //     });
    // }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {
                notes.map((note, index) =>
                    // try uuid? 
                    <Note key={index} id={index} text={note} />
                )
            }
            <Footer />
        </div >
    );
}

export default App;
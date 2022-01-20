import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function CreateArea(props) {
    const defaultNote = { id: "", title: "", content: "" };
    const [inputNote, setInputText] = useState(defaultNote);

    function handleChange(event) {
        const {value: newValue, name} = event.target;
        // const newValue = event.target.value;
        // const name = event.target.name;

        setInputText(prevValue => {
            return {
                ...prevValue,
                [name]: newValue
            };
        })
    }

    function handleSubmitted(event) {
        if (inputNote.title.length === 0 && inputNote.content.length === 0) return;
        
        const inputNoteWithUuid = {...inputNote, id: uuidv4()};
        
        props.onAdd(inputNoteWithUuid);
        setInputText(defaultNote);
        event.preventDefault();

        // // Failed to set id property.
        // setInputText(prevValue => { // The state update is an asynchronous process.
        //     return {
        //         ...prevValue,
        //         id: uuidv4()
        //     };
        // })
        // props.onAdd(inputNote); // Here the "imputNote" hasn't been updated yet.
        // setInputText(defaultNote);
    }

    console.log("Re-rendering CreateArea.");

    return (
        <div>
            <form onSubmit={handleSubmitted}>
                <input value={inputNote.title} onChange={handleChange} name="title" placeholder="Title" />
                <textarea value={inputNote.content} onChange={handleChange} name="content" placeholder="Take a note..." rows="3" />
                <button>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
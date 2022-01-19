import React, { useState } from "react";

function CreateArea(props) {
    const defaultNote = { title: "", content: "" };
    const [inputNote, setInputText] = useState(defaultNote);

    function handleChange(event) {
        const newValue = event.target.value;
        const name = event.target.name;

        setInputText(prevValue => {
            return {
                ...prevValue,
                [name]: newValue
            };
        })
    }

    function handleSubmitted(event) {
        if (inputNote.title.length === 0 && inputNote.content.length === 0) return;
        event.preventDefault();
        props.onAdd(inputNote);
        setInputText(defaultNote);
    }

    return (
        <div>
            <form onSubmit={handleSubmitted}>
                <input value={inputNote.title} onChange={handleChange} name="title" placeholder="Title" />
                <textarea value={inputNote.content} onChange={handleChange} name="content" placeholder="Take a note..." rows="3" />
                <button>Add</button>
            </form>
        </div >
    );
}

export default CreateArea;
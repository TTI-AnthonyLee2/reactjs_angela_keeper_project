import React from "react";

function Note(props) {
    const { title, content } = props.text;

    return (
        <div 
            onClick={() => {
                props.onDelete(props.id);
            }} 
            className="note"
        >
            <h1>{title}</h1>
            <p>{content}</p>
            <button>DELETE</button>
        </div>
    );
}

export default Note;
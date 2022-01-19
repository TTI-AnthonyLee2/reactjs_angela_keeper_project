import React, { useState } from "react";

function Note(props) {
    const { title, content } = props.text;

    return (
        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>
            <button>DELETE</button>
        </div>
    );
}

export default Note;
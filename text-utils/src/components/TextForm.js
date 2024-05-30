import React, { useState } from 'react'

function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }
    const handleUpClick = () => {
        // console.log("UpperCase is clicked" + " " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="form-group">
                <textarea value={text} onChange={handleOnChange} className="form-control" id="myBox" rows="8"></textarea>
            </div>
            <br />
            <button type="button" className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
        </div>
    )
}

export default TextForm

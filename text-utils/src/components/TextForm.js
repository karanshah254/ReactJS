import React, { useState } from 'react'

function TextForm(props) {
    const [text, setText] = useState('');
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }
    const handleUpClick = () => {
        // console.log("UpperCase is clicked" + " " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        // console.log("UpperCase is clicked" + " " + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="form-group">
                    <textarea placeholder='Enter text' value={text} onChange={handleOnChange} className="form-control" id="myBox" rows="8"></textarea>
                </div>
                <br />
                <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button type="button" className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to LowerCase</button>
            </div>
            <div className="container my-4">
                <h2>
                    Your text summary:
                </h2>
                <p>
                    {text.split(" ").length} words {text.length} characters
                </p>
                <p>
                    {0.008 * text.split("").length} minutes to read
                </p>
                <p>
                    <b>Preview you text</b>
                </p>
                <h3>
                    {text}
                </h3>
            </div>
        </>
    )
}

export default TextForm

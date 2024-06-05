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
        // props.showAlert("Converted to UpperCase", "success");
    }
    const handleLoClick = () => {
        // console.log("UpperCase is clicked" + " " + text);
        let newText = text.toLowerCase();
        setText(newText);
        // props.showAlert("Converted to LowerCase", "success");
    }
    const handleClearText = () => {
        setText("");
        // props.showAlert("TextBox is cleared", "success");
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        // props.showAlert("Copied to Clipboard", "success");
    }

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="form-group">
                    <textarea style={{ backgroundColor: props.mode === 'dark' ? '#202020' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} placeholder='Enter Text' value={text} onChange={handleOnChange} className="form-control" id="myBox" rows="8"></textarea>
                </div>
                <br />
                <button disabled={text.length === 0} type="button" className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length === 0} type="button" className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to LowerCase</button>
                <button disabled={text.length === 0} type="button" className="btn btn-primary mx-2 my-2" onClick={handleClearText}>Clear above text</button>
                <button disabled={text.length === 0} type="button" className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy to Clipboard</button>
            </div >
            <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>
                    Your text summary:
                </h2>
                <p>
                    {text.split(" ").filter((element) => { return element.length !== 0 }).length} words {text.length} characters
                </p>
                <p>
                    {0.008 * text.split("").filter((element) => { return element.length !== 0 }).length} minutes to read
                </p>
                <p>
                    <b>Preview you text</b>
                </p>
                <p>
                    {text.length > 0 ? text : "Nothing to preview"}
                </p>
            </div>
        </>
    )
}

export default TextForm

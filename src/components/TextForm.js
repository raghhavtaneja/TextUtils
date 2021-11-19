import React,{useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success");
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Cleared Text!","danger");
    }
    const handleOnChange = (event)=>{
        // console.log("onchange")
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter Text Here");

    return (
        <>
        <div className="container " style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="6" />
            </div>

            <button type="submit" className="btn btn-primary mx-2" onClick={handleUpClick} >Convert To Uppercase</button>
            <button type="submit" className="btn btn-success mx-2" onClick={handleLowClick} >Convert To Lowercase</button>
            <button type="submit" className="btn btn-danger mx-2" onClick={handleClearClick} >Clear</button>
        </div> 
        <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>Number of words-{text===''?0:text.split(" ").length} Number of chars-{text.length}</p>
            <p>{Math.floor(0.008 * text.split(" ").length + 1) } minutes read</p>
            <p>Preview</p>
            <p>{text}</p>
        </div>
        </>
    )
}

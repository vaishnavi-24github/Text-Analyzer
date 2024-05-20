
//import './App.css';
//import './Conver.css';
//import { useState } from 'react';
//import "./Conversion.css";
//import bg from './bg';

import React, { useState } from 'react';
//import ReactDOM from "react-dom/client";

export default function Convercase() {
    const [myText, setmyText] = useState();
    // let words=myText.split(" ").length;
    //let characters=myText.length;
    //onChange event
    const Onchange = (event) => {
        setmyText(event.target.value)
    }
    const Lowercase = () => {
        let newtext = myText.toLowerCase();
        setmyText(newtext);
    }
    const Uppercase = () => {
        let newtext = myText.toUpperCase();
        setmyText(newtext);
    }
    const cap = () => {
        let newtext = myText.replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
        setmyText(newtext);
    }
    const Reverse = () => {
        let newtext = myText.split('').reverse().join('');
        setmyText(newtext);
    }
    const Clear = () => {
        setmyText('');
    }



    //css
    const headsty = {
        color: 'white',
        textAlign: 'center',
        marginBottom: '5px',
        padding: "0px",
        //fontSize:'50px',

    }
    const line1 = {
        width: '230px',
        height: '5px',
        backgroundColor: 'black',
        margin: 'auto',
    }
    const buttons = {
        display: "flex",
        justifyContent: "center",
        gap: "28px",
        //marginTop:'20px',
    }

    return (

        <div style={{ backgroundColor: "#3D4E78", height: "100vh", width: "100wh" }} className="whole">
            <div className='container mt-5'>
                <h1 style={headsty} className='text-center heading mt-5'> Text Analyzer</h1>
                <h1 style={line1} className='line'></h1>
                <form>
                    <div class="mb-3 mt-5" >
                        <label style={{ fontSize: '30px', color: 'white', fontFamily: 'Sans-serif' }} for="exampleFormControlTextarea1" class="form-label">Enter the text to analyze below</label>

                        <textarea style={{ borderColor: "black", borderWidth: "2px" }} class="form-control" id="exampleFormControlTextarea1"
                            onChange={Onchange} value={myText} rows='6' columns='12'></textarea>
                    </div>
                    <div style={buttons}>
                        <button style={{ backgroundColor: "#3D4E78", fontSize: "25px" }} type="button" class="btn btn-primary" onClick={Lowercase}>Convert to Lower Case</button>
                        <button style={{ backgroundColor: "#3D4E78", fontSize: "25px" }} type="button" class="btn btn-primary" onClick={Uppercase}>Convert to Upper Case</button>
                        <button style={{ backgroundColor: "#3D4E78", fontSize: "25px" }} type="button" class="btn btn-primary" onClick={cap}>Capitalize</button>
                        <button style={{ backgroundColor: "#3D4E78", fontSize: "25px" }} type="button" class="btn btn-primary" onClick={Reverse}>Reverse Text</button>
                        <button style={{ backgroundColor: "#3D4E78", fontSize: "25px" }} type="button" class="btn btn-primary" onClick={Clear}>Clear Text</button>
                    </div>

                </form>
                <div className="mt-5">
                    <h1 style={{ color: "white", padding: "20px", marginRight: "50px" }}>Word Summary</h1>

                    <p style={{ color: "white", padding: "20px", marginRight: '50px', fontSize: "20px" }}> {myText?.split(" ")?.length} word and {myText?.length} characters</p>
                    <h1 style={{ color: "white", padding: "20px", marginRight: "50px", }}>Preview</h1>
                </div>


            </div>
        </div>
    )
}

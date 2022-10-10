import React, {useState} from 'react';
//import PropTypes from 'prop-types';



export default function TextForm(props) {

  const[text,setText]= useState("");
  let newText="";
  const upper=()=>{
    newText= text.toUpperCase();
    setText(newText);
  }
  const change=(event)=>{
    setText(event.target.value);
  }
  const lower=()=>{
    newText= text.toLowerCase();
    setText(newText);
  }
  const reverse=()=>{
    for(let i=0;i<text.length;i++){
    if(text[i].toUpperCase()===text[i]){
      //console.log("yes");
      newText= newText+text[i].toLowerCase();
    }
    else{
      //console.log("no");
      newText= newText+text[i].toUpperCase();
    }
    setText(newText);

  }
  return(newText);
  
  }
  /*const[myStyle,setMyStyle] = useState({
    color :'black',
  })
  //const[btnName,setBtnName]= useState("Enable Dark mode");

  const toggle=()=>{
    if(myStyle.backgroundColor==='dark'){
      setMyStyle({
        color :'#808080',
        backgroundColor:' rgb(27, 26, 26)',
        border:'2px solid grey'
      
      })
      //setBtnName("Disable Dark mode");
    }
    else{
      setMyStyle({
        color :'black',
        //backgroundColor:'blue',
        border:'2px solid #00008B'
      })
     // setBtnName("Enable Dark mode");

    
    }}*/
  return (
    <div className={`bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}>
    <div className='box container ' >
      <h2>Text Analyzer</h2>
      <h4>Enter your text below:</h4>
    <div className="form-floating">
    <textarea className="abc" placeholder="Enter your text" value={text} onChange={change} id="floatingTextarea"></textarea>
  </div>
  <div><button className={`btn btn-primary my-2 bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}  onClick={upper}>To Uppercase</button></div>
  <div><button className={`btn btn-primary bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}  onClick={lower}>To Lowercase</button></div>
  <div><button className={`btn btn-primary my-2 bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} onClick={reverse}>Reverse</button></div>

  {/*<button className='btn btn-primary my-2' style={myStyle} onClick={toggle}>{btnName}</button>*/}


  </div></div>
    )
}

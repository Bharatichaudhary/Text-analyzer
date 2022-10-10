import React, {useState} from 'react';
export default function Note(){
    const [text,setText]= useState(" ");


    console.log("welcome to my app");
    var notesObj;






const addnote=()=>{
    console.log("i am clicked");
    console.log(text);
    setText("hello");
    /*let notes = localStorage.getItem("notes");
    if (notes === null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }*/
    let html = "";
    notesObj.forEach(function(element, index) {
      html += `
              <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                      <div class="card-body">
                          <h5 class="card-title">Note ${index + 1}</h5>
                          <p class="card-text"> ${element}</p>
                          <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                      </div>
                  </div>`;
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length !== 0) {
      notesElm.innerHTML = html;
    } else {
      notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}
    return(
        <>
        <div className="container my-4">
<h3>My Notebook</h3>
<div className="card" >
  
  <div className="card-body">
    <h5 className="card-title">Add Note</h5>
    <div className="mb-3">
  
  <textarea className="form-control" id="addtxt" rows="3" value={text}></textarea>
    </div>
    <button className="btn btn-primary" id="addbtn" onClick={addnote}>Add Note</button>
  </div>
</div>
<hr/>
<h3>Your Notes</h3>
<hr/>

</div>
        </>
    )
}
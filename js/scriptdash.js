// const notesContainer = document.getElementById("app");
// const addNoteButton = notesContainer.querySelector(".add-note");

// // getNotes().forEach((note) => {
// //   const noteElement = createNoteElement(note.id, note.content);
// //   notesContainer.insertBefore(noteElement, addNoteButton); 
// // });

// // addNoteButton.addEventListener("click", () => addNote());

// // function getNotes() {
// //   return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");
// // }

// // function saveNotes(notes) {
// //   localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
// // }

// function createNoteElement(id, content) {
//   const element = document.createElement("textarea");
//   //var element = document.querySelector('#element');

//   element.classList.add("note");
//   element.value = content;
//   element.placeholder = "Add a Note";
  

//   element.addEventListener("change", (e) => {
//      e.preventDefault(); //
//      db.collection('note').doc(id).set({ //
//       string: element.value  //
//      }).then(()=>{  //
//        location.reload();  //
//      })   //
//     updateNote(id, element.value);
//   });

//   element.addEventListener("dblclick", (e) => {
//     e.preventDefault(); //
//      db.collection('note').doc(id).set({ //
//       string: element.value  //
//      }).then(()=>{  //
//        location.reload();  //
//      })   //
//     const doDelete = confirm(
//       "Are you sure you wish to delete this sticky note?"
//     );

//     if (doDelete) {
//       deleteNote(id, element);
//     }
//   });

//   return element;
// }

// function addNote() {
//   const notes = getNotes();
//   const noteObject = {
//     id: Math.floor(Math.random() * 100000),
//     content: ""
//   };

//   const noteElement = createNoteElement(noteObject.id, noteObject.content);
//   notesContainer.insertBefore(noteElement, addNoteButton);

//   notes.push(noteObject);
//   saveNotes(notes);
// }

// function updateNote(id, newContent) {
//   const notes = getNotes();
//   const targetNote = notes.filter((note) => note.id == id)[0];

//   targetNote.content = newContent;
//   saveNotes(notes);
// }

// function deleteNote(id, element) {
//   const notes = getNotes().filter((note) => note.id != id);

//   saveNotes(notes);
//   notesContainer.removeChild(element);
// }

// console.log("Dashboard loaded")

// var user = firebase.auth().currentUser;
// if(user){
//     console.log("We are logged in")
// } else {
//     console.log("We are not logged in")
// }

// db.collection('note').get().then((querysnapshot)=>{ //
//   querysnapshot.forEach((doc)=>{   //
//     fill(doc.data().string); //
    
//   }) //
// })



var addNoteBTN = document.querySelector('#addNoteBTN');
var addNoteForm = document.querySelector('#addNoteForm');
var app = document.querySelector('#app');
var deleteNote = document.querySelector ('#deleteNote');   //
//console.log(addNoteBTN);

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});

addNoteForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  db.collection('note').doc().set({ 
    title: addNoteForm.noteTitle.value,
    body: addNoteForm.noteBody.value  
  }).then(()=>{  
    location.reload();  
  }) 
})

db.collection('note').get().then((querysnapshot)=>{ 
  querysnapshot.forEach((doc)=>{   
    console.log(doc.data());
  
    let newNote = document.createElement("div");
    newNote.classList.add('note');
    newNote.innerHTML = ` 
      <h4>${doc.data().title}</h4>
      <p>${doc.data().body}</p>
    
      <button type="button" class="small material-icons" onclick="confirm('Are you sure you wish to delete this note?')">delete</button> 
    
    `
    app.insertBefore(newNote, addNoteBTN);
  })   
});

/////////////////////////

deleteNote.addEventListener('button', (e)=>{
  e.preventDefault();
  db.collection('note').doc().delete().then(() => {
    location.reload();
    console.log("Document successfully deleted!");
  })
  //.catch((error) => {
    //console.error("Error removing document: ", error);
//})
const doDelete = confirm(
         "Are you sure you wish to delete this note?"
       );
  
       if (doDelete) {
         deleteNote(`${doc.data().title}`,`${doc.data().body}`);
         
       }
       return newNote;
});




  
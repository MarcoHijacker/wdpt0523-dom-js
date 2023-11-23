//* [JS] Il DOM (Document Object Model)

//! Metodi, funzioni e proprietà (nomenclatura)
// Crea un oggetto person con una age ed un metodo per salutare.
// let pi = 3.14;

// let person = {
//     age: 28,
//     greet: () => {
//         console.log("Ciao a tutti! Il pi è uguale a " + pi);
//     }
// }

// // ALT + cursore (up/down)
// // Invoca poi il metodo e stampa la proprietà age.

// console.log(person.age); // Stampando la proprietà age di person..
// person.greet(); // Invocato il metodo greet di person...

// function ciao() {
//     console.log("Ciao!");
// }

// ciao();

//? 1. getElementById()
//* Seleziona l'elemento che vuole cambiare colore nel DOM.
// let myDiv = document.getElementById("make-me-red");
// console.log(myDiv);

//? 2. getElementsByClassName()
//* Seleziona gli elementi con classe bottom-div.
// let myClassDivs = document.getElementsByClassName("bottom-div");
// console.log(myClassDivs);

//? 3. getElementsByTagName()
//* Seleziona tutti gli elementi di tipo <li>.
// let myLis = document.getElementsByTagName("li");
// console.log(myLis);

//? 4. querySelector()
//* Seleziona il primo <li> con classe fake-item.
// let firstLi = document.querySelector("li.fake-item");
// console.log(firstLi);

//? 5. querySelectorAll()
//* Seleziona tutti i <li> con classe item.
// let allLis = document.querySelectorAll("li.fake-item");
// console.log(allLis);

//? 6. node.children
//* Seleziona tutti i figli del <div> con id list-title, sfruttando la proprietà children.
// let listTitleItem = document.getElementById("list-title");
// let titleItemChildren = listTitleItem.children;
// console.log(listTitleItem);
// console.log(titleItemChildren);
// console.log(document.getElementById("list-title").children); // Selezione diretta

// let myUl = document.querySelector("ul.my-list");
// console.log(myUl.children);

//? 7. node.innerText
//* Cattura il testo contenuto nel <div> con id make-me-red.
// let myDiv = document.getElementById("make-me-red");
// let myDivText = myDiv.innerText;

// console.log(myDivText);
//* Modifica il testo contenuto nel <div> con id make-me-red come "Sono stato modificato!".
// let myDiv = document.getElementById("make-me-red");
// myDiv.innerText = "Sono stato modificato!";

//? 8. node.style.color
// Accontenta il div che vuole diventare rosso!
// let myDiv = document.getElementById("make-me-red");
// myDiv.style.color = "red";

//? 9. node.classList.add() / remove() / toggle()
// 0. Stampa la lista delle classi dell'<ul>
// let myUl = document.getElementById("features");
// console.log(myUl.classList);

// a. Togli la classe complete dall'<ul>.
// let myUl = document.getElementById("features");
// myUl.classList.remove("complete");

// // b. Aggiungi una classe test all'<ul>.
// myUl.classList.add("test");

// // c. Esegui il toggle della classe my-list sull'<ul>
// myUl.classList.toggle("my-list");

//? 10. onclick=""
// Lancia una funzione alertMe() (che produce un alert ed un c-log) al click sul button con id my-button.
// function alertMe() {
//     alert("Qualcosa è successo!");
//     console.log("Qualcosa è stato cliccato...");
// }

//? 11. createElement
// a. Creiamo un nuovo elemento <div>.
// let newEl = document.createElement("div");

// // b. Inserisci un testo nel <div> appena creato sopra, cambia il testo al suo interno in rosso ed assegnagli un id new-div.
// newEl.innerText = "Sono il testo nel nuovo elemento";
// newEl.style.color = "red";
// newEl.id = "new-div";

// console.log(newEl);

// //? 12. parent_node.appendChild()
// // c. Iniettiamo il <div> appena creato e personalizzato alla fine del <div> con id main-content.
// let myParent = document.getElementById("main-content");
// myParent.appendChild(newEl);

// //? 13. parent_node.insertBefore(child, position_element)
// // e. Iniettiamo il <div> appena creato e personalizzato prima dell'<ul> contenuto 
// // nel <div> con id main-content.
// let myUl = document.getElementById("features");
// myParent.insertBefore(newEl, myUl);
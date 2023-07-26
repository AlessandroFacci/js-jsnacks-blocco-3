// // Es 1

// // chiedo all'utente un primo numero
// const userFirstNumber = parseInt(prompt("Digita un numero"));
// console.log(userFirstNumber);
// // chiedo all'utente un secondo numero
// const userSecondNumber = parseInt(prompt("Digita un secondo numero"));
// console.log(userSecondNumber);

// // genero un numero random tra i due numeri
// const randomNumber =
//   Math.floor(Math.random() * (userFirstNumber - userSecondNumber)) +
//   userSecondNumber;
// console.log(randomNumber);

// // Es 2

// // chiedo all'utente una parola
// const firstWord = prompt("Inserisci una parola");
// console.log(firstWord);

// // chiedo all'utente una seconda parola
// const secondWord = prompt("Inserisci una seconda parola");
// console.log(secondWord);

// // verifico se le due parole hanno la stessa lunghezza
// if (firstWord.length == secondWord.length) {
//   //se hanno la stessa lunghezza le stampo entrambe
//   alert(firstWord + " " + secondWord);
//   // altrimenti stampo la più lunga
// } else if (firstWord.length > secondWord.length) {
//   alert(firstWord);
// } else {
//   alert(secondWord);
// }

// // Es 3

// // creo un array vuoto
// const numbersContainer = [];

// // creo la variabile per contenere la somma
// let sum = 0;

// // continuo a chiedere i numeri all'utente finchè la somma è 50
// while (sum < 50) {
//   let userNumber = parseInt(prompt("Digita un numero"));
//   sum += userNumber;

//   if (sum < 50) {
//     numbersContainer.push(userNumber);
//   }
// }

// console.log(numbersContainer);

// Es 4

// // Es 5

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// let evenNumbers = [];

// for (let i = 0; i < numbers.length - 1; i++) {
//   if (numbers % 2 == 0) {
//     evenNumbers.push(i);
//   }
// }

// console.log(evenNumbers);

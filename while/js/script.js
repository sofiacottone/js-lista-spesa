// METODO WHILE
// Consegna:
// Data una lista della spesa:
// const list = [
//     'Latte',
//     'Cacao',
//     'Insalata',
//     'Carote',
//     'Pomodori',
//     'Piatti pronti'
// ];
// Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente.
// Svolgete questo esercizio in 2 versioni: col ciclo for e col ciclo while.
// Consigli:
// - Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
// - Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while

const list = [
    'Latte',
    'Cacao',
    'Insalata',
    'Carote',
    'Pomodori',
    'Piatti pronti'
];
console.log(list);

// prendo il contenitore della lista dal DOM
const domList = document.querySelector('.list');

let i = 0;
// scorro l'elenco della lista finché l'indice dell'elemento è minore alla lunghezza dell'array
while (i < list.length) {
    const thisElement = list[i];

    // stampo tutti gli elementi nel DOM
    domList.innerHTML += `<li>${thisElement}</li>`;
    i++;
}

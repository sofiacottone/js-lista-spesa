// METODO FOR
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

const domList = document.querySelector('.list');

// scorro gli elementi dell'elenco
for (let i = 0; i < list.length; i++) {
    const thisElement = list[i];
    console.log(thisElement);

    // li stampo nel DOM
    domList.innerHTML += `<li>${thisElement}</li>`;

}
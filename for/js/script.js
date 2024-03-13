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
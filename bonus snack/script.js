// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. Non usare i metodi di array di JS

function maggioreMinore(array, a, b) {
    const result = [];
    for (let i = a; i < b; i++) {
        if (i >= 0 && i < array.length) {
            result.push(array[i]);
        }
    }
    return result;
}

const numeri = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const risultati = maggioreMinore(numeri, 0, 4);
console.log(risultati);
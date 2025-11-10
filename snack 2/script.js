// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadre = [
    {
        nome: "Juventus",
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: "Milan",
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: "Inter",
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: "Napoli",
        punti: 0,
        falliSubiti: 0
    }
];


const falliSquadre = [];


for (i = 0; i < squadre.length; i++) {
    const curSquadra = squadre[i];
    curSquadra.punti = Math.floor(Math.random() * (80 - 10 + 1)) + 10;
    curSquadra.falliSubiti = Math.floor(Math.random() * (30 - 5 + 1)) + 5;

    falliSquadre.push({
        nome: curSquadra.nome,
        falli: curSquadra.falliSubiti,
    })
}

console.log(falliSquadre);




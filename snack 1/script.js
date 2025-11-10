//Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo oppure in console la bici con peso minore.

const biciclette = [
    {
        nome: "fulmine",
        peso: 10
    },
    {
        nome: "tempesta",
        peso: 12
    },
    {
        nome: "saetta",
        peso: 8
    },
    {
        nome: "ombra",
        peso: 9
    }
];

let biciclettaLeggera = biciclette[0];

for (let i = 0; i < biciclette.length; i++) {
    const curBicicletta = biciclette[i]
    if (curBicicletta.peso < biciclettaLeggera.peso) {
        biciclettaLeggera = curBicicletta;
    }

}

console.log(`la bicicletta più leggera è ${biciclettaLeggera.nome}`);

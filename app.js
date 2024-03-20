// creo un array coi nomi degli ospiti

const nomiOspiti = [
    'Brad Pitt', 
    'Johnny Depp', 
    'Lady Gaga', 
    'Cristiano Ronaldo', 
    'Georgina Rodriguez', 
    'Chiara Ferragni', 
    'Fedez', 
    'George Clooney', 
    'Amal Clooney', 
    'Maneskin'
];

const tavolo = 'Tavolo VIP';
let postoTavolo = 1;


for (let i = 0; i < nomiOspiti.length; i++){
    let partecipante = nomiOspiti[i];

    const oggetto = {
        nomeTavolo: tavolo,
        nomeOspite: partecipante,
        posto: postoTavolo++
    }
    
    console.log(oggetto);
};

// nomiOspiti.forEach(function (partecipante) {
//     const oggetto = {
//         nomeTavolo: tavolo,
//         nomeOspite: partecipante,
//         posto: postoTavolo++
//     }
    
//     console.log(oggetto);
// });

// nomiOspiti.forEach((partecipante) => {
//     const oggetto = {
//         nomeTavolo: tavolo,
//         nomeOspite: partecipante,
//         posto: postoTavolo++
//     }
    
//     console.log(oggetto);
// });

// il metodo map restituisce un array

// const guestArray = nomiOspiti.map((partecipante) => {
//     const oggetto = {
//         nomeTavolo: tavolo,
//         nomeOspite: partecipante,
//         posto: postoTavolo++
//     }

//     return oggetto;
// });

// console.log(guestArray);


//--------------------------------------------------------------------------------------------------------------------------------------


const studenti = [
    {
        id: 213, 
        nome: 'Marco della Rovere',
        grado: 78,
    }, 

    {
        id: 110,
        nome: 'Paola Cortellessa',
        grado: 96,
    }, 

    {
        id: 250, 
        nome: 'Andrea Mantegna',
        grado: 48,
    }, 

    {
        id: 145, 
        nome: 'Gaia Borromini',
        grado: 74,
    }, 

    {
        id: 196, 
        nome: 'Luigi Grimaldello',
        grado: 68,
    }, 

    {
        id: 102, 
        nome: 'Piero della Francesca',
        grado: 50,
    }, 

    {
        id: 120, 
        nome: 'Francesca da Polenta',
        grado: 84,
    }, 
];

const nomiMaiuscoli = studenti.map((elemento) =>{
    return {
        id: elemento.id,
        nome: elemento.nome.toUpperCase(),
        grado: elemento.grado,
    }
});

console.log(nomiMaiuscoli);

let studentiSecchioni = studenti.filter((el) => el.grado > 70);
let studentiSecchioniId = studenti.filter((el) => el.grado > 70 && el.id > 120);

console.log(studentiSecchioni);
console.log(studentiSecchioniId);

//----------------------------------------------------------------------------------------------------

// creo un array di bici con nome e peso

const bikes = [
    {
        nome: 'hiland',
        peso: 10,
    },

    {
        nome: 'galano',
        peso: 7,
    },

    {
        nome: 'mu',
        peso: 7,
    },

    {
        nome: 'kabon',
        peso: 8,
    },

    {
        nome: 'parker',
        peso: 9,
    },

    {
        nome: 'octagon',
        peso: 6,
    }

];

// trovare la bici che pesa meno

// const bikesCopy = bikes.map((element) =>{
//     return element.peso;
// });

// console.log(bikesCopy);

let pesoMin;
let indexWithPesoMin;

for (let i = 0; i < bikes.length; i++) {
    const bike = bikes[i];
    const { peso } = bike;

    if (i === 0) { // se sono al primo elemento
        pesoMin = peso;
        indexWithPesoMin = 0;
    } else if (peso < pesoMin) {
        pesoMin = peso;
        indexWithPesoMin = i;
    }
}

console.log(bikes[indexWithPesoMin]);
// stamparla in console 

//----------------------------------------------------------------------------------

const squadreCalcio = [
    {
        nome: 'inter',
        puntiFatti: 0,
        falliSubiti: 0,
    },

    {
        nome: 'milan',
        puntiFatti: 0,
        falliSubiti: 0,
    },

    {
        nome: 'juventus',
        puntiFatti: 0,
        falliSubiti: 0,
    },

    {
        nome: 'roma',
        puntiFatti: 0,
        falliSubiti: 0,
    },

    {
        nome: 'napoli',
        puntiFatti: 0,
        falliSubiti: 0,
    },

    {
        nome: 'sassuolo',
        puntiFatti: 0,
        falliSubiti: 0,
    },

];

// generare numeri random al posto dei punti e dei falli 

for (let i = 0; i < squadreCalcio.length; i++) {
    const squadraCorrente = squadreCalcio[i];
    
    squadraCorrente.puntiFatti = Math.floor(Math.random() *115);
    squadraCorrente.falliSubiti = Math.floor(Math.random() *80);
}

console.log(squadreCalcio);

// creo un nuvo array con

const nuovoArraySquadre = squadreCalcio.map((clubs) => {
    const {nome, falliSubiti} = clubs;
    return {
        nome,
        falliSubiti,
    }
});

console.log(nuovoArraySquadre);
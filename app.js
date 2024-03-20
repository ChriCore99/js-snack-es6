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
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
let Partecipante;
let postoTavolo = 1;


for (let i = 0; i < nomiOspiti.length; i++){
    Partecipante = nomiOspiti[i];

    const oggetto = {
        nomeTavolo: tavolo,
        nomeOspite: Partecipante,
        posto: postoTavolo++
    }
    
    console.log(oggetto);
};
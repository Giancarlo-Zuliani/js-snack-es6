//EX1 creare un oggetto palla e attraverso un prompt modificarne il peso;

const PALLA = {
  nome : 'palla',
  peso : 10
};

let nuovoPeso = parseInt(prompt('inserisci il nuovo peso della palla'));

PALLA.peso = nuovoPeso;

console.log(PALLA);


//EX 2 DATO UN ARRAY DI OGGETTI STAMPA IN CONSOLE QUELLO CON IL PESO MINORE;
const BICI = [
  {
    'nome' : 'mountain bike',
    'peso' : 500
  },
  {
    'nome' : 'bici da corsa',
    'peso' : 950
  },
  {
    'nome' : 'triciclo',
    'peso' : 80
  },
  {
    'nome' : 'tandem',
    'peso' : 125
  }
];

var biciLeggera = BICI[0];

BICI.forEach((elem) =>{
  if(elem.peso < biciLeggera.peso){
    biciLeggera = elem;
  };
});

console.log(`${biciLeggera.nome} è la piu leggera con ${biciLeggera.peso} kg`);

//EX3 DATO UN ARRAY CON DIVERSE SQUADRE CON PUNTI_FATTI E FALLI_SUBITI A 0 STAMPA IN CONSOLE LE SQUADRE CON NUMERI CASUALI;

var squadre = [
  {
    'nome' : 'juventus',
    'punti_fatti' : 0,
    'falli_subiti' : 0
  },
  {
    'nome' : 'milan',
    'punti_fatti' : 0,
    'falli_subiti' : 0
  },
  {
    'nome' : 'inter',
    'punti_fatti' : 0,
    'falli_subiti' : 0
  },
  {
    'nome' : 'lazio',
    'punti_fatti' : 0,
    'falli_subiti' : 0
  },
  {
    'nome' : 'napoli',
    'punti_fatti' : 0,
    'falli_subiti' : 0
  },
  {
    'nome' : 'roma',
    'punti_fatti' : 0,
    'falli_subiti' : 0
  },
  {
    'nome' : 'fiorentina',
    'punti_fatti' : 0,
    'falli_subiti' : 0
  },
  {
    'nome' : 'atalanta',
    'punti_fatti' : 0,
    'falli_subiti' : 0
  }
];

squadre.forEach((elem)=>{
  elem.punti_fatti = Math.floor(Math.random()*99)+1
  elem.falli_subiti = Math.floor(Math.random()*99)+1
});

console.log(squadre);

//EX4 DATO UN ARRAY DI OGGETTI INIZIALE chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
// quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente

const MYARRAY = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
var newArray = [];
var from;
var to;

while(from === undefined){
 let x = parseInt(prompt('insersci un numero da 1 a 6'));
 if( x < MYARRAY.length && x >= 1){
   from = x
 }
};

while(to === undefined){
  let x = parseInt(prompt('inserisci un altro numero superiore all altro e inferiore di 7'))
  if(x > from && x < MYARRAY.length){
    to = x
  }
};

for(i=(from-1) ; i < to ;i++){
  newArray.push(MYARRAY[i])
};

console.log(newArray);

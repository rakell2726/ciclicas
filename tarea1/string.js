/*  Leer 15 números negativos y convertirlos a 
positivos e imprimir dichos números.
*/


let numero = 0;
let numerop = 0;

for(let i=1; i<=15; i++){
  numero = Number(prompt('Ingrese número'));
  if(numero<0){
    numerop= numero * (-1);
  }
  alert('El numero es: ' + numerop);
}

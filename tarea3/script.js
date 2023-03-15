/* Simular el comportamiento de un reloj digital, imprimiendo la hora, 
minutos y segundos de un día desde las 0:00:00 horas hasta las 23:59:59 horas.
*/

let hora,minuto,segundos;
for (let h=00; h<=23;h++ ){//horas
    for(let m=00;m<=59;m++){//minutos
        for(let s=00; s<=59;s++){//segundos
            if (h<10 && m<10 && s<10){
                document.write(`0${h}:0${m}:0${s} <br>`);
                

            }
            
        }
    }
}

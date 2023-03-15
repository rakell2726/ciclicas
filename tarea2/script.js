/* Suponga que tiene un conjunto de calificaciones
    de un grupo de 40 estudiantes, realizar un algoritmo 
    para calcular la calificación promedio (media) y 
    la calificación más baja de todo el grupo. */

let suma = 0;
let calificacion;
let promedio = 0;
let calificacionb;

for (let i = 1; i<=5; i++){
    calificacion = Number(prompt('Ingrese calificación'));
    suma = suma + calificacion;
    if(calificacion>=3){
        calificacion=calificacion;
    }else{
        if ((calificacion>=0) && (calificacion<3)){
            calificacionb=calificacion;
        }
    }
    }
    
    promedio = suma/5;
    alert('El promedio es: ' + promedio);
    alert('la calificación más baja es: ' + calificacionb);
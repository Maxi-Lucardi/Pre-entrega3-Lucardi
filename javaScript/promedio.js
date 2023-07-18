// por alertas
let cantidadAlumnos = prompt("Ingrese cuantos alumnos son:")
if(cantidadAlumnos > 10){

    alert("SON DEMASIADOS ALUMNOS!! intenta de nuevo")

}else{  

for (let i = 0; i < cantidadAlumnos; i++) {

    let notaAlumnos = prompt("Ingresar nota")

    if (notaAlumnos >= 7 && notaAlumnos <= 10) {
        alert("FELICIDADES aprobaste!")

    } else if(notaAlumnos >=0 && notaAlumnos <=6 ){
      
       alert("REPROBASTE  volve a estudiar!!")
    } else{
        alert("CUIDADO ingresaste mal la nota")
    }   

}

//por consola 

let nota1 = parseInt(prompt("ingrese la primer nota"))
let nota2 = parseInt(prompt("ingrese la segunda nota"))
let nota3 = parseInt(prompt("ingrese la tercera nota"))

let promedio = (nota1 + nota2 + nota3) / 3
parseInt(promedio)

if ( promedio >= 0 && promedio <= 5) {
    console.log(" DESAPROBADO!! anda a estudiar tu nota es un:" + " " + promedio)
} else if (promedio >= 6 && promedio <= 10) {
    console.log("FELICIDADES!! aprobaste tu nota es un:" + " " + promedio)
} else{
    alert("CUIDADO agregaste mal la nota!")


}
}








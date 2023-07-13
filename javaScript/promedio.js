let nota1 = parseInt(prompt("ingrese la primer nota"))
let nota2 = parseInt(prompt("ingrese la segunda nota"))
let nota3 = parseInt(prompt("ingrese la tercera nota"))

let promedio = (nota1+nota2+nota3)/3
parseInt(promedio)

if(promedio >=0 && promedio <= 5 ){
    console.log( " estas desaprobado anda a estudiar tu nota es un:" + " " + promedio)
}else if(promedio >= 6 && promedio <=10 ){ 
    console.log("felicidades aprobaste tu nota es un:" + " " + promedio)
}else{
    alert("cuidado agregaste mal la nota!")
}



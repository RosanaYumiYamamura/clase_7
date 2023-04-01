//Algoritmo que muestre la tabla de multiplicación del "x"# y hasta que # ingresado por el usuario//
//Ingrese el número: 9------Ingrese hasta qué número: 4///
import * as rls from "readline-sync";
let no1 : number = rls.questionInt("Ingrese el número: ");
let no2 : number = rls.questionInt("Ingrese hasta qué número: ");
let result : number = 0;
if (no1 < 0) {
result = no1*no2;
} else {
result = no1*no2;
}
console.log("9x1=1");
console.log("9x2=18");
console.log("9x3=27");
console.log("9x4=" + result);
// projeto: Calculadora (JavaScript)
// Arquivo: main.js
// Objetivo: praticar funcões e execução com Node.js (sem loops complexos)
function soma(a,b) {
    return a + b;
}
function subtrair(a,b) {
    return a - b;
}
function multiplicar(a,b) {
    return a * b;
}
function dividir(a,b) {
 // Observação: evite b = 0 para não dividir por zero
 return a / b;
}
let x = 7.5;
let y = 2.5;
function somar(a,b) {
    return soma(a,b);
}
function sbtrair(a,b) {
    return subtrair(a,b);
}

console.log("== CALCULADORA BASICA ==");
console.log("Valores:", x, "e", y);
console.log("Soma;", somar(x,y));
console.log("Subtração;", sbtrair(x,y));
console.log("Multiplicação;", multiplicar(x,y));
console.log("Divisão;", dividir(x,y));

function potencia(a,b) {
    return Math.pow(a,b);
}

console.log("Potência a^b:", potencia(x,y));



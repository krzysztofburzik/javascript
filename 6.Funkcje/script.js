// ZADANIE 1

function something(){
	return "Udało się!";
}
console.log(something());

// ZADANIE 2

var a = 69;
function abc(b){
    return b;
}
console.log(abc(a));

// ZADANIE 3

const x = [1, 2, 3, 4, 5];
function tabs(x){
  return x;
}
console.log(tabs(x));

// ZADANIE 4

var counter = 1;
var smth = "hello world";

function write(smth) {
  console.log(smth);
  counter++;
  if (counter > 5) {
    clearInterval(int);
    console.log("Koniec.");
  }
}
var int = setInterval(write, 3000, smth); 

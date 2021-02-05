// ZADANIE 1

let number1 = 1;
let number2 = 2;

if(number1>number2) {
  console.log('Liczba1 jest większa');  
} else {
  console.log('Liczba2 jest większa');  
} 

// ZADANIE 2

let q = 226;
let w = 18;
let e = 10;

if (q > w) {
    if (q > e) {
        console.log("Liczba q jest największa");
    } else {
        console.log("Liczba e jest największa");
    }
} else if (w > e) {
    console.log("Liczba w jest największa");
} else {
    console.log("Liczba e jest największa");
}

// ZADANIE 3

for (let i = 0; i < 10; i++) {
    console.log("Lubię JavaScript");
}

// ZADANIE  4

let number1= 0;

for (let i = 0; i <= 10; i++) {
   number1 += i;
}

console.log(number1);

// ZADANIE  5 

var n = 5;

for ( let i = 0; i <= n; i++) {
   if(i % 2 == 0){
       console.log(i+" - parzysta");
   } else {       
       console.log(i+" - nieparzysta");
   }
}

// ZADANIE  6

for (let x = 1; x <= 10; x++) {
    for (let z = 1; z <= 10; z++) {
        console.log("x= " + x + ", z= " + z);
    }
}

// ZADANIE  7 

console.log(0);
for(i = 1; i < 100; i++) {
if(i%15==0)
    console.log("FizzBuzz");
else if(i%3 == 0)
    console.log("Fizz");
else if(i%5 == 0)
    console.log("Buzz");
else
    console.log(i);
}

// ZADANIE  8.a

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

// ZADANIE  8.b

let star = ' *';

for(let x = 0; x < 5; x++) {
 var result = '';
 for(y = 0; y < 5 - x; y++) {
 result += ' ';
 }
 for(z = 0; z < x + 1; z++) {
 result += star;
 }
 console.log(result);
 }

// ZADANIE  8.c

  let tree = '';
  const height = 5;
  let stars = 1;
  for (let row = 1; row <= height; row++) {
    tree += ' '.repeat(height-row);
    tree += '*'.repeat(stars) + '\n';
    stars += 2;
  }
  console.log(tree);

// ZADANIE  8.d

let show = '';
  let show1 = '';
  const height = 5;
  for (let row = 1; row <= height; row++) {
    show += '*'.repeat(row)
    for (let i = row; i < height; i++) {
      show += i;
    }
    show += '\n';

    show1 += '*'.repeat(height - row + 1);
    for (let i = (height - row + 1); i < height; i++) {
      show1 += i;
    }
    show1 += '\n';
  }
  console.log(show);
  console.log("-".repeat(height));
  console.log(show1);

// ZADANIE  8.e

  var dart = '';
  const size = 5;
  for (let i = 1; i <= size; i++) {
    dart += ' '.repeat(size-i);
    dart += '* '.repeat(i) + '\n';
  }
  for (let i = 0; i < (size-2); i++) {
    dart += " ".repeat(size-1);
    dart += "* \n";
  }
  console.log(dart);

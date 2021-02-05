// ZADANIE  1

var car = {
  name: 'BMW',
  model: 'E46',
  power: '115 HP',
  color: 'silver'
};
console.log(car);

// ZADANIE 2

car.changeName = function(chg){
    this.name = chg;
}
car.changeName('Audi');
console.log(car);

// ZADANIE 3

let a= {
 sum: function(arr){
        this.sum = arr.reduce((b, c) => b += c);
    }
} 
a.sum([8,9,45,1,2]);
console.log(a);

// ZADANIE 4

const car = {
    name:'BMW',
    age: 12,
    color: 'Blue',
    model: 550
}

Object.keys(car).forEach((key) => console.log(`${key}: ${car[key]}`))

// ZADANIE 5

const car = {
  name: 'Audi',
  age: 8,
  color: 'Red',
  model: 'A4 C5'
}
Object.keys(car).forEach((key) => console.log(`${key}: ${car[key]}`))

// ZADANIE 6

const car = {
  name: 'Audi',
  age: 8,
  color: 'Red',
  model: 'A4 C5'
}

car.engine = "4.2 V8";

car.hello = function() {
    console.log("Hello");
}
car.hello();

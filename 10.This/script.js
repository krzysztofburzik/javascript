// ZADANIE  1

let person = {
    name: "Janusz",
    surename: "Kowalski",
    age: 69, 
    country:"Poland",
    city: "Cracow",
    
  newAge:  
    
    function(){
      this.age++;
      return this.age;
    }
}

let person2 = {
    name:"Anna",
    surename:"Kowalska",
    age: 19,
	country:"Poland",
    city:"Bytom",
    
  newAge:  
    
    function(){
      this.age++;
      return this.age;
    }
}
Object.keys(person).forEach((key) => console.log(`${key}: ${person2[key]}`))
Object.keys(person2).forEach((key) => console.log(`${key}: ${person2[key]}`))

console.log(person.newAge());
console.log(person.newAge());
console.log(person.newAge());
Object.keys(person).forEach((key) => console.log(`${key}: ${person2[key]}`))

console.log(person2.newAge());
console.log(person2.newAge());
console.log(person2.newAge());
console.log(person2.newAge());
Object.keys(person2).forEach((key) => console.log(`${key}: ${person2[key]}`))

// Z A D A N I E  2

person.dishes =['cutlet','spaghetti','salad'];
person2.dishes =['chicken with rice','chicken soup','burger'];

person.favouriteDishes= function(dish){
    this.dishes.push(dish);}
person2.favouriteDishes= function(dish){
    this.dishes.push(dish);}
console.log(person);
console.log(person2);
console.log('After adding their dishes:');
person.favouriteDishes('dumplings');
console.log(person);
person2.favouriteDishes('casserole');
console.log(person2);

// Z A D A N I E  3

let calculator = {
  a: 0,
  b: 0,
    add: function(c, d){
        this.a = c;
        this.b = d;
    },
    sum: function(){
        return this.a + this.b;
    },
    difference: function(){
        return this.a - this.b;
    },
    product: function(){
        return this.a * this.b;
    },
    quotient: function(){
        if(this.b != 0){
            return this.a / this.b;
        }
      else
        {
            return "Can't divide by 0";
        }
    }
}

calculator.add(15,13);
console.log(calculator.sum());
console.log(calculator.difference());
console.log(calculator.product());
console.log(calculator.quotient());

// Z A D A N I E  4

let stairs = {
    yourStair: 0,
    goUp: function() {
        this.yourStair++;
    },
    
    goDown: function() {
        if (this.yourStair <= 0) {
            this.yourStair = 0;
            console.log("You reached the lowest stair!");
            
            return;
        }
        this.yourStair--;
    },

    tellMeMyStair: function() {
        return `Your Stair: ${this.yourStair}`;
    }
};

console.log(stairs.tellMeMyStair());
stairs.goUp();
console.log(stairs.tellMeMyStair());
stairs.goDown();
stairs.goDown();

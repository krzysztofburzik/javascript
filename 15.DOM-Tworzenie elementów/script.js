document.addEventListener('DOMContentLoaded', () => {

// ZADANIE  1

var exe = document.querySelector('#root');
  var newElem = document.createElement('div');
  newElem.innerHTML = 'To jest nowy element';
  exe.appendChild(newElem);
  
 // ZADANIE   2
  
  const myTab = ["Cherry", "Orange", "Peach", "Apple", "Watermelon", "Sea Buckthorn"];
  const myList = document.createElement('ol');
  myList.id = 'myList';

myTab.forEach((a) => {
    var myFruit = document.createElement('li');
    myFruit.innerText = a;

    myList.append(myFruit);
});

newElem.append(myList);
document.body.insertBefore(newElem, document.getElementById('root'));  
  
  // ZADANIE E  3
  
  newElem.addEventListener('click', () => {
    Array.from(myList.children).forEach((el, x) => {
        if (x % 2 === 1) {
            myList.removeChild(el);
        }
    });
});
  
    // ZADANIE   4
  
   var btn = document.createElement('button');
  btn.innerText = 'Click&Hide';
  btn.addEventListener('click', (event) => event.target.remove());
  exe.appendChild(btn);
  
  // ZADANIE  5
  
  var random = Math.round(Math.random() * 10);

  for (var a = 0; a < random; a++) {
      var someDiv = document.createElement('div');

      someDiv.innerHTML = `to jest div numer ${a}`;
      exe.appendChild(someDiv);
  }
  
    // ZADANIE   6
  
  const myNewObjStr = { 
    div1: 'to jest div1', 
    span1: 'to jest span1', 
    div2: { 
      div3: 'to jest div3(2)', 
    }, 
    span2: 'to jest span2', 
    
  }

  const r00t = document.getElementById('root');
  
  const firstDiv = document.createElement('div');
firstDiv.innerText = myNewObjStr.div1;

const firstSpan = document.createElement('span');
firstSpan.innerText = myNewObjStr.span1;

firstDiv.append(firstSpan);

document.body.append(firstDiv, r00t);

const secondDiv = document.createElement('div');
const thirdDiv = document.createElement('div');
thirdDiv.innerText = myNewObjStr.div2.div3;

const secondSpan = document.createElement('span');
secondSpan.innerText = myNewObjStr.span2;

secondDiv.append(thirdDiv);
secondDiv.append(secondSpan);

document.body.append(secondDiv, r00t);
  
    //ZADANIE   7
  
  var myOLlist = document.createElement('ol');
  myOLlist.id = "firstList";
  var myFirstButton = document.createElement('button');
  myFirstButton.id = "firstButton";
  myFirstButton.innerText = 'first OL list';

  var q = document.createElement('li');
  q.innerText = "Q";
  var w = document.createElement('li');
  w.innerText = "W";
  var e = document.createElement('li');
  e.innerText = "E";
  var r = document.createElement('li');
  r.innerText = "R";
  var t = document.createElement('li');
  t.innerText = "T";
  var y = document.createElement('li');
  y.innerText = "Y";

  myOLlist.appendChild(q);
  myOLlist.appendChild(w);
  myOLlist.appendChild(e);
  myOLlist.appendChild(r);
  myOLlist.appendChild(t);
  myOLlist.appendChild(y);

  
  var myNextOLlist = document.createElement('ol');
  myNextOLlist.id = "secondList";

  var mySecondButton = document.createElement('button');
  mySecondButton.id = "secondButton";
  mySecondButton.innerText = "second OL list";

  root.appendChild(myOLlist);
  root.appendChild(myFirstButton);
  root.appendChild(myNextOLlist);
  root.appendChild(mySecondButton);

  function toTWO(){
    var listOne =document.querySelector("#firstList");
    var listTwo =document.querySelector("#secondList");
    var listOfElements1 = listOne.getElementsByTagName("li");
    var listOfElements2 = listTwo.getElementsByTagName("li");
    var theEnd = listOfElements1[listOfElements1.length-1];
    var theLastOfUs = theEnd.innerText;
    var qwerty = document.createElement('li'); 
    qwerty.innerText = theLastOfUs;
    listTwo.appendChild(qwerty);
    listOne.removeChild(theEnd);

    if( listOfElements1.length < 1){
      document.querySelector("#firstButton").disabled = true;
    }
    if(listOfElements2.length >= 1){
      document.querySelector("#secondButton").disabled = false;
    }
  }
  document.querySelector('#firstButton').addEventListener('click', toTWO);

  function toOne(){
    var listTwo =document.querySelector("#firstList");
    var listOne =document.querySelector("#secondList");
    var listOfElements1 = listOne.getElementsByTagName("li");
    var listOfElements2 = listTwo.getElementsByTagName("li");
    var theEnd = listOfElements1[listOfElements1.length-1];
    var theLastOfUs = theEnd.innerText;
    var qwerty = document.createElement('li'); 
    qwerty.innerText = theLastOfUs;
    listTwo.appendChild(qwerty);
    listOne.removeChild(theEnd);

    if(listOfElements1.length < 1){
      document.querySelector("#secondButton").disabled = true;
    }
    if(listOfElements2.length >= 1){
      document.querySelector("#firstButton").disabled = false;
    }

  }
  document.querySelector('#secondButton').addEventListener('click', toOne);
  
  //ZADANIE  8

  var newFormulage = document.createElement("form");
  root.appendChild(newFormulage);
  var whatIsIt = document.createElement("input");
  whatIsIt.setAttribute('type', 'text');
  whatIsIt.setAttribute('value', 'HowItIsCalled');
  var someThing = document.createElement("input");
  someThing.setAttribute('type', 'text');
  someThing.setAttribute('value', 'SomethingToWrite');
  var chooseItsColor = document.createElement("input");
  chooseItsColor.setAttribute('type', 'text');
  chooseItsColor.setAttribute('value', 'WhatColorDoYouWant');
  var howManyTimes = document.createElement("input");
  howManyTimes.setAttribute('type', 'text');
  howManyTimes.setAttribute('value', 'quantity');

  newFormulage.appendChild(whatIsIt);
  newFormulage.appendChild(someThing);
  newFormulage.appendChild(chooseItsColor);
  newFormulage.appendChild(howManyTimes);

  var dontDOit = document.createElement('button');
  dontDOit.id = "abc"
  dontDOit.type = 'button'
  dontDOit.innerText = "DONE!";
  newFormulage.appendChild(dontDOit);

  function coolFun(){
    for(var i = 0; i < howManyTimes.value; i++){
      var added = document.createElement(whatIsIt.value);
      added.innerText = someThing.value;
      added.style.color = chooseItsColor.value;
      root.appendChild(added);
    }
  }
  document.querySelector('#abc').addEventListener('click', coolFun );
  
    //ZADANIE   9

  var nextFormulage = document.createElement("form");
  root.appendChild(nextFormulage);
  var yourName = document.createElement("input");
  yourName.setAttribute('type', 'text');
  yourName.setAttribute('value', 'Name');
  var lastname = document.createElement("input");
  lastname.setAttribute('type', 'text');
  lastname.setAttribute('value', 'Lastname');
  var age = document.createElement("input");
  age.setAttribute('type', 'text');
  age.setAttribute('value', 'Age');
  var howManyKids = document.createElement("input");
  howManyKids.setAttribute('type', 'text');
  howManyKids.setAttribute('value', 'HowManyKids');

  nextFormulage.appendChild(yourName);
  nextFormulage.appendChild(lastname);
  nextFormulage.appendChild(age);
  nextFormulage.appendChild(howManyKids);

  var moreButton = document.createElement('button');
  moreButton.id = "more"
  moreButton.type = 'button'
  moreButton.innerText = "Więcej";
  nextFormulage.appendChild(moreButton);

  var createButton = document.createElement('button');
  createButton.id = "create"
  createButton.type = 'button'
  createButton.innerText = "Utwórz";
  nextFormulage.appendChild(createButton);

  var nameTab = [];
  var lastnameTab = [];
  var ageTab = [];
  var kidsTab = [];

  function moreFields(){
    nameTab.push(yourName.value);
    lastnameTab.push(lastname.value);
    ageTab.push(age.value);
    kidsTab.push(howManyKids.value);
    yourName.value = '';
    lastname.value = '';
    age.value = '';
    howManyKids.value = '';

  }
  document.querySelector('#more').addEventListener('click', moreFields);

  function createTable(){
    nameTab.push(yourName.value);
    lastnameTab.push(lastname.value);
    ageTab.push(age.value);
    kidsTab.push(howManyKids.value);
    yourName.value = '';
    lastname.value = '';
    age.value = '';
    howManyKids.value = '';


    var tab = document.createElement("table");
    
    var header = document.createElement('tr');
    tab.appendChild(header);
    var name = document.createElement('th');
    name.innerHTML = "Name";
    var lastName = document.createElement('th');
    lastName.innerHTML = "Lastname";
    var age1 = document.createElement('th');
    age1.innerHTML = "Age";
    var kids = document.createElement('th');
    kids.innerHTML = "HowManyKids";
    
    root.appendChild(tab);
    header.appendChild(name);
    header.appendChild(lastName);
    header.appendChild(age1);
    header.appendChild(kids);
    
    for (var i = 0; i < nameTab.length; i++) {
      var item = document.createElement('tr');
      tab.appendChild(item);
      var del = document.createElement('button');
      del.innerText = "Usuń";
      item.appendChild(del);

      var newName = document.createElement('td');
      newName.innerText = nameTab[i];
      var newLastname = document.createElement('td');
      newLastname.innerText = lastnameTab[i];
      var newAge = document.createElement('td');
      newAge.innerText = ageTab[i];
      var newKids = document.createElement('td');
      newKids.innerText= kidsTab[i];   

      
      item.appendChild(newName);
      item.appendChild(newLastname);
      item.appendChild(newAge);
      item.appendChild(newKids);
      item.appendChild(del);

      del.addEventListener('click', deleteA);
    
    }
    nameTab = [];
    lastnameTab = [];
    ageTab = [];
    kidsTab = [];
  }

  function deleteA(e) {
    
    e.target  .parentElement.remove()
  }

  document.querySelector('#create').addEventListener('click', createTable);
  
    // ZADANIE  10

  let changeButton = document.createElement('button');
  changeButton.id = "change"
  changeButton.type = 'button'
  changeButton.innerText = "Użyj dużych liter!";
  root.appendChild(changeButton);  

  function changeLetters() {
    document.querySelectorAll('tr').forEach((row) => {
      row.querySelectorAll('td').forEach((cell) => {
        cell.innerText = cell.innerText[0].toUpperCase() + cell.innerText.slice(1); 
      })
    })
  }  

  document.querySelector('#change').addEventListener('click', changeLetters);
  
  // ZADANIE  11

var numbersInTxtBtn = document.createElement('button');
numbersInTxtBtn.innerText = 'Check';
var numbersInTxt = document.createElement('input');
numbersInTxt.type = 'text';

const rut = document.getElementById('root');

function numbers(a) {
    if (!/\d/.test(a)) {
        return 'There are no numbers';
    }

    var xxx = a.replace(/[^0-9]/g, ' ').split(' ');

    var sum = 0;
    var notSum = 1;

    xxx.forEach((i) => {
        if (!i.length) {
            return;
        }

        i = parseInt(i);

        sum += i;
        notSum *= i;
      
      console.log(sum);
    });

    for (var i = 0; i < notSum; ++i) {
        var div = document.createElement('div');
        div.innerText = a;

        document.body.append(div, rut);
    }

    return sum;
}

numbersInTxtBtn.addEventListener('click', () => {
    console.log(numbers(numbersInTxt.value));
});

document.body.append(numbersInTxt, rut);
document.body.append(numbersInTxtBtn, rut);
  
// ZADANIE   12
  


const stringButton = document.createElement('button');
stringButton.innerText = 'Click';

const stringInput = document.createElement('input');
stringInput.type = 'text';

function string(a) {
    const hereIsThatDiv = {
        txt: a,
        newAla: function () {
            if (this.txt.indexOf('Ala') == -1) {
                return false;
            }

            this.txt = this.txt.replace('Ala', 'Ola');
            console.log(this.txt);

            return true;
        }
    }

    if (!hereIsThatDiv.newAla()) {
        const thatDiv = document.createElement('div');
        thatDiv.innerText = 'Słowo Ala nie występuje w tekście';

        document.body.append(thatDiv, rut);
    }
}


stringButton.addEventListener('click', () => {
    string(stringInput.value);
});

document.body.append(stringInput, rut);
document.body.append(stringButton, rut);
  
  // ZADANIE   13
  
  function countForMe(stringArr){  
  var howManyLetters = [];
    for(var i = 0; i < stringArr.length; i++){
      howManyLetters[i] = stringArr[i].length;
    }     
     return howManyLetters;
  }

  function showAvg(summ){
    var average = summ / tabWithWords.length;
    return average;
  }

  function sum(howManyLetters){
    var summ = howManyLetters.reduce((prev,curr) => prev += curr);
    return summ;
  }
  

 var tabWithWords = ['Mornings','are','for','coffee','and', 'contemplation', 'StrangerThings'];
  console.log("Letters in each word:");
  console.log(countForMe(tabWithWords));
  console.log("Sum of letters:");
  console.log(sum(countForMe(tabWithWords)));
  console.log("Average:");
  console.log(showAvg(sum(countForMe(tabWithWords))));
  
  // ZADANIE   14
  
  function obj() {
    return {
        name: '',
        surname: '',
        age: '',
    };
}

var itIsMe = obj();



function myData(name, surname, age) {
    itIsMe.name = name;
    itIsMe.surname = surname;
    itIsMe.age = age;
//------------------------------------
    itIsMe.nameChars = name.length;
    itIsMe.surnameChars = surname.length;
    itIsMe.ageChars = age.length;

    if (itIsMe.nameChars > 5 || itIsMe.surnameChars > 5 || itIsMe.ageChars > 5) {
        var newButton = document.createElement('button');
        newButton.innerText = 'Przywróć obiekt do stanu początkowego';
        document.body.append(newButton, rut );

        newButton.addEventListener('click', () => {
            itIsMe = obj();

            console.log(itIsMe);
        })
    }

    console.log(itIsMe);
}

myData('Adam', 'Adamski, '23');
  
});

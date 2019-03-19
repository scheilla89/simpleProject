
/*
console.log("test");


let sentence = "hej hopp";
let sentence2 = ",vad kul!";
sentence += sentence2; 
//(man kan också skriva på det här sättet: sentence = sentence + sentence2; )
console.log(sentence);



let number = "3";
let numericNumber = parseInt(number);

console.log(numericNumber+number);
// när man skriver "3" så uppfatta Js som text och inte som nr. så när man vill plusa ihopa 
så ist blir det 33 och inte =6 . För att få rätt summa och ska man skriva = 3 utan " för att
Js ska förstå att det gäller nummer och inte text 

console.log(typeof(number));
console.log(typeof(numericNumber));
console.log(numericNumber+number);

/ typeof förklarar bara vad det är / 

let searchString = "Slotten var byggt av sten";

// vi söker efter en meninh och får 
// tillbaka indexplatsen där meningen börjar 
// hittar vi EJ ordet så returneras -1

let index = searchString.indexOf("byggt");
console.log(index);

index=searchString.indexOf("hus");
console.log(index);



searchString = "han var sur, men blev glad sen";

var numberArray = searchString.split(","); //det kommmer splitas efter ,-tecken

console.log(numberArray[0]);
console.log(numberArray[1]);

for(let i=0; i < numberArray.length; i++)
{
    // i == 0 första steget , nästa steg i==1 , osv

    console.log(numberArray[i]);

}

let sum= add(2,3);
console.log(sum);

function add(a,b)
{
    console.log("add function called");
    return a+b;
}

*/


const numericButtons = document.getElementsByClassName("button");

const operatorButtons = document.getElementsByClassName("buttonOp");


let tmpArr = Array.from(numericButtons);
let tmpArr2 = Array.from(operatorButtons);

const allButtons = tmpArr.concat(tmpArr2);

for (let i = 0; i < allButtons.length; i++) {
    console.log(allButtons[i].innerHTML); 
}
//i++ = i = i + 1
for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", buttonEvent);
}

let expression="0";
const screen = document.getElementById("screen");

function buttonEvent(){
    let buttonValue = this.textContent;
    
    //console.log(buttonValue);
    if(expression=="0")
    {
       expression="";
    }
    else if(buttonValue=="C"){
        expression="";
        buttonValue="0";
    }
    else if(buttonValue=="="){
        buttonValue = evaluate(expression);
        expression="";
    }
    expression+=buttonValue;
    screen.innerHTML = expression;
}


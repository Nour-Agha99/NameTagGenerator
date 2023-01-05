let nameText = document.querySelector(".input");
let outputText = document.querySelector(".generate");
let add = document.querySelector(".add");
let ebg1 = document.querySelector  (".color1");
console.log (ebg1.value);
let ebg2 = document.querySelector  (".color2");
let ehello = document.querySelector(".color3");
let enm = document.querySelector   (".color4");
let ebnm = document.querySelector  (".color5");
var count=0;
// I do not want use this function becase it is not logical :)
function randomColor(){
var  x = Math.floor(Math.random() * 250);
var  y = Math.floor(Math.random() * 250);
var  z = Math.floor(Math.random() * 250);
return `rgb(${x} ${y} ${z})`;
}
//added buttons 
document.querySelector(".add").onclick = function() {
  if (nameText.value != '')
    { 
      bg1= ebg1.value;
      bg2= ebg2.value;
      hello= ehello.value;
      nm= enm.value;
      bnm=ebnm.value ;
      parentForm = document.createElement("span");
      parentForm.className = "continer";
      parentForm.style = `margin: 10px;padding:4vh 2vw;height:25vh;background-image: linear-gradient(45deg, ${bg1} , ${bg2});position:relative;border-radius: 5px;@media (max-width: 768px) {.container {width: 40vw;} .theName {margin-top:50px;}}`;
      childOne = document.createElement("h2");
      childOne.textContent = "Hello";
      childOne.style = `padding: 1vw;margin: auto;width: max-content;font-family: cursive;color:${hello};`;
      childTwo = document.createElement("div");
      childTwo.className = "theName";
      childTwo.style = `color:${nm};font-weight:600;;margin-top: 36px;background-color:${bnm};border-radius: 5px;min-width: 15vw;padding: 2vh 1vw;`;
      childTwo.textContent = nameText.value;
      deleteCard = document.createElement("div");
      deleteCard.className = "delete";
      deleteCard.style = "color: rgb(255, 15, 15);cursor: pointer;width: 20px;height: 20px;position: absolute;right: 10px;top: 10px;background-image: url(icon.png);background-size: cover;";
      if (count==0)
      {
      deleteAll = document.createElement("button");
      deleteAll.className = "deleteAll";
      deleteAll.style = "color: rgb(255 255 255);background-color: rgb(97 86 183);right:5vw;top:21vh;border-radius: 2px;border: 0.2px solid white;position:absolute;height: 26px;width: max-content;font-size: 1vw;cursor:pointer;";
      deleteAll.textContent = "Clear All";
      outputText.appendChild(deleteAll);
      }
      parentForm.appendChild(deleteCard);
      parentForm.appendChild(childOne);
      parentForm.appendChild(childTwo);
      outputText.appendChild(parentForm);
      document.body.appendChild(outputText);
      count++;
      nameText.value="";
    }
  else 
    return console.log("You must provide a name");
  }
  
//  for delete the box
document.addEventListener("click", function (e){ 
    if(e.target.className == "delete")
      {e.target.parentElement.remove();
      }
    
  }); 
 //  for delete the box
document.addEventListener("click", function (e){ 
    if(e.target.className == "deleteAll"){
      outputText.innerHTML="";
      count=0;
    }
  }); 
 

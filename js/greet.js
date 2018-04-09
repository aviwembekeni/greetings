var nameInputFiled = document.querySelector(".input-field");
var greetingDispElem = document.querySelector(".greetingDisp");
var greetBtn = document.querySelector(".greetBtn");
var noOfGreetsDispElem = document.querySelector(".noOfGreets");
var resetCounterBtn = document.querySelector(".reset-counter");

/*var noOfGreetings = 0;
var namesGreeted = {};

if (localStorage['noOfGreetings']){

    noOfGreetings = Number(localStorage['noOfGreetings']);

}

if (localStorage['namesGreeted']){

    var retrieved = localStorage.getItem('namesGreeted');
    namesGreeted =JSON.parse(retrieved);

}

noOfGreetsDispElem.innerHTML = noOfGreetings;*/


function Greet(peopleGreeted){
   var noOfGreetings = peopleGreeted? Object.keys(peopleGreeted).length : 0;
   var namesGreeted = peopleGreeted || {} ;
   //var greetMessage = "";

  // should return the greeting
  function greet(language, name){

    if(namesGreeted[name] === undefined){
      noOfGreetings++;
      namesGreeted[name]= 0;
    }

      if(language == "english"){
        return "Hello, "+ name;
      }else if (language == "isixhosa") {
        return "Molo, "+ name;
      }else if (language == "afrikaans") {
        return "Hallo, "+ name;
      }

  }

  function checkGreetings(){
    return noOfGreetings;
  }

  function checkGreetedNames(){
    return namesGreeted;
  }

  return {
    greetNeighbour : greet,
    checkGreets : checkGreetings,
    getGreetedNames : checkGreetedNames
  }

}

//var greet  = Greet(getPeopleGreetedFromStorage());
var greet  = Greet();
var greetsNo = greet.checkGreets();
noOfGreetsDispElem.innerHTML = greetsNo

function greetClicked(){

  var name = nameInputFiled.value
  var checkedRadioBtn = document.querySelector("input[name='language']:checked");
  if(checkedRadioBtn != null && name != ""){

    var selectedLanguage = checkedRadioBtn.value;
    var greetMessage = greet.greetNeighbour(selectedLanguage, name);

    var greetsNo = greet.checkGreets();
    var greetedNamesObj = greet.getGreetedNames();
    console.log(greetsNo)
    console.log(greetedNamesObj)
    greetingDispElem.innerHTML = greetMessage;
    /*namesGreeted = greetedNamesObj;
    noOfGreetings = greetsNo;
    localStorage['noOfGreetings'] = noOfGreetings;
    localStorage.setItem('namesGreeted', JSON.stringify(namesGreeted)); */
    noOfGreetsDispElem.innerHTML = greetsNo;
    nameInputFiled.value = "";
  }else{
    nameInputFiled.value = "";
    noOfGreetsDispElem.value= "";
  }
}

function resetCounterClicked(){
  var greet = Greet();
  /*localStorage['noOfGreetings'] = noOfGreetings;
  localStorage.setItem('namesGreeted', JSON.stringify(namesGreeted));*/
  var greetsNo = greet.checkGreets();
  var greetedNamesObj = greet.getGreetedNames();
  console.log(greetsNo)
  console.log(greetedNamesObj)
  nameInputFiled.innerHTML = "";
  noOfGreetsDispElem.innerHTML= greetsNo;

}

greetBtn.addEventListener('click', greetClicked);
resetCounterBtn.addEventListener('click', resetCounterClicked);

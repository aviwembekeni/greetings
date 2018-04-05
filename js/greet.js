var nameInputFiled = document.querySelector(".input-field");
var greetingDispElem = document.querySelector(".greetingDisp");
var greetBtn = document.querySelector(".greetBtn");
var noOfGreetsDispElem = document.querySelector(".noOfGreets");
var resetCounterBtn = document.querySelector(".reset-counter");

var noOfGreetings = 0;
var namesGreeted = {};

if (localStorage['noOfGreetings']){

    noOfGreetings = Number(localStorage['noOfGreetings']);

}

if (localStorage['namesGreeted']){
   var retrieved = localStorage.getItem('namesGreeted');

    namesGreeted =JSON.parse(retrieved);

}

noOfGreetsDispElem.innerHTML = noOfGreetings;



function Greet(){
   var greetingsNo = 0;
   var greetedNames={};
   var greetMessage = "";

  function greet(name, language){
      if(language == "english"){
        greetMessage = "Hello, "+ name;
      }else if (language == "isixhosa") {
        greetMessage = "Molo, "+ name;
      }else if (language == "afrikaans") {
        greetMessage = "Hallo, "+ name;
      }
  }

  function getGreetMessage(){
    return greetMessage;
  }

  function updateCounter(noOfGreets){
     greetingsNo = noOfGreets;
  }

  function updateGreetedNames(nameGreeted){
    greetedNames = nameGreeted;
  }

  function checkGreetings(){
    return greetingsNo;
  }

  function checkGreetedNames(){
    return greetedNames;
  }


  return {
    greetNeighbour : greet,
    checkgreetMessage : getGreetMessage,
    updateGreets : updateCounter,
    checkGreets : checkGreetings,
    addGreetedName : updateGreetedNames,
    getGreetedNames : checkGreetedNames

  }

}

var greet  = Greet();
function greetClicked(){

  var name = nameInputFiled.value
  var checkedRadioBtn = document.querySelector("input[name='language']:checked");
  if(checkedRadioBtn != null && name != ""){

  if(namesGreeted[name] === undefined){
    noOfGreetings++;
    namesGreeted[name]= 0;
    }

      greet.updateGreets(noOfGreetings);

    var greetsNo = greet.checkGreets();
    greet.addGreetedName(namesGreeted);
    var greetedNamesObj = greet.getGreetedNames();

    var selectedLanguage = checkedRadioBtn.value;
    greet.greetNeighbour(name, selectedLanguage);
    var greetMessage = greet.checkgreetMessage();
    greetingDispElem.innerHTML = greetMessage;
    namesGreeted = greetedNamesObj;
    noOfGreetings = greetsNo;
    localStorage['noOfGreetings'] = noOfGreetings;
    localStorage.setItem('namesGreeted', JSON.stringify(namesGreeted));
    noOfGreetsDispElem.innerHTML = noOfGreetings;
    nameInputFiled.value = "";
  }else{
    nameInputFiled.value = "";
    noOfGreetsDispElem.value= "";
  }
}

function resetCounterClicked(){
  noOfGreetings = 0;
  namesGreeted = {};
  localStorage['noOfGreetings'] = noOfGreetings;
  localStorage.setItem('namesGreeted', JSON.stringify(namesGreeted));
  nameInputFiled.value = "";
  noOfGreetsDispElem.value= noOfGreetings;

}

greetBtn.addEventListener('click', greetClicked);
resetCounterBtn.addEventListener('click', resetCounterClicked);

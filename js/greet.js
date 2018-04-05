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



function Greet(){
   var greetingsNo = 0;
   var greetedNames={};

  function greet(noOfGreets){
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
    updateGreets : greet,
    checkGreets : checkGreetings,
    addGreetedName : updateGreetedNames,
    getGreetedNames : checkGreetedNames

  }

}

var greet  = Greet();
function greetClicked(){

  var name = nameInputFiled.value
  var checkedRadioBtn = document.querySelector("input[name='language']:checked");
  if(checkedRadioBtn != null && name != "" && namesGreeted[name] === undefined){
   noOfGreetings++;
   namesGreeted[name]= 0;

    greet.updateGreets(noOfGreetings);
    var greetsNo = greet.checkGreets();
    greet.addGreetedName(namesGreeted);
    var greetedNamesObj = greet.getGreetedNames();

    var selectedLanguage = checkedRadioBtn.value;
     if(selectedLanguage == "english"){
       greetingDispElem.innerHTML = "Hello, "+ name
     }else if (selectedLanguage == "afrikaans") {
       greetingDispElem.innerHTML = "Hallo, "+ name

     }else if (selectedLanguage == "isixhosa") {
       greetingDispElem.innerHTML = "Molo, "+ name;
     }

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

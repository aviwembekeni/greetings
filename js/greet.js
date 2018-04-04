var nameInputFiled = document.querySelector(".mdl-textfield__input");
var greetingDispElem = document.querySelector(".greetingDisp");
var greetBtn = document.querySelector(".greetBtn");
var noOfGreetsDispElem = document.querySelector(".noOfGreets");
var resetCounterBtn = document.querySelector(".reset-counter");

var noOfGreetings = 0;
var namesGreeted = {};

if (localStorage['noOfGreetings']){

    noOfGreetings = Number(localStorage['noOfGreetings']);
}

function Greet(){
   var greetingsNo = 0;
   var greetedNames={};

  function greet(noOfGreets){
     greetingsNo = noOfGreets;
  }

  function updateGreetedNames(name){
    greetedNames[name] = 0;
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

    greet.updateGreets(noOfGreetings);
    var greetsNo = greet.checkGreets();
    greet.addGreetedName(name);
    var greetedNamesObj = greet.getGreetedNames();

    var selectedLanguage = checkedRadioBtn.value;
    console.log(greetsNo)
    console.log(greetedNamesObj)
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
  noOfGreetsDispElem.innerHTML = noOfGreetings;
  nameInputFiled.value = "";
  noOfGreetsDispElem.value= "";

}

greetBtn.addEventListener('click', greetClicked);
resetCounterBtn.addEventListener('click', resetCounterClicked);

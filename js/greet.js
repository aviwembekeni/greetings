var nameInputFiled = document.querySelector(".input-field");
var greetingDispElem = document.querySelector(".greetingDisp");
var greetBtn = document.querySelector(".greetBtn");
var noOfGreetsDispElem = document.querySelector(".noOfGreets");
var resetCounterBtn = document.querySelector(".reset-counter");

function Greet(peopleGreeted){
   var noOfGreetings = peopleGreeted? Object.keys(peopleGreeted).length : 0;
   var namesGreeted = peopleGreeted || {} ;

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

function getPeopleGreetedFromStorage(){
    var namesGreeted = {};
  if (localStorage['namesGreeted']){

    var retrieved = localStorage.getItem('namesGreeted');
     namesGreeted =JSON.parse(retrieved);
  }

  return namesGreeted;
}

var greet  = Greet(getPeopleGreetedFromStorage());
var greetsNo = greet.checkGreets();
noOfGreetsDispElem.innerHTML = greetsNo;

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
    localStorage.setItem('namesGreeted', JSON.stringify(greetedNamesObj));
    noOfGreetsDispElem.innerHTML = greetsNo;
    nameInputFiled.value = "";
    localStorage.setItem('namesGreeted', JSON.stringify(greetedNamesObj));

  }else{
    nameInputFiled.value = "";
    noOfGreetsDispElem.value= "";
  }
}

function resetCounterClicked(){
  greet = Greet();

  var greetsNo = greet.checkGreets();
  var greetedNamesObj = greet.getGreetedNames();
  localStorage.setItem('namesGreeted', JSON.stringify(greetedNamesObj));
  console.log(greetsNo)
  console.log(greetedNamesObj)
  nameInputFiled.innerHTML = "";
  noOfGreetsDispElem.innerHTML= greetsNo;

}

greetBtn.addEventListener('click', greetClicked);
resetCounterBtn.addEventListener('click', resetCounterClicked);

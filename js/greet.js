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

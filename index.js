
//stap 4:bepalen waar de output moet komen
function writeOutput(output){
document.getElementById("resultPirate").value = output;
//als ik schrijf "let output = doc.getElById("resultPirate").value" dan lijkt het fout???
}


//stap 3: aanroepen van de api
function triggerPirateApi (inpuT){
    var url = "https://api.funtranslations.com/translate/pirate?text=" + inpuT;
    fetch(url)
        .then (response => response.json()
            .then(data=> writeOutput (data.contents.translated)))
        .catch(err=>{
        console.log(err);
        writeOutput ("something went wrong");
    });
}


//stap 2: fie die in stap 1 zo heet, invullen; nl tekst gaan halen uit input-veld als het getriggerd wordt door translate-button
//die input steken in een nieuwe fie
function triggerTranslation(){
    let inpuT = document.getElementById("inputEnglish").value;
    console.log(inpuT);
    triggerPirateApi(inpuT); 
    //moet hier al een error message bij?
}

//stap 1: maak een fie die meteen gelezen wordt, wat moet de translate-button doen?
(function (){
    document.getElementById("transPir").addEventListener("click", function() {
        triggerTranslation();
    })
})();


//stap 5: clear button
function clearFunction(){
    document.getElementById("inputEnglish").value = "";
}

(function(){
    document.getElementById("clear").addEventListener("click", function(){
        clearFunction();
    })
})();








/*
//poging met require
var requestPr = require("request-promise");

function setResult(valueToSet){
    document.getElementById("resultPirate").value = valueToSet;
}

function setError(errorValue){
    document.getElementById("resultPirate").value = errorValue;
}



function triggerPirateApiCall(searchstring){
    var url = "	https://api.funtranslations.com/translate/pirate?text=" + searchstring;
    requestPr(url)
    //dit is een promise
        .then(function (value){
            setResult(value);
        })
        .catch(function (reason){
            setError (reason);
        });
}

function triggerPirateTranslation(){
    let inputValue = document.getElementById("inputEnglish").value;
    triggerPirateApiCall(inputValue);
}

(function (){
    document.getElementById("transPir").addEventListener("click", function() {
        triggerPirateTranslation();
    })

})();*/

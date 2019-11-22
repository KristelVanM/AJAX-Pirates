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

})();


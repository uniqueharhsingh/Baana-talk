var btntranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv= document.querySelector("#output");

var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=testing&=testing"

//var serverURL = "https://api.funtranslations.com/translate/minion.json" 

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}
function errorhandler(error) {
    console.log("error occured",error);
    alert("something wrong with the server")
}


function clickhandler() {
    var inputText= txtInput.value;///taking input value

    
    fetch(getTranslationURL(inputText))
    .then(response=>response.json())
    .then(json => {
      
        var translatedText=json.contents.translated;
        outputDiv.innerText= translatedText;  
    }).catch(errorhandler)

    





   
    

  












    

}


btntranslate.addEventListener("click",clickhandler)
















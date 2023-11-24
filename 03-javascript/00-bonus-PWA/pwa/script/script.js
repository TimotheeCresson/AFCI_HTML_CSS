if("serviceWorker" in navigator) { // serviceWorker est dans le navigateur ou non, c'est une option par défaut
    console.log("There is service worker");
    navigator.serviceWorker.register("./sw.js")
}

// exemple Polyfill : 

if(!Math.trunc) {
    Math.trunc = function (number) {
        return number<0? Math.ceil(number): Math.floor(number);
    }
}
// coté progressive
// "??" ne peut être facilement remplacé, l'utilisation d'un transpiler comme "babel.js" permet cela :
// const h = element.height??100;
var h = (element.height !== undefined && element.height !== null)? element.height:100;

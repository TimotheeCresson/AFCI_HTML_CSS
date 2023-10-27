"use strict"
/*
const feuVert = document.querySelector(".feuVert")
const feuOrange = document.querySelector(".feuOrange")
const feuRouge = document.querySelector(".feuRouge")

     function change() {
        function lightTime() {
            setTimeout(()=>(feuVert.style.backgroundColor = "green"), 1000)
            setTimeout(()=>(feuOrange.style.backgroundColor = "orange", feuVert.style.backgroundColor = "gray", feuRouge.style.backgroundColor = "gray"), 2000)
            setTimeout(()=>(feuRouge.style.backgroundColor = "red", feuVert.style.backgroundColor = "gray", feuOrange.style.backgroundColor = "gray"), 3000)
            setTimeout(()=>(feuRouge.style.backgroundColor = "gray", feuVert.style.backgroundColor = "gray", feuOrange.style.backgroundColor = "gray"), 4000)
            setTimeout(change, 4000) // relancer la fonction 
        }
        lightTime(change, 4000)
    }
    change()
*/



    const feuVert = document.querySelector(".feuVert");
    const feuOrange = document.querySelector(".feuOrange");
    const feuRouge = document.querySelector(".feuRouge");
    
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async function change() {
      async function lightTime() {
        await sleep(1000);
        feuVert.style.backgroundColor = "green";
        
        await sleep(1000);
        feuOrange.style.backgroundColor = "orange";
        feuVert.style.backgroundColor = "gray";
        feuRouge.style.backgroundColor = "gray";
        
        await sleep(1000);
        feuRouge.style.backgroundColor = "red";
        feuVert.style.backgroundColor = "gray";
        feuOrange.style.backgroundColor = "gray";
        
        await sleep(1000);
        feuRouge.style.backgroundColor = "gray";
        feuVert.style.backgroundColor = "gray";
        feuOrange.style.backgroundColor = "gray";
        
        await change();
      }
    
      await lightTime();
    }
    
    change();







/*
    function change(){
        function lightTime() {
            new Promise(resolve=>setTimeout(()=>resolve(feuVert.style.backgroundColor = "green"), 1000));
            new Promise(resolve=>setTimeout(()=>resolve(feuOrange.style.backgroundColor = "orange", feuVert.style.backgroundColor = "gray", feuRouge.style.backgroundColor = "gray"), 2000));
            new Promise(resolve=>setTimeout(()=>resolve(feuRouge.style.backgroundColor = "red", feuVert.style.backgroundColor = "gray", feuOrange.style.backgroundColor = "gray"), 3000));
            new Promise(resolve=>setTimeout(()=>resolve(feuRouge.style.backgroundColor = "gray", feuVert.style.backgroundColor = "gray", feuOrange.style.backgroundColor = "gray"), 4000));
            setTimeout(change, 4000) // relancer la fonction 
        }
        lightTime(change, 4000)
        }
        change()
*/


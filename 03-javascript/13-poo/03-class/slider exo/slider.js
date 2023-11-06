"use strict"

export default class Slider {
        constructor ({
        intervalId = 0,
        slider: { // on dit que slider est un objet
          dots= [],
          items = [],
          btns = [],
        },
        time = 0,
    }) {
        this.intervalId = intervalId
        this.slider = {
            dots, items, btns
        }
        this.time = time

    }


          create(imgs){
              this.slider ={ // on réinitialise à 0
                  dots:[],
                  items:[],
                  btns:[],
                }
            // Crée mon slider.
            const container = document.createElement("div");
            container.classList.add("slider-container");
      
            const dots = document.createElement("div");
            dots.classList.add("dots");
      
            imgs.forEach((img, i)=>{
                const div = document.createElement("div");
                div.classList.add("items", "fade");
                const image = document.createElement("img");
                image.src = img;
                div.append(image);
                const dot = document.createElement("span");
                dot.classList.add("dot");
                dot.dataset.id = i;
                dots.append(dot);
                container.append(div);
                // ajout version objet :
                this.slider.items.push(div);    // on sauvegarde div dans notre tableau items
                this.slider.dots.push(dot);     // on sauvegarde dot dans notre tableau btns
            })
            container.append(dots);
            const next = document.createElement("a");
            next.classList.add("next");
            next.innerHTML = "&#10095;";
            const prev = document.createElement("a");
            prev.classList.add("prev");
            prev.innerHTML = "&#10094;";
            container.append(next, prev);
            // ajout version objet :
            this.slider.btns.push(prev, next); // on sauvegarde prev et next dans notre tableau btns
            this.container = container  // on sauvegarde this.container en tant que container
            return container;
        }
      
        showItems(n){
          let index = n> this.slider.items.length -1 ? 0: n<0? this.slider.items.length-1: n;
          /* 
              const items = this.slider.items;
              let index = n> items.length -1 ? 0: n<0? items.length-1: n;
              items.forEach(...);
          */
          this.slider.items.forEach((item, i)=>{
              item.style.display = "none";
              this.slider.dots[i].classList.remove("active");
          })
          this.slider.items[index].style.display = "block";
          this.slider.dots[index].classList.add("active");
      }
         currentItem(e){
              clearInterval(this.intervalId);
              // Affiche l'image qui correspond au point.
              let n = parseInt(e.target.dataset.id);
              // console.log(this);
              this.showItems(n);
          }
          changeItem(e){
              clearInterval(this.intervalId);
              let n = this.container.querySelector(".dot.active").dataset.id;  // on met this.container afin que nos items est leurs propres containers
              if(e.target.classList.contains("next")){
                  this.showItems(++n);
              }else{
                  this.showItems(--n);
              }
              this.startInterval()
          }
          init(timing = 3000){
              this.time = timing;
              
              this.showItems(0);
              this.slider.dots.forEach(dot=>dot.addEventListener("pointerdown", this.currentItem.bind(this)));
              this.slider.btns.forEach(btn=>btn.addEventListener("pointerdown", this.changeItem.bind(this)));
              this.startInterval();
          }
          startInterval() {
              this.intervalId = setInterval(() => {
                  this.slider.btns[1].click();
              }, this.time);
          }
      
}
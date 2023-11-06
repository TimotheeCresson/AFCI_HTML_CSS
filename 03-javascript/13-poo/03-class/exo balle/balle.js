"use strict"

export default class Balle {

    constructor (canvas){
        this.canvas = canvas
        this.ctx = canvas.getContext("2d");
        const offset = 50
        this.x = Math.floor((Math.random()*(canvas.width - offset * 2)) + offset), // on met des parenthèse entre canvas et * 2 afin qu'il puisse soustraire canvas.width - offset * 2 avant de multiplier
        this.y = Math.floor((Math.random()*(canvas.height - offset * 2)) + offset),
        this.vh = Math.floor(Math.random()* (15 - 1) + 1) // (max - min) +1  on soustrait 15 à 1, on obtient avec math random un nombre aléatoire entre 1 et 13.999... puis on rajoute 1 pour avoir une plage entre 1 et 14.999...
        this.vv = Math.floor(Math.random()* (15 - 1) + 1)
        this.r = Math.floor(Math.random()*10 + 40),
        this.couleur = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    }
    // fonction pour redimmensionner le canvas
    resize(){
        const snapshot = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
        const size = canvas.parentElement.getBoundingClientRect();
        this.canvas.width = size.width;
        this.canvas.height = size.height;
        this.ctx.putImageData(snapshot, 0, 0)
    }
    // fonction pour dessiner le cercle
    drawCercle (){
        // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
        this.ctx.fillStyle = this.couleur
        this.ctx.fill(); // Remplir la forme
        this.ctx.stroke(); // dessiner le coutour de la forme
    }

    move() {
        if (this.x+this.r > this.canvas.width || this.x-this.r < 0)
        this.vh = -this.vh;
        if (this.y+this.r > this.canvas.height || this.y-this.r < 0)
            this.vv = -this.vv

        this.x += this.vh
        this.y += this.vv
    }
}
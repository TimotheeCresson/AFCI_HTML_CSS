"use strict";

const Paint = {
    painting: false,
    x: 0,
    y: 0,
    drawingHistory: [],
    currentStep: -1,
    color: "",
    container2: null,
    // Fonction initialisant notre dessin
    initDraw() {
        this.appli = document.querySelector(".appli")
        this.container2 = document.createElement("div");
        this.container2.classList.add("contain")
        this.container2.append(this.create());
        const canvas = document.createElement('canvas');
        this.canvas = canvas;
        this.appli.append(canvas);
        this.ctx = canvas.getContext("2d");
        this.input = document.getElementById('color');
        this.lineWidthInput = document.getElementById('lineWidth');
        this.listeners();

       
        return this.container2;
    },
    // fonction créant nos élément html
    create() {
        
        const colorInput = document.createElement("input");
        colorInput.type = 'color';
        colorInput.id = 'color';
        colorInput.value = "";
        this.container2.append(colorInput);
        this.input = colorInput
        this.colorInput = colorInput;
        this.color = colorInput.value;

        const sizeInput = document.createElement("input");
        sizeInput.type = 'number';
        sizeInput.id = "lineWidth";
        sizeInput.min = "1";
        sizeInput.max = "50";
        sizeInput.value = "1";
        this.lineWidthInput = sizeInput; 
        this.sizeInput = sizeInput;
        this.size = sizeInput.value
        this.lineWidthInput.addEventListener("input", () => {
            this.size = this.sizeInput.value;
        });

        const label = document.createElement('label');
        label.htmlFor = "lineWidth";
        label.textContent = "Choisissez la taille du trait";

        const div2 = document.createElement('div')
        div2.classList.add("WidthInput")
        this.container2.append(div2)
        div2.append(label, sizeInput)
    },
    // fonction pour créer nos différents event listener
    listeners() {
        this.colorInput.addEventListener("change", () => {
            this.color = this.colorInput.value;
        });

        this.canvas.addEventListener("mousemove", (e) => {
            if (this.painting) {
                this.draw(this.x, this.y, e.offsetX, e.offsetY);
                this.x = e.offsetX;
                this.y = e.offsetY;
            }
        });

        this.canvas.addEventListener("mousedown", (e) => {
            this.x = e.offsetX;
            this.y = e.offsetY;
            this.painting = true;
        });

        this.canvas.addEventListener("mouseup", () => {
            this.x = 0;
            this.y = 0;
            this.painting = false;
            this.saveDrawingState();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === "z" && e.ctrlKey) {
                e.preventDefault();
                this.undo();
            }
            if (e.ctrlKey && e.key === "y") {
                e.preventDefault();
                this.redo();
            }
        });

        window.addEventListener("resize", () => {
            this.resize.bind(this);
        });
    },
    draw(x, y, offsetX, offsetY) {
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.strokeStyle = this.color
        this.ctx.lineWidth = this.size;
        this.ctx.lineCap = "round";
        this.ctx.lineTo(offsetX, offsetY);
        this.ctx.stroke();
        this.ctx.closePath();
    },
 // fonction pour redimentionner notre canvas
    resize() {
        const canvas = this.canvas;
        const snapshot = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
        const size = canvas.parentElement.getBoundingClientRect();
        canvas.width = size.width;
        canvas.height = size.height;
        this.ctx.putImageData(snapshot, 0, 0);
    },


    saveDrawingState() {
        this.currentStep++;
        if (this.currentStep < this.drawingHistory.length) {
            this.drawingHistory.length = this.currentStep;
        }
        this.drawingHistory.push(this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height));
    },

    undo() {
        if (this.currentStep > 0) {
            this.currentStep--;
            this.ctx.putImageData(this.drawingHistory[this.currentStep], 0, 0);
        } else {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.currentStep = -1;
        }
    },

    redo() {
        if (this.currentStep < this.drawingHistory.length - 1) {
            this.currentStep++;
            this.ctx.putImageData(this.drawingHistory[this.currentStep], 0, 0);
        }
    }
};
// event pour télécharger toute la page du dom avant le reste
document.addEventListener("DOMContentLoaded", function() {
    const appContainer = document.querySelector(".appli");
    appContainer.appendChild(Paint.initDraw());
});
export default Paint;

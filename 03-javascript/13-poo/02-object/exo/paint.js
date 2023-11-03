"use strict";

const Paint = {
    painting: false,
    x: 0,
    y: 0,
    drawingHistory: [],
    currentStep: -1,
    color: "",
    container2: null,

    initDraw() {
        this.container2 = document.createElement("div");
        this.container2.append(this.create());

        const canvas = document.createElement('canvas');
        this.canvas = canvas;
        this.container2.append(canvas);
        this.ctx = this.canvas.getContext("2d");
        this.input = document.getElementById('color');
        this.lineWidthInput = document.getElementById('lineWidth');


        canvas.addEventListener('load', () => {
            this.resize();
            this.saveDrawingState();
        });
        this.listeners();
        return this.container2;
    },

    create() {
        const div = document.createElement("div");
        const colorInput = document.createElement("input");
        colorInput.type = 'color';
        colorInput.id = 'color';
        colorInput.value = "";
        div.append(colorInput);
        this.colorInput = colorInput;
        this.color = colorInput.value;

        const sizeInput = document.createElement("input");
        sizeInput.type = 'number';
        sizeInput.id = "lineWidth";
        sizeInput.min = "1";
        sizeInput.max = "50";
        sizeInput.value = "1";
        div.append(sizeInput);

        const label = document.createElement('label');
        label.htmlFor = "lineWidth";
        label.textContent = "Choisissez la taille du trait";
        div.append(label);
        

        return div;
    },

    listeners() {
        this.colorInput.addEventListener("change", () => {
            this.color = this.input.value;
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
            this.resize();
        });
    },

    resize() {
        const canvas = this.canvas;
        const snapshot = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
        const size = canvas.parentElement.getBoundingClientRect();
        canvas.width = size.width;
        canvas.height = size.height;
        this.ctx.putImageData(snapshot, 0, 0);
    },

    draw(x, y, offsetX, offsetY) {
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(offsetX, offsetY);
        this.ctx.stroke();
        this.ctx.closePath();
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

document.addEventListener("DOMContentLoaded", function() {
    const appContainer = document.querySelector(".appli");
    appContainer.appendChild(Paint.initDraw());
});
export default Paint;

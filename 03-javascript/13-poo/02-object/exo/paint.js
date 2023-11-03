"use strict"

const Paint = {
    painting : false,
    x: 0,
    y: 0, 
    drawingHistory:  [],
    currentStep: -1,
    color: "",
    
     // on crée notre canvas 
     
    initDraw() {
        const container2 = document.createElement("div") 
        container2.append(this.create())
         // Je met ma fonction avant le reste afin que mon input color soit créer avant et que je puisse lui donner le nom this.input = document.getElementById('color');
        const canvas = document.createElement('canvas')
        this.canvas = canvas
        container2.append(canvas)
        // this.canvas = document.querySelector('div canvas');
        this.ctx = this.canvas.getContext("2d");
        this.input = document.getElementById('color');
        this.lineWidthInput = document.getElementById('lineWidth')
        this.listeners();
        this.resize();
        this.saveDrawingState();
        return container2;
    },
    // On crée une fonction afin de créer nos éléments, div, input ...
    create() {
        const div = document.createElement("div")
        const colorInput = document.createElement("input")
        colorInput.type = 'color'
        colorInput.id = 'color'
        colorInput.value = "",
        div.append(colorInput);
        this.colorInput = colorInput

        this.color= colorInput.value;
        
        const sizeInput = document.createElement("input")
        sizeInput.type = 'number'
        sizeInput.id ="lineWidth"
        sizeInput.min = "1"
        sizeInput.max = "50"
        sizeInput.value = "1"
        div.append(sizeInput);

        const label = document.createElement('label')
        label.for = "number"
        label.textContent = "choisissez la taille du trait"
        div.append(label)
        return div;
    },

    // on crée une fonction contenant tout nos addEventListeners
    listeners() {
        console.log(this.input);
        this.colorInput.addEventListener("change", ()=>{
            this.color = this.input.value
        })

        this.canvas.addEventListener("mousemove", (e)=>{
            if(this.painting){
            this.draw(this.ctx, this.x, this.y, e.offsetX, e.offsetY)
            this.x= e.offsetX 
            this.y = e.offsetY 
            }
        })

        this.canvas.addEventListener("mousedown", (e)=>{
            this.x= e.offsetX ; 
            this.y = e.offsetY;
            this.painting = true;
            // console.log(x, y);
        })

        this.canvas.addEventListener("mouseup", ()=>{
            this.x= 0; 
            this.y = 0;
            this.painting = false;
            this.saveDrawingState() 
        })

        document.addEventListener('keydown', (e) => {
            if (e.key === "z" && e.ctrlKey) {
                e.preventDefault();
                this.undo(); // Utiliser une fonction fléchée pour conserver le contexte
            }
            if (e.ctrlKey && e.key === "y") {
                e.preventDefault();
                this.redo();
            }
        });

        // document.addEventListener('keydown', function(e) {
        //     const self = this; // Stocker le contexte this dans une variable
        
        //     if (e.key === "z" && e.ctrlKey) {
        //         e.preventDefault();
        //         self.undo(); // Appeler la fonction undo pour annuler
        //     }
        
        //     if (e.ctrlKey && e.key === "y") {
        //         e.preventDefault();
        //         self.redo();
        //     }
        // });
            window.addEventListener("resize", this.resize)
    },

    resize() {
   
        const snapshot = this.ctx.getImageData(0,0, this.canvas.width, this.canvas.height);
        const size = this.container2.getBoundingClientRect();
       
        this.canvas.width = size.width;
        this.canvas.height = size.height;
        
        this.ctx.putImageData(snapshot,0 ,0);
    },

    draw(ctx, x, y, offsetX, offsetY) {
        // const ctx = this.ctx  sur objet ou tableau afin de ne pas retaper this.ctx à chaque fois
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.color
        this.ctx.lineWidth = this.lineWidthInput.value;
        this.ctx.lineCap = "round";
        this.ctx.moveTo(x,y);
        this.ctx.lineTo(offsetX,offsetY)
        this.ctx.stroke();
        this.ctx.closePath();
    },

    saveDrawingState() {
        this.currentStep++;
        if (this.currentStep < this.drawingHistory.length) {
            this.drawingHistory.length = this.currentStep;
            
        }
        this.drawingHistory.push(this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height));
         console.log(this.drawingHistory);
    },

    undo() {
        if (this.currentStep > 0) {
            this.currentStep--;
            this.ctx.putImageData(this.drawingHistory[this.currentStep], 0, 0);
        }else
        {
            this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
            // this.drawingHistory.length = 0;
            this.currentStep = -1; 
            console.log(this.currentStep);
        }
    },
    
    redo() {
         if (this.currentStep < this.drawingHistory.length - 1) {
            this.currentStep++;
            this.ctx.putImageData(this.drawingHistory[this.currentStep], 0, 0);
            console.log(this.currentStep);
        }
     }

}
export default Paint;
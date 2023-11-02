class DrawingApp {
    constructor() {
        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext("2d");
        this.input = document.getElementById('color');
        this.lineWidthInput = document.getElementById('lineWidth');
        this.painting = false;
        this.color = this.input.value;
        this.x = 0;
        this.y = 0;
        this.drawingHistory = [];
        this.currentStep = -1;

        this.setupListeners();
        this.resizeCanvas();
        this.saveDrawingState();
    }

    setupListeners() {
        this.input.addEventListener("change", () => {
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

        window.addEventListener("resize", this.resizeCanvas.bind(this));
    }

    resizeCanvas() {
        const snapshot = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
        const size = document.body.getBoundingClientRect();

        this.canvas.width = size.width;
        this.canvas.height = size.height;

        this.ctx.putImageData(snapshot, 0, 0);
    }

    draw(x, y, offsetX, offsetY) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = this.lineWidthInput.value;
        this.ctx.lineCap = "round";
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(offsetX, offsetY);
        this.ctx.stroke();
        this.ctx.closePath();
    }

    saveDrawingState() {
        this.currentStep++;
        if (this.currentStep < this.drawingHistory.length) {
            this.drawingHistory.length = this.currentStep;
        }
        this.drawingHistory.push(this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height));
    }

    undo() {
        if (this.currentStep > 0) {
            this.currentStep--;
            this.ctx.putImageData(this.drawingHistory[this.currentStep], 0, 0);
        } else {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.drawingHistory.length = 0;
            this.currentStep--;
        }
    }

    redo() {
        if (this.currentStep < this.drawingHistory.length - 1) {
            this.currentStep++;
            this.ctx.putImageData(this.drawingHistory[this.currentStep], 0, 0);
        }
    }
}
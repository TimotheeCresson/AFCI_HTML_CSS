// script.js
const app = Vue.createApp({
    data() {
      return {
        showButtons: false,
        showPassword: false,
        showAccessMessage: false,
        showMaxValueInput: false,
        accessPassword: localStorage.getItem("accessPassword") || "LordVador",
        password: "",
        stock: parseInt(localStorage.getItem("stock")) || 0,
        showStock: false,
        maxValue: parseInt(localStorage.getItem("maxValue")) || 100, // Default max value
      };
    },
    methods: {
      showButtonsSection() {
        this.showButtons = true;
        this.showPassword = false;
        this.showAccessMessage = false;
        this.showMaxValueInput = false;
        this.showStock = false;
      },
      showPasswordSection() {
        this.showButtons = false;
        this.showPassword = true;
        this.showAccessMessage = false;
        this.showMaxValueInput = false;
        this.showStock = false;
      },
      showAccessSection() {
        if (this.password === this.accessPassword) {
          this.showButtons = false;
          this.showPassword = false;
          this.showAccessMessage = true;
          this.showStock = false;
        } else {
          alert("You can't access there, incorrect Password");
        }
      },
      incrementer() {
        if (this.stock < this.maxValue) {
          this.stock++;
          this.showStock = true;
          localStorage.setItem("stock", this.stock);
        } else {
          alert("Stock reached the maximum value!");
        }
      },
      decrementer() {
        if (this.stock !== 0) {
          this.stock--;
          localStorage.setItem("stock", this.stock);
        }
      },
      validatePassword() {
        localStorage.setItem("accessPassword", this.accessPassword);
      },
      // Function to show input for setting max value
      showMaxValueInputSection() {
        this.showMaxValueInput = true;
      },
      // Function to set the max value
      setMaxValue() {
        localStorage.setItem("maxValue", this.maxValue);
        this.showMaxValueInput = false;
      },
    },
    mounted() {
      this.password = localStorage.getItem("enteredPassword") || "";
    },
    watch: {
      password(newPassword) {
        localStorage.setItem("enteredPassword", newPassword);
      },
    },
  });
  
  app.mount("#app");
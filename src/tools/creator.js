export default class {
    constructor() {
        this.element = document.createElement('div');
        this.element.style.height = "100px";
        document.body.appendChild(this.element);
        // this.color="cadetblue"; - można to zapisać tutaj, składnia z konstruktorem
    }
    color = "cadetblue";
    addBgc(color = this.color) {
        this.element.style.backgroundColor = color;
    }
    showColor = () => {
        console.log(this.element.style.backgroundColor);
    }
}
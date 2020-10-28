export default class Section{
    constructor ({data, renderer}, containerSelector){
        this.initialCards = data
        this.renderer = renderer
        this.container = document.querySelector(containerSelector);
    }
    
    renderItems() {
        this.initialCards.forEach((item)=>{this.renderer(item)})
    }
    
    addItem(element) {
        this.container.prepend(element);
    }
};
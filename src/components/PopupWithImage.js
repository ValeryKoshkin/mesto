import Popup from './Popup.js'
const imageModalTitle = document.querySelector('.popup__image-title');
const imageModalPic = document.querySelector('.popup__image');
export class PopupWithImage extends Popup {
    constructor(popupSelector, data){
        super(popupSelector)
        this._name = data.name;
        this._link = data.link
        this.data = data;
    }
    
    open() {
        imageModalPic.src = this._link;
        imageModalTitle.textContent = this._name;
        super.open()
    }

    setEventListeners(){
        super.setEventListeners()
    }

    close() {
        super.close()
    }
};
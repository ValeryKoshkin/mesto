import Popup from './Popup.js'
export class PopupWithImage extends Popup {
    constructor(popupElement){
        super(popupElement)
        this._imageModalTitle = this._popupElement.querySelector('.popup__image-title');
        this._imageModalPic = this._popupElement.querySelector('.popup__image');
    }
    
    open(data) {
        this._imageModalPic.src = data.link;
        this._imageModalPic.alt = data.name;
        this._imageModalTitle.textContent = data.name;
        super.open()
    }
};
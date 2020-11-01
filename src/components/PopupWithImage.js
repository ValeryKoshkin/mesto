import Popup from './Popup.js'
export class PopupWithImage extends Popup {
    constructor(popupElement){
        super(popupElement)
        this._imageModalTitle = this._popupElement.querySelector('.popup__image-title');
        this._imageModalPic = this._popupElement.querySelector('.popup__image');
    }
    
    open({link, name}) {
        this._imageModalPic.src = link;
        this._imageModalPic.alt = name;
        this._imageModalTitle.textContent = name;
        super.open()
    }
};
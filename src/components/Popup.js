export default class Popup {
    constructor(popupElement) {
        this._popupElement = popupElement
        this._handleEscClose = this._handleEscClose.bind(this);
        this.closeByOverlay = this.closeByOverlay.bind(this);
    }

    open() {
        this._popupElement.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose)
        this._popupElement.addEventListener('click', this.closeByOverlay);
    }

    close(){
        this._popupElement.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose)
        this._popupElement.removeEventListener('click', this.closeByOverlay);
    }

    _handleEscClose(event){
        if(event.key === 'Escape'){ 
           this.close() 
        }  
    }

    closeByOverlay (evt) { 
        if (evt.target.classList.contains('popup_opened')){ 
            this.close(); 
        }; 
      }; 

    setEventListeners() {
        this._popupElement.querySelector('.button_type_close').addEventListener('click',()=>{
            this.close(); 
        })
    }
};



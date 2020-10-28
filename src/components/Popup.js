export default class Popup {
    constructor(popupSelector) {
        this.popupSelector = popupSelector
    }

    open() {
        this.popupSelector.classList.add('popup_opened');
    }

    close(){
        this.popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose.bind(this))
    }

    _handleEscClose(event){
        if(event.key === 'Escape'){ 
           this.close() 
        }  
    }

    setEventListeners() {
        this.popupSelector.querySelector('.button_type_close').addEventListener('click',()=>{
            this.close();
        })
        document.addEventListener('keydown', this._handleEscClose.bind(this))
    }
};



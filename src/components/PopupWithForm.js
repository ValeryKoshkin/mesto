import Popup from './Popup.js'

export class PopupWithForm extends Popup {
    constructor(popupElement, {handleFormSubmit, handleClose}){ 
        super(popupElement)
        this._handleFormSubmit = handleFormSubmit
        this._handleClose = handleClose
        this._form = this._popupElement.querySelector('.form');
    }

    _getInputValues() {
        this.inputList = this._popupElement.querySelectorAll('.form__input');
        this._formValues = {};
        this.inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        }
        );
        return this._formValues;
    }

    setEventListeners(){
        this._form.addEventListener('submit', (evt)=>{
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        })
        super.setEventListeners()
    }

    close() {
        super.close()
        this._form.reset();
        this._handleClose();

    }
};
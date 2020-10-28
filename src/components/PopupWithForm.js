import Popup from './Popup.js'

export class PopupWithForm extends Popup {
    constructor(popupSelector, {handleFormSubmit}){ 
        super(popupSelector)
        this.handleFormSubmit = handleFormSubmit
    }

    _getInputValues() {
        this.inputList = this.popupSelector.querySelectorAll('.form__input');
        this._formValues = {};
        this.inputList.forEach(input => {
        this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    setEventListeners(){
        this.popupSelector.querySelector('.form').addEventListener('submit', (evt)=>{
            evt.preventDefault();
            this.handleFormSubmit(this._getInputValues());
        })
        super.setEventListeners()
    }

    close() {
        super.close()
        this.popupSelector.querySelector('.form').reset();
    }
};
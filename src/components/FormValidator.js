export class FormValidator {
  
  constructor (validationConfig, form) {
   this._validationConfig = validationConfig
   this._formElement = form;
   this._errorClass = validationConfig.errorClass;
   this._inputErrorClass = validationConfig.inputErrorClass;
   this._inactiveButtonClass = validationConfig.inactiveButtonClass;
   this._submitButtonSelector = validationConfig.submitButtonSelector;
   this._inputSelector = validationConfig.inputSelector;
  }
  
  _showError ( inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };
  
  _hideError( inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._errorClass);
  };
  
  _checkInputValidity ( inputElement) {
    if (!inputElement.validity.valid){  
      this._showError( inputElement, inputElement.validationMessage);      
      
    } else {
      this._hideError( inputElement);
    }
    
  };
  
  _hasInvalidInput () {
    return this._inputList.some((inputElement) => {
    return !inputElement.validity.valid;
    });
  };
  
  
  _toggleButtonState () {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.disabled = true;
  } else {
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.disabled = false;
  };
  };
  
  _deleteError (inputElement) {
    const buttonList = Array.from(document.querySelectorAll('.button'))
    const errorSpanList = Array.from(document.querySelectorAll('.form__error'));
      buttonList.forEach((button)=>{
        button.addEventListener('click', ()=>{
          inputElement.classList.remove(this._inputErrorClass); //удалили нижнюю границу
          errorSpanList.forEach((item)=>{
            item.textContent='';                    //удалили текст ошибок
          })
        })
      })
};

_setEventListeners() {
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
        this._deleteError(inputElement) ;
          inputElement.addEventListener('input',  () => {
        this._checkInputValidity( inputElement);
        this._toggleButtonState();
      });
    });
  };
  
  enableValidation(){
    this._setEventListeners(this._formElement) 
    };
  };
  


  
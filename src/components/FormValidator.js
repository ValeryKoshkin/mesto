export class FormValidator {
  constructor (validationConfig, form) {
   this._validationConfig = validationConfig
   this._formElement = form;
   this._errorClass = validationConfig.errorClass;
   this._inputErrorClass = validationConfig.inputErrorClass;
   this._inactiveButtonClass = validationConfig.inactiveButtonClass;
   this._submitButtonSelector = validationConfig.submitButtonSelector;
   this._inputSelector = validationConfig.inputSelector;
   this._formErrors = Array.from(document.querySelectorAll('.form__error'));
   this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
   this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  };
  
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
  
  cleanErrors() { 
    this._inputList.forEach((item)=>{item.classList.remove(this._inputErrorClass)})
    this._formErrors.forEach((item)=>{item.textContent = ''})
  };

  _setEventListeners() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
        this.cleanErrors() ;
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
  

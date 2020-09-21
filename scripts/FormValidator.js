export class FormValidator {
  constructor (validationConfig, form) {
      this.validationConfig = validationConfig
      this._editFormModalWindow = editFormModalWindow;
      this._cardFormModalWindow = cardFormModalWindow;
      
    }
  
  _showError (formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add('form__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__input-error_active');
  }
  
  _hideError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove('form__input_type_error');
    errorElement.textContent = '';
    errorElement.classList.remove('form__input-error_active');
  }
  
  _checkInputValidity (formElement, inputElement) {
    if (!inputElement.validity.valid){  
      this._showError(formElement, inputElement, inputElement.validationMessage);      
      
    } else {
      this._hideError(formElement, inputElement);
    }
    
  };
  
  _hasInvalidInput (inputList) {
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
    });
  }
  
  
  _toggleButtonState (inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
    buttonElement.classList.add('form__button_disabled');
  } else {
    buttonElement.classList.remove('form__button_disabled');
  }
  
  }
  
  _setEventListeners(formElement) {
    const buttonElement = formElement.querySelector('.form__button');
    const inputList = Array.from(formElement.querySelectorAll('.form__input'));
    this._toggleButtonState(inputList, buttonElement);
      inputList.forEach((inputElement) => {
        inputElement.addEventListener('input',  () => {
        
          this._checkInputValidity(formElement, inputElement);
         this._toggleButtonState(inputList, buttonElement);
      });
    });
   
  };
  
  enableValidation(){
    const formList = Array.from(document.querySelectorAll('.form'));
  
    formList.forEach((formElement)=>{
      formElement.addEventListener('submit', (evt)=>{
        evt.preventDefault;
      })
      this._setEventListeners(formElement) 
    })
    }
  }

  export const editFormModalWindow = document.querySelector('.formModalCard');
  export const cardFormModalWindow = document.querySelector('.formModalEdit');

  
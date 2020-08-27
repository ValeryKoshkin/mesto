const validationConfig = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__button',
    inactiveButtonClass: 'form__button_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_active'
  };

const showInputError = (formSelector, inputSelector, errorMessage) => {
    const errorElement = formSelector.querySelector(`#${inputSelector.id}-error`)
    inputSelector.classList.add(validationConfig.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationConfig.errorClass);
    
  };
  
const hideInputError = (formSelector, inputSelector) => {
    const errorElement = formSelector.querySelector(`#${inputSelector.id}-error`)
    inputSelector.classList.remove(validationConfig.inputErrorClass);
    errorElement.classList.remove(validationConfig.errorClass);
    errorElement.textContent = '';
  };
 
const checkInputValidity = (formSelector,  inputSelector) => {
    if (!inputSelector.validity.valid) {
      showInputError(formSelector, inputSelector, inputSelector.validationMessage);
    } else {
      hideInputError(formSelector, inputSelector);
    };
  };
  
const hasInvalidInput = (inputList) => {
    return inputList.some((inputSelector) => {
    return !inputSelector.validity.valid;
  });
  };
  
const toggleButtonState = (inputList, submitButtonSelector) => {
    if (hasInvalidInput(inputList)){
        submitButtonSelector.classList.add(validationConfig.inactiveButtonClass)
        submitButtonSelector.disabled = true
    } else {
        submitButtonSelector.classList.remove(validationConfig.inactiveButtonClass)
        submitButtonSelector.disabled = false
    }
  };
  
const disableButton = (evt) => {
    evt.classList.add('form__button_disabled');
    evt.disabled = true;
  };

const enableButton = (evt) => {
  evt.classList.remove('form__button_disabled');
  evt.disabled = false;
}

const setEventListeners = (formSelector) => {
    const inputList = Array.from(formSelector.querySelectorAll(`.form__input`));
    const submitButtonSelector = formSelector.querySelector('.form__button');
  inputList.forEach((inputSelector) => {
    inputSelector.addEventListener('input', function () {
      checkInputValidity(formSelector, inputSelector);
      toggleButtonState(inputList, submitButtonSelector);
    });
  });
  };
  
function enableValidation() {
    const formList  = Array.from(document.querySelectorAll('.form'));
      formList.forEach((formSelector) => {
        formSelector.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formSelector);
  });
  }
  
  enableValidation (validationConfig);
  
  
  
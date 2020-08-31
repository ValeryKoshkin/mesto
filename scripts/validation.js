const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
};

const showInputError = (formSelector, inputSelector, config, errorMessage) => {
  const errorElement = formSelector.querySelector(`#${inputSelector.id}-error`)
  inputSelector.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
  
};

const hideInputError = (formSelector, inputSelector, config) => {
  const errorElement = formSelector.querySelector(`#${inputSelector.id}-error`)
  inputSelector.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formSelector,  inputSelector, config) => {
  if (!inputSelector.validity.valid) {
    showInputError(formSelector, inputSelector, config, inputSelector.validationMessage);
  } else {
    hideInputError(formSelector, inputSelector, config);
  };
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputSelector) => {
  return !inputSelector.validity.valid;
});
};

const toggleButtonState = (inputList, submitButtonSelector,config) => {
  if (hasInvalidInput(inputList)){
      submitButtonSelector.classList.add(config.inactiveButtonClass)
      submitButtonSelector.disabled = true
  } else {
      submitButtonSelector.classList.remove(config.inactiveButtonClass)
      submitButtonSelector.disabled = false
  }
};

const disableButton = (button, buttonModificator) => {
  button.classList.add(buttonModificator);
  button.disabled = true;
};

const enableButton = (button , buttonModificator) => {
button.classList.remove(buttonModificator);
button.disabled = false;
}

const setEventListeners = (formSelector, config) => {
  const inputList = Array.from(formSelector.querySelectorAll(config.inputSelector));
   const submitButtonSelector = formSelector.querySelector(config.submitButtonSelector);
inputList.forEach((inputSelector) => {
  inputSelector.addEventListener('input', function () {
    checkInputValidity(formSelector, inputSelector, config);
    toggleButtonState(inputList, submitButtonSelector, config);
  });
});
};

function enableValidation(config) {
  const formList  = Array.from(document.querySelectorAll(config.formSelector));
  
    formList.forEach((formSelector) => {
      formSelector.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });
  setEventListeners(formSelector, config);
});
}

enableValidation (validationConfig);



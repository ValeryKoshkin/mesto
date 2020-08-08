const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_visible'
};
const forms = document.querySelectorAll(validationConfig.formSelector);
const enableValidation = ({formSelector, inputSelector,submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass}) => {
    forms.forEach((formElement) => {
            formElement.addEventListener('submit', (evt) => {
                evt.preventDefault();
            });
    checkInputs(formElement, inputSelector, errorClass, inputErrorClass, submitButtonSelector,inactiveButtonClass);
      });
    };

function checkInputs (formElement, inputSelector, errorClass, inputErrorClass, submitButtonSelector,inactiveButtonClass) {
  const inputs = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
    inputs.forEach((inputElement) =>{
        inputElement.addEventListener('input', (evt) => {
           const errorElement = formElement.querySelector(`#${inputElement.name}-error`)
            if (inputElement.validity.valid) {
                inputElement.classList.remove(inputErrorClass);
                errorElement.textContent = '';
                errorElement.classList.remove(errorClass);
            } else {
                inputElement.classList.add(inputErrorClass);
                errorElement.textContent = inputElement.validationMessage;
                errorElement.classList.add(errorClass);
            };
          checkSubmit (formElement, inputSelector, errorClass, inputErrorClass, submitButtonSelector,inactiveButtonClass);
        });
    });
};

function checkSubmit (formElement, inputSelector, errorClass, inputErrorClass, submitButtonSelector,inactiveButtonClass) {
           
const inputs = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
const buttonSubmit = formElement.querySelector(validationConfig.submitButtonSelector);    
           const isFormValid = inputs.some((inputElement) => !inputElement.validity.valid);
            if (isFormValid) {
                buttonSubmit.classList.add(inactiveButtonClass);
                buttonSubmit.disabled = true;
            } else {
                buttonSubmit.classList.remove(inactiveButtonClass);
                buttonSubmit.disabled = false;
            };
};

enableValidation(validationConfig)
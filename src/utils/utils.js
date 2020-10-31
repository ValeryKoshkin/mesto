

export function enableButton (button, buttonModificator) { 
  button.classList.remove(buttonModificator); 
  button.disabled = false; 
};

export function disableButton (button, buttonModificator) { 
    button.classList.add(buttonModificator); 
    button.disabled = true;
}; 
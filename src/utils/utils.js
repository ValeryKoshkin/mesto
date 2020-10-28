import { popupList } from './constants.js'

export function closeByOverlay (evt) {
    if (evt.target.classList.contains('popup_opened')){
        evt.target.classList.remove('popup_opened');
        };
};

export function setClosePopupOverlay () {
    popupList.forEach(function () {
        document.addEventListener('click', closeByOverlay);
    });
};

export function enableButton (button, buttonModificator) { 
  button.classList.remove(buttonModificator); 
  button.disabled = false; 
};

export function disableButton (button, buttonModificator) { 
    button.classList.add(buttonModificator); 
    button.disabled = true;
}; 
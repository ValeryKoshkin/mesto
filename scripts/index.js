import {Card} from './Card.js'
import { FormValidator } from './FormValidator.js';
import { validationConfig, initialCards } from './constants.js';

const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupTypeAdd = document.querySelector('.popup_type_add');
const popupList = Array.from(document.querySelectorAll('.popup'));
const openEditModalButton = document.querySelector('.button_type_edit');
const openAddModalButton = document.querySelector('.button_type_add');
const closeEditModalButton = popupTypeEdit.querySelector('.button_type_close');
const closeAddModalButton = popupTypeAdd.querySelector('.button_type_close');
const buttonTypeAdd = document.querySelector('.form__button_type_add');
const buttonTypeEdit = document.querySelector('.form__button_type_edit')
const likeButton = document.querySelector('.template-card').content.querySelector('.button_type_like');
const formEdit = popupTypeEdit.querySelector('.form');
const formAdd = popupTypeAdd.querySelector('.form');
const inputName = popupTypeEdit.querySelector('.form__input_type_name'); //инпут имени
const inputJob = popupTypeEdit.querySelector('.form__input_type_job'); // инпут профессии
const inputPlace = popupTypeAdd.querySelector('.form__input_type_place'); //инпут названия места
const inputURL = popupTypeAdd.querySelector('.form__input_type_url'); //инпут ссылки
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const inactiveButton = (validationConfig.inactiveButtonClass);

export function openPopup (popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', handleESC); 
}

export function closePopup (popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown',  handleESC); 
}

function openProfilePopup() {
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
    openPopup(popupTypeEdit);
}

function openAddPopup () {
    inputURL.value = '';
    inputPlace.value = '';
    openPopup(popupTypeAdd);
}

function submitHandlerEdit (event){
    event.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    closePopup(popupTypeEdit);
};

function submitHandlerAdd (event){
    event.preventDefault();
    renderCard({name: inputPlace.value, link: inputURL.value});
    closePopup(popupTypeAdd);
    inputURL.value = '';
    inputPlace.value = '';
    
};

function closeByOverlay (evt) {
    if (evt.target.classList.contains('popup_opened')){
        evt.target.classList.remove('popup_opened');
        };
;}

function setClosePopupOverlay () {
    popupList.forEach(function () {
        document.addEventListener('click', closeByOverlay);
        });
};

function enableButton  (button , buttonModificator) { 
  button.classList.remove(buttonModificator); 
  button.disabled = false; 
  } 

function disableButton (button, buttonModificator) { 
    button.classList.add(buttonModificator); 
    button.disabled = true;
  }; 


function handleESC (evt) { 
    if(evt.key === 'Escape'){ 
        closePopup(document.querySelector('.popup_opened'))     
        }  
}; 

setClosePopupOverlay (closeByOverlay);

openEditModalButton.addEventListener('click', () => {
    openProfilePopup()
    enableButton(buttonTypeEdit, inactiveButton);
} ); 

closeEditModalButton.addEventListener('click', () => {
    closePopup(popupTypeEdit)
} );


openAddModalButton.addEventListener('click', () => {
    openAddPopup ();
    disableButton(buttonTypeAdd, inactiveButton);
   
    
} );

closeAddModalButton.addEventListener('click', () => {
    closePopup(popupTypeAdd)
});

formEdit.addEventListener('submit', submitHandlerEdit);
formAdd.addEventListener('submit', submitHandlerAdd);

initialCards.forEach((item)=>{
   renderCard(item)
});

function renderCard(item) { 
    const card = new Card(item, '.template-card');
    const cardNew = card.generateCard();
    document.querySelector('.gallery__list').prepend(cardNew); 
} ;

const editFormModalWindow = document.querySelector('.formModalCard')
const cardFormModalWindow = document.querySelector('.formModalEdit')

const editFormValidator = new FormValidator(validationConfig, editFormModalWindow);
const cardFormValidator = new FormValidator(validationConfig, cardFormModalWindow);

editFormValidator.enableValidation();
cardFormValidator.enableValidation();




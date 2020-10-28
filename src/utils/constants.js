export const validationConfig = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__button',
    inactiveButtonClass: 'form__button_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_active'
  };
  
export const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const popupTypeEdit = document.querySelector('.popup_type_edit');
export const popupTypeAdd = document.querySelector('.popup_type_add');
export const popupList = Array.from(document.querySelectorAll('.popup'));
export const openEditModalButton = document.querySelector('.button_type_edit');
export const openAddModalButton = document.querySelector('.button_type_add');
export const buttonTypeAdd = document.querySelector('.form__button_type_add');
export const buttonTypeEdit = document.querySelector('.form__button_type_edit')
export const inactiveButton = (validationConfig.inactiveButtonClass);
export const cardListSelector = '.gallery__list'
export const template = '.template-card'
export const placeInput = document.querySelector('.form__input_type_place');
export const urlInput = document.querySelector('.form__input_type_url');



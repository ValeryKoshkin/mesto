import {openPopup, closePopup} from './index.js';

const popupTypeImage = document.querySelector('.popup_type_image');
const closeImageButton =popupTypeImage.querySelector('.button_type_close');

export class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector('.gallery__item').cloneNode(true); 
        return cardElement
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector('.gallery__image').style.backgroundImage = `url(${this._link})`;
        this._element.querySelector('.gallery__title').textContent = this._name;

        return this._element
    }
    
    _setEventListeners() { 
        //открытие попапа 
        this._element.querySelector('.gallery__image').addEventListener('click', () => {
            this._handleOpenPopup();
          });
        //закрытие попапа
        closeImageButton.addEventListener('click', () => {
            this._handleClosePopup(); 
          });
        //тогл лайка
        this._element.querySelector('.button_type_like').addEventListener('click', ()=>{
            this._handleLikeButton();
        });
        //удаление карточки
        this._element.querySelector('.button_type_delete').addEventListener('click', ()=>{
            this._deleteCard();
        });
    ;}

    _handleOpenPopup() {
        const imageModalTitle = popupTypeImage.querySelector('.popup__image-title');
        const imageModalPic = popupTypeImage.querySelector('.popup__image');
        
        imageModalPic.src = this._link;
        imageModalTitle.textContent = this._name;
        
        openPopup(popupTypeImage);
    };

    _handleClosePopup() {
        closePopup(popupTypeImage);
    };

    _handleLikeButton() {
        this._element.querySelector('.button_type_like').classList.toggle('button_type_like_active');
    };

    _deleteCard() {
        const closestButton = this._element.closest('.gallery__item'); 
            closestButton.remove(); 
            this._element= null;

    };
};


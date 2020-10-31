export class Card {
    constructor(data,  cardSelector, {handleCardClick} ) {
        this._name = data.name;
        this._link = data.link
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
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
            this._handleCardClick();
        });
        //тогл лайка
        this._element.querySelector('.button_type_like').addEventListener('click', ()=>{
            this._handleLikeButton();
        });
        //удаление карточки
        this._element.querySelector('.button_type_delete').addEventListener('click', ()=>{
            this._deleteCard();
        })
    }

   _handleLikeButton() {
        this._element.querySelector('.button_type_like').classList.toggle('button_type_like_active');
    }

    _deleteCard() {
         
        this._element.remove(); 
        this._element= null;
    }
};


import './index.css';
import { Card } from '../components/Card.js'
import { FormValidator } from '../components/FormValidator.js';
import { validationConfig, initialCards } from '../utils/constants.js';
import UserInfo, { personInfo } from '../components/UserInfo.js';
import {popupTypeImage} from '../components/Card.js'
import {PopupWithForm} from '../components/PopupWithForm.js'
import {PopupWithImage} from '../components/PopupWithImage.js'
import Section from '../components/Section.js'
import { popupTypeEdit, popupTypeAdd, openEditModalButton, openAddModalButton, buttonTypeAdd, buttonTypeEdit, inactiveButton, cardListSelector, template, placeInput, urlInput} from '../utils/constants.js'
import { closeByOverlay, setClosePopupOverlay, enableButton, disableButton} from '../utils/utils.js';


setClosePopupOverlay (closeByOverlay);

openEditModalButton.addEventListener('click', () => {
    popupForm.open();   //открытие попапа формы
    user.getUserInfo(); //получение данных юзера
    enableButton(buttonTypeEdit, inactiveButton); //активация кнопки
}); 

openAddModalButton.addEventListener('click', () => {
    popupAdd.open();    //открытие попапа добавления пикчи
    disableButton(buttonTypeAdd, inactiveButton);//дезактивакия кнопки
});

const user = new UserInfo (personInfo) //инстанс юзеринфо

const popupForm = new PopupWithForm(popupTypeEdit, {handleFormSubmit:()=>{
    user.setUserInfo() //добавление данных юзера на страницу
    popupForm.close()
    }
});

popupForm.setEventListeners();

const popupAdd = new PopupWithForm(popupTypeAdd, {handleFormSubmit:()=>{
    const cardInfo = {name: placeInput.value,   // взяли данные о картинке
                      link: urlInput.value}

    const cardNew = new Card(cardInfo, template, 
        {handleCardClick:()=>{ //события по сабмиту
            const popupImg = new PopupWithImage(popupTypeImage, cardInfo)
            popupImg.open();
            popupImg.setEventListeners()
            }
        });

    const cardNewAdd = cardNew.generateCard() 
            cardList.addItem(cardNewAdd)
            popupAdd.close()
    }
    
})

popupAdd.setEventListeners();

const cardList = new Section ({
    data: initialCards, //отрисовка изначального массива карточек
    renderer: (item)=>{
        const card = new Card(item, template, {handleCardClick:()=>{
        const popupImg = new PopupWithImage(popupTypeImage, item) //события по клику на саму пикчу
              popupImg.open() ;
              popupImg.setEventListeners()
            }
        });
        const cardNew = card.generateCard();
        cardList.addItem(cardNew)
    }
},
cardListSelector);
cardList.renderItems()

const editFormModalWindow = document.querySelector('.formModalCard')
const cardFormModalWindow = document.querySelector('.formModalEdit')

const editFormValidator = new FormValidator(validationConfig, editFormModalWindow);
const cardFormValidator = new FormValidator(validationConfig, cardFormModalWindow);

editFormValidator.enableValidation();
cardFormValidator.enableValidation();



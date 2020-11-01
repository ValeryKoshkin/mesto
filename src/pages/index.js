import './index.css';
import { Card } from '../components/Card.js'
import { FormValidator } from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import {PopupWithForm} from '../components/PopupWithForm.js'
import {PopupWithImage} from '../components/PopupWithImage.js'
import Section from '../components/Section.js'
import {validationConfig, initialCards, popupTypeEdit, popupTypeAdd, popupTypeImage, openEditModalButton, openAddModalButton, buttonTypeAdd, buttonTypeEdit, inactiveButton, cardListSelector, template, placeInput, urlInput, nameInput, jobInput, personInfo} from '../utils/constants.js'
import { enableButton, disableButton} from '../utils/utils.js';

openEditModalButton.addEventListener('click', () => {
    const inputs = user.getUserInfo()
    popupForm.open();   //открытие попапа формы
    nameInput.value = inputs.user
    jobInput.value = inputs.job
    enableButton(buttonTypeEdit, inactiveButton); //активация кнопки
}); 

openAddModalButton.addEventListener('click', () => {
    popupAdd.open();    //открытие попапа добавления пикчи
    disableButton(buttonTypeAdd, inactiveButton);//дезактивакия кнопки
});

const user = new UserInfo (personInfo) //инстанс юзеринфо

const popupForm = new PopupWithForm(popupTypeEdit, {handleFormSubmit:(data)=>{
    user.setUserInfo(data) //добавление данных юзера на страницу
    popupForm.close()
    }, handleClose:()=>{editFormValidator.cleanErrors()}
    }, 
);

popupForm.setEventListeners();

const popupImg = new PopupWithImage(popupTypeImage);
popupImg.setEventListeners();

const popupAdd = new PopupWithForm(popupTypeAdd, {handleFormSubmit:(data)=>{
        const cardNew = new Card(data, template, 
        {handleCardClick:()=>{ //события по сабмиту
            popupImg.open(data)
            }
        });

    const cardNewAdd = cardNew.generateCard() 
            cardList.addItem(cardNewAdd)
            popupAdd.close()
    } ,handleClose:()=>{cardFormValidator.cleanErrors()}
})

popupAdd.setEventListeners();

const cardList = new Section ({
    data: initialCards, //отрисовка изначального массива карточек
    renderer: (item)=>{
        const card = new Card(item, template, {handleCardClick:()=>{
            
            popupImg.open(item)
            }
        });
        const cardNew = card.generateCard();
        cardList.addItem(cardNew)
    }
},

cardListSelector);
cardList.renderItems()

const editFormModalWindow = document.querySelector('.formModalEdit')
const cardFormModalWindow = document.querySelector('.formModalCard')

const editFormValidator = new FormValidator(validationConfig, editFormModalWindow);
const cardFormValidator = new FormValidator(validationConfig, cardFormModalWindow);

editFormValidator.enableValidation();
cardFormValidator.enableValidation();



//Поиск попапов
const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupTypeAdd = document.querySelector('.popup_type_add');
const popupTypeImage = document.querySelector('.popup_type_image');
const popupList = Array.from(document.querySelectorAll('.popup'));


//Поиск кнопок модалок

const openEditModalButton = document.querySelector('.button_type_edit');
const openAddModalButton = document.querySelector('.button_type_add');
const closeEditModalButton = popupTypeEdit.querySelector('.button_type_close');
const closeAddModalButton = popupTypeAdd.querySelector('.button_type_close');
const closeImageButton =popupTypeImage.querySelector('.button_type_close');

const likeButton = document.querySelector('.template-card').content.querySelector('.button_type_like');




//Поиск внутренностей
const formEdit = popupTypeEdit.querySelector('.form');
const formAdd = popupTypeAdd.querySelector('.form');




const inputName = popupTypeEdit.querySelector('.form__input_type_name'); //инпут имени
const inputJob = popupTypeEdit.querySelector('.form__input_type_job'); // инпут профессии

const inputPlace = popupTypeAdd.querySelector('.form__input_type_place'); //инпут названия места
const inputURL = popupTypeAdd.querySelector('.form__input_type_url'); //инпут ссылки


const imageModalTitle = popupTypeImage.querySelector('.popup__image-title');
const imageModalPic = popupTypeImage.querySelector('.popup__image');



const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');



function toggleAddWindow (){
    popupTypeAdd.classList.toggle('popup_opened');
        
}



function toggleEditWindow (){
    popupTypeEdit.classList.toggle('popup_opened');
}


function submitHandlerEdit (event){
    event.preventDefault();
    toggleEditWindow();
}

function submitHandlerAdd (event){
    event.preventDefault();
    renderCard({name: inputPlace.value, link: inputURL.value});
    toggleAddWindow();
}
//Закрытие через клик
function closeOpenPopup () {
    
        popupList.forEach(function () {
            document.addEventListener('click', function (evt){
                if (evt.target.classList.contains('popup_opened')){
                    evt.target.classList.remove('popup_opened');
                }
            });
        });
}
closeOpenPopup ();
//Закрытие через Escape
function closeOpenEsc () {
    
        popupList.forEach(function () {
            document.addEventListener('keydown', function (evt){
                if(evt.key === 'Escape'){
                    popupTypeAdd.classList.remove('popup_opened');
                    popupTypeEdit.classList.remove('popup_opened');
                    popupTypeImage.classList.remove('popup_opened');
                    
                   }  
            });
        });
}
closeOpenEsc ();


openEditModalButton.addEventListener('click', toggleEditWindow); 

closeEditModalButton.addEventListener('click', toggleEditWindow);

openAddModalButton.addEventListener('click', toggleAddWindow);

closeAddModalButton.addEventListener('click', toggleAddWindow);

formEdit.addEventListener('submit', submitHandlerEdit);

formAdd.addEventListener('submit', submitHandlerAdd);




const initialCards = [
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

const cardTemplate = document.querySelector('.template-card').content.querySelector('.gallery__item');
const list = document.querySelector('.gallery__list');

function renderCard(data) {
    

    
    list.prepend(createCard(data));
}


function createCard(data) {
    const cardElement = cardTemplate.cloneNode(true);

    const cardImage = cardElement.querySelector('.gallery__image');
    const cardTitle = cardElement.querySelector('.gallery__title');
    const cardLikeButton = cardElement.querySelector('.button_type_like');
    const cardDeleteButton = cardElement.querySelector('.button_type_delete');


    cardLikeButton.addEventListener('click', () =>{
        cardLikeButton.classList.toggle('button_type_like_active');
        

    });

    cardDeleteButton.addEventListener('click', () =>{
        const deleteButton = cardDeleteButton.closest('.gallery__item');
            deleteButton.remove();
    });

    cardImage.addEventListener('click', () =>{
        imageModalPic.src = `${data.link}`;
        imageModalTitle.textContent = data.name;
        popupTypeImage.classList.toggle('popup_opened');
        
    });

    closeImageButton.addEventListener('click', () =>{
        popupTypeImage.classList.remove('popup_opened');
    })

    cardTitle.textContent = data.name;
    cardImage.style.backgroundImage = `url(${data.link})`;
    return cardElement;
}


initialCards.forEach((data)=>{
    renderCard(data)
    
})



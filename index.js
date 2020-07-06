const openModalButton = document.querySelector('.button_type_edit');
const closeModalButton = document.querySelector('.button_type_close');
const popup = document.querySelector('.popup');
const form = document.querySelector('.form');
 

const inputName = document.querySelector('.form__input_type_name');
const inputJob = document.querySelector('.form__input_type_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');


openModalButton.addEventListener('click', function(){
	inputName.value = profileName.textContent;
	inputJob.value = profileJob.textContent;
	popup.classList.add('popup_opened');
}) 

closeModalButton.addEventListener('click', function(){
	popup.classList.remove('popup_opened');
})

form.addEventListener('submit', function(event){
	event.preventDefault();




	profileName.textContent = inputName.value;
	profileJob.textContent = inputJob.value;





	
	popup.classList.remove('popup_opened');

})
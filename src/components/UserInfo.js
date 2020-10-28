export const personInfo = {
    name: '.profile__name',
    job: '.profile__job',
  };
export default class UserInfo {
    constructor(personInfo) {
        this._personInfo = personInfo;
        this._name = document.querySelector(personInfo.name).textContent;
        this._job = document.querySelector(personInfo.job).textContent;
        this._inputName = document.querySelector('.form__input_type_name');
        this._inputJob = document.querySelector('.form__input_type_job');
    }

    getUserInfo() {
        this._inputName.value = document.querySelector('.profile__name').textContent;
        this._inputJob.value = document.querySelector('.profile__job').textContent;
    }
  
  setUserInfo() {
        document.querySelector('.profile__name').textContent = this._inputName.value;
        document.querySelector('.profile__job'
        ).textContent = this._inputJob.value;
  }
};


  
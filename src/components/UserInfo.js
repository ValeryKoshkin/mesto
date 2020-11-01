export default class UserInfo {
    constructor(personInfo) {
        this._personInfo = personInfo;
        this._user = document.querySelector(personInfo.user);
        this._job = document.querySelector(personInfo.job);
    }

    getUserInfo() {
      return{
        user: this._user.textContent,
        job: this._job.textContent
       } 
    }
  
  setUserInfo({user, job}) {
        this._user.textContent = user;
        this._job.textContent = job; 
    }
};


  
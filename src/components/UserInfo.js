export default class UserInfo {
    constructor(personInfo) {
        this._personInfo = personInfo;
        this._name = document.querySelector(personInfo.name);
        this._job = document.querySelector(personInfo.job);
    }

    getUserInfo() {
      return{
        name: this._name.textContent,
        job: this._job.textContent
       } 
    }
  
  setUserInfo(data) {
        this._name.textContent = data.name;
        this._job.textContent = data.job
        console.log(data)
  }
};


  
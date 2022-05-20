class Storage{
    static getSearchedUsersFromStorage() {//tum kullanıcıları al
        let users;
        if(localStorage.getItem("users")===null)
            users=[];
        else
            users=JSON.parse(localStorage.getItem("users"));
        
        return users;
    }
    static addSearchedUserToStorage(userName){//kullanıcı ekle
        let users=this.getSearchedUsersFromStorage();
        if(users.indexOf(userName)===-1)
            users.push(userName);
        localStorage.setItem("users",JSON.stringify(users));
    }
    static clearAllSearchedUsersFromStorage(){//kullanıcıları temizle
        localStorage.removeItem("users");
    }
}
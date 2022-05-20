const githubForm=document.getElementById("github-form");
const githubName=document.getElementById("githubname");
const clearLastUsers=document.getElementById("clear-last-users");
const lastUsers=document.getElementById("last-users");
const github=new Github();
const ui=new Ui();

EventListener();

function EventListener(){
githubForm.addEventListener("submit",getData);

clearLastUsers.addEventListener("click",clearAllSearched);

document.addEventListener("DOMContentLoaded",getAllSearched);
}


function getData(e){
    let userName=githubName.value.trim();
  
    if(userName==="")
        alert("Lütfen Geçerli Bir Kullanıcı Adı Giriniz!");
    else{
        github.getGithubData(userName)
        .then(res=>{
            if(res.user.message==="Not Found"){
                ui.showError("Kullanıcı bulunamadı!");
            }else{
                ui.addSearchedUserToUi(userName);
                Storage.addSearchedUserToStorage(userName);
                ui.showUserInfo(res.user);
                ui.showRepoInfo(res.repo);
            }
        })
        .catch(err=>ui.showError(err));
    }
    
    ui.clearInput();
    e.preventDefault();
}

function clearAllSearched(){
   if(confirm("Emin misiniz?"))
    {
        Storage.clearAllSearchedUsersFromStorage();
        ui.clearAllSearchedFromUi();
    }
}

function getAllSearched(){
    let users=Storage.getSearchedUsersFromStorage();
    let result="";
    users.forEach(user => {
        result+=`<li class="list-group-item">${user}</li>`;
    });
    lastUsers.innerHTML=result;
}



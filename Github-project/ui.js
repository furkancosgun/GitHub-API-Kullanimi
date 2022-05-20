class Ui{
    constructor() {
        this.profileDiv=document.getElementById("profile");
        this.repo=document.getElementById("repos");
        this.lastUsers=document.getElementById("last-users");
        this.inputField=document.getElementById("githubname");
        this.cardBody=document.querySelector(".card-body");
    }
    clearInput(){
      
        this.inputField.value="";
    }

    showUserInfo(user){
        this.profileDiv.innerHTML=`
         <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-4">
            <a href="${user.html_url}" target = "_blank">
             <img class="img-fluid mb-2" src="${user.avatar_url}"> </a>
             <hr>
             <div id="fullName">
             <h3><strong>${user.name}</strong></h3>
             </div>
             <hr>
             <div id="bio">${user.bio}</div>
            </div>
          <div class="col-md-8">
                <button class="btn btn-secondary">
                      Takipçi  <span class="badge badge-light">${user.followers}</span>
                </button>
                <button class="btn btn-info">
                     Takip Edilen  <span class="badge badge-light">${user.following}</span>
                  </button>
                <button class="btn btn-danger">
                    Repolar  <span class="badge badge-light">${user.public_repos}</span>
                </button>
                <hr>
                <li class="list-group">
                    <li class="list-group-item borderzero">
                        <img src="images/company.png" width="30px"> <span id="company">${user.company}</span>
                        
                    </li>
                    <hr>
                    <li class="list-group-item borderzero">
                        <img src="images/location.png" width="30px"> <span id = "location">${user.location}</a>
                        
                    </li>
                    <hr>
                    <li class="list-group-item borderzero">
                        <img src="images/mail.png" width="30px"> <span id="mail">${user.email}</span>
                    </li>
                    <hr>
                </div>
          </div>
    </div> 
        `;
    }

    showError(message){
        const alert=document.createElement("div");
        alert.className="alert alert-danger";
        alert.textContent=message;
        this.cardBody.appendChild(alert);
        setTimeout(() => {
            alert.remove();
        }, 2000);
    }

    showRepoInfo(repos){
        this.repo.innerHTML="";

        repos.forEach(repo => {
        this.repo.innerHTML+=`
            <div class="card mb-2 card-body">
            <div class="row">
                <div class="col-md-6"> 
                <a href="${repo.html_url}" target = "_blank" id = "repoName">${repo.name}</a>
                </div>
                <div class="col-md-6">
                    <button class="btn btn-warning">
                        Starts  <span class="badge badge-light" id="repoStar">${repo.stargazers_count}</span>
                    </button>
                    <button class="btn btn-info">
                        Forks  <span class="badge badge-light" id ="repoFork">${repo.forks_count}</span>
                    </button>
                </div>
        </div>
        </div>
            `
        });
    }
    addSearchedUserToUi(userName){
        // <li class="list-group-item">asdaskdjkasjkşdjşasjd</li>
        let users=Storage.getSearchedUsersFromStorage();
        if(users.indexOf(userName)===-1){
            const li=document.createElement("li");
            li.className="list-group-item";
            li.textContent=userName;
            this.lastUsers.appendChild(li);
        }
    }
    clearAllSearchedFromUi(){
     while(this.lastUsers.firstElementChild !== null){
         this.lastUsers.removeChild(this.lastUsers.firstElementChild);
     }   
    }
}
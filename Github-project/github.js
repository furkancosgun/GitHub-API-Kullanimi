class Github{
    constructor() {
        this.url="https://api.github.com/users/";
    }
    async getGithubData(UserName){
        const responseUser=await fetch(this.url+UserName);
        const responseRepo=await fetch(this.url+UserName+"/repos");
        const userData=await responseUser.json();
        const repoData=await responseRepo.json();
        return {//obje olarak doner veriler
            user:userData,
            repo:repoData
        };
    }
}
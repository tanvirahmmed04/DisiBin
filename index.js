//body

const body= document.querySelector("body");
const detailsbox= document.querySelector(".detailsbox");
const contentdiv= document.querySelector(".contentdiv");



//nav 
const account = document.querySelector("#account");



//login
const createnew= document.querySelector("#createnew")
const loginbox= document.querySelector(".loginbox");
const crossloginbox = document.querySelector("#crossloginbox");

//create new
const crosscreatebox= document.querySelector("#crosscreatebox");
const createnewbox =document.querySelector(".createnewbox");
const backtologin = document.querySelector("#tologinbox");


//onclick options
createnew.onclick= function(act){
    act.preventDefault();
    createnewbox.style.display="flex";
    loginbox.style.display="none";
}

crosscreatebox.onclick= function(){
    createnewbox.style.display="none";
    contentdiv.style.display="flex";
}
backtologin.onclick= function(){
    loginbox.style.display="flex";
    createnewbox.style.display="none";
} 

account.onclick= function(act){
    act.preventDefault();
    loginbox.style.display="flex";
    contentdiv.style.display="none";
}

crossloginbox.onclick= function(){
    loginbox.style.display="none";
    contentdiv.style.display="flex";
}
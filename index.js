
//sign box reltaed
let userbtn= document.querySelectorAll("#user");
let signinupbox= document.querySelector(".signinup");
let signinbox = document.querySelector(".signinbox");
let signupbox = document.querySelector(".signupbox");
let signupbtn= document.querySelector("#newsignup");
let crosssignin= document.querySelector("#crosssignin");
let crosssignup= document.querySelector("#crosssignup");
let backsignin= document.querySelector("#backsignin");




userbtn.forEach(button =>{
    button.onclick= function(){
        console.log("hello");
        signinupbox.style.display= "flex";
        signinbox.style.display="flex";
        signupbox.style.display="none";
    }
})

signupbtn.onclick= function(){
    signinbox.style.display="none";
    signupbox.style.display="flex";
}
crosssignin.onclick= function(){
    signinupbox.style.display= "none";
    signinbox.style.display="none";
    signupbox.style.display="none";
}
crosssignup.onclick= function(){
    signupbox.style.display="none";
    signinupbox.style.display="none";
}
backsignin.onclick= function(){
    signinupbox.style.display= "flex";
    signinbox.style.display="flex";
    signupbox.style.display="none";
}

// sign box related end

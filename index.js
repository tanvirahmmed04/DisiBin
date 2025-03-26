/*
#153A42
#D72326
#FFF


*/
//sign box reltaed
let userbtn= document.querySelectorAll("#user");
let signinupbox= document.querySelector(".signinup");
let signinbox = document.querySelector(".signinbox");
let signupbox = document.querySelector(".signupbox");
let signupbtn= document.querySelector("#newsignup");
let crosssignin= document.querySelector("#crosssignin");
let crosssignup= document.querySelector("#crosssignup");
let backsignin= document.querySelector("#backsignin");



//div controls
// uiux control
const uiuxbtn= document.querySelectorAll("#uiuxbtn");
const uiuxpage= document.querySelector(".uiux-container")

//graphics control
const graphicsbtn= document.querySelectorAll("#graphicsbtn")
const graphicspage= document.querySelector(".graphics-container");

//3d design control
const threedbtn= document.querySelectorAll("#threedbtn")
const threedpage= document.querySelector(".three-d-conatainer");

//brand promo control
const brandpromobtn= document.querySelectorAll("#brandpromobtn");
const brandpromopage= document.querySelector(".brand-promo-container");

threedbtn.forEach(button=>{
    button.onclick= function(act){
        act.preventDefault();
        threedpage.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest"  })
    }
})


brandpromobtn.forEach(button=>{
    button.onclick= function(act){
        act.preventDefault();
        brandpromopage.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest"  })
    }
})


graphicsbtn.forEach(button=>{
    button.onclick= function(act){
        act.preventDefault();
        graphicspage.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest"  })
    }
    
})
uiuxbtn.forEach(button=>{
    button.onclick= function(act){
        act.preventDefault();
        uiuxpage.scrollIntoView({ behavior: "smooth" , block: "start", inline: "nearest" })
    }
})

userbtn.forEach(button =>{
    button.onclick= function(){
        console.log("hello");
        signinupbox.style.display= "flex";
        signinupbox.scrollIntoView({ behavior: "smooth" });
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

// sidebaropen
document.querySelector("#menubtn").onclick= function(){
    let sidebar= document.querySelector(".sidebar");
    sidebar.style.display= sidebar.style.display=== "flex"? "none": "flex";
    console.log("menu btn was clicked");
    
}



// userbox show
const signinbox =document.querySelector(".signinbox");
const gotosignin= document.querySelector("#gotosignin");
const xsignin= document.querySelector("#xsignin");
const xsignup= document.querySelector("#xsignup");
const  gotosignup= document.querySelector("#gotosignup")
const signupbox =document.querySelector(".signupbox");
const userbox= document.querySelector(".userbox");
const usericon= document.querySelectorAll("#usericon")
const contentbox= document.querySelector(".contentbox");


xsignup.onclick= function(){
    userbox.style.display="none";
    signupbox.style.display="none";
    contentbox.style.display="flex";
}
xsignin.onclick= function(){
    userbox.style.display="none";
    signinbox.style.display="none";
    contentbox.style.display="flex";
}
gotosignup.onclick= function(act){
    act.preventDefault()
    signupbox.style.display= "flex";
    signinbox.style.display="none";
}
gotosignin.onclick= function(act){
    act.preventDefault()
    signupbox.style.display= "none";
    signinbox.style.display="flex";
}

usericon.forEach((button)=>{
    button.onclick= function(){
        userbox.style.display= userbox.style.display=== "flex"? "none": "flex";
        signinbox.style.display= signinbox.style.display=== "flex"? "none": "flex";
       
        contentbox.style.display= contentbox.style.display=== "none"? "flex": "none";


    }
});

//userbox finish


//navbar and sidebar actions
const webdevbtn=document.querySelectorAll('#webdevbtn');
const webdevbox= document.querySelector(".webdev");
webdevbtn.forEach((button)=>{
    button.onclick= function(act){
        act.preventDefault();
        webdevbox.scrollIntoView({ behavior: 'smooth' })
        
    }
})
const veditbtn=document.querySelectorAll('#veditbtn');
const veditbox= document.querySelector(".vedit");
veditbtn.forEach((button)=>{
    button.onclick= function(act){
        act.preventDefault();
        veditbox.scrollIntoView({ behavior: 'smooth' })
        
    }
})
const appdevbtn=document.querySelectorAll('#appdevbtn');
const appdev= document.querySelector(".appdev");
appdevbtn.forEach((button)=>{
    button.onclick= function(act){
        act.preventDefault();
        appdev.scrollIntoView({ behavior: 'smooth' })
        
    }
})
const graphicsdevbtn=document.querySelectorAll('#graphicsdevbtn');
const graphicsdevbox= document.querySelector(".graphicsdev");
graphicsdevbtn.forEach((button)=>{
    button.onclick= function(act){
        act.preventDefault();
        graphicsdevbox.scrollIntoView({ behavior: 'smooth' })
        
    }
})
const reviewbtn= document.querySelectorAll("#reviewbtn");
reviewbtn.forEach((button)=>{
    button.onclick= function(act){
        act.preventDefault();
        console.log("hello");
        
    }
})

//finish

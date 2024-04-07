let gameSeq=[];
let userSeq=[];

let started= false;
let level=0;

let btns=["yellow","green","purple","red"];
let h2=document.querySelector("h2");
let h2s=document.querySelector("h2:nth-of-type(2)");
let h2l=document.querySelector("h2:nth-of-type(3)");
highScore=0;

document.addEventListener("keypress",function(){
if(started== false){
    console.log("game stared");
    started=true;
   
    levelUp();
    h2s.innerText="";
}
});
document.addEventListener("touchstart",function(){
    if(started== false){
        console.log("game stared");
        started=true;
       
        levelUp();
        h2s.innerText="";
    }
    });
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);

}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;

   let randIdx=Math.floor(Math.random()*btns.length);
   let randColor=btns[randIdx];
   let randBtn=document.querySelector(`.${randColor}`);
   gameSeq.push(randColor);
   console.log(gameSeq);
    btnFlash(randBtn);
}
function checkAns(idx){
//     console.log("curr level",level);
//    //let idx = level-1;


   if(level>=highScore){
    highScore=level;
    h2l.innerText = `High score is : ${highScore}`;
   }
    
   if(userSeq[idx]===gameSeq[idx]){
    console.log("same value");
    if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000);
        
    }
   }
   else{
    h2.innerHTML=`Game over! Your score was <b>${level} <br>Press any key to start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";

    },150);
    reset();
   }
}


function btnPress(){
    console.log(this);
   let btn=this;
   userFlash(btn);
  
   userColor=btn.getAttribute("id");
   console.log(userColor);
   userSeq.push(userColor);
   checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
    btn.addEventListener("touchstart", btnPress);
}
    



function reset(){
    started = false;
    gameSeq=[];
    userSeq=[];
    level=0;
}


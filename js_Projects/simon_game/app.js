let gameSec = [];
let userSec = [];
let highestScore = document.querySelector("#hs");
let highLevel = 0;

let btns = ["hotpink" ,"orange" ,"red","yellow"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if( started == false){
        started = true;
        
        setTimeout(() => {
            levelUp();
        }, 1000);
    }
});

    function btnFlash(btn){
        btn.classList.add("flash");
        setTimeout(() => {
            btn.classList.remove("flash");
        }, 100);
    }
    function userFlash(btn){
        btn.classList.add("userflash");
        setTimeout(() => {
            btn.classList.remove("userflash");
        }, 100);
    }

    function levelUp(){
        userSec = [];
        level++;
        h2.innerText = `Level ${level}`;

        let randomIdx = Math.floor(Math.random()*4);
        let randomColor = btns[randomIdx];
        let randombtn = document.querySelector(`.${randomColor}`);

        // console.log(randomIdx);
        // console.log(randomColor);
        // console.log(randombtn);
        gameSec.push(randomColor);
        console.log(gameSec);
        btnFlash(randombtn);
    }

    function checkAns(idx){
        // console.log("current level is :",level);
        if(userSec[idx]==gameSec[idx]){
            if(userSec.length == gameSec.length){
                setTimeout(levelUp, 1000);
                // levelUp();
            }
        }else{
            h2.innerHTML = `Your Score Was <b>${level}</b> </br> Press Any Key to Restart the Game:) `;
            document.querySelector("body").style.backgroundColor = "red";
            setTimeout(() => {
                document.querySelector("body").style.backgroundColor = "white";
                
            }, 100);

            if(highLevel<level){
                highLevel = level;
                highestScore.innerText = `Your Highest Score is : ${highLevel}`;
            }
            reset();
        }
    }

    function btnPress(){
        // console.log(this);
        let btn = this;
        userFlash(btn);

        userColor = btn.getAttribute("id");
        userSec.push(userColor);

        checkAns(userSec.length - 1);
    }

    let allBtns = document.querySelectorAll(".btn");
    for( let btn of allBtns){
        btn.addEventListener("click", btnPress);
    }

    function reset(){
        started = false;
        gameSec = [];
        userSec = [];
        level = 0;
    }

/* --------------------variables-------------- */

let result;
let wager;
let multiplier;
let winnings;
let totalWinnings;
let pics;

/* ------initialize element variables -------*/

let title = document.querySelector('.title');
let option1 = document.querySelector('.option1');
let option2 = document.querySelector('.option2');
let option3 = document.querySelector('.option3');
let spin = document.querySelector('.spin');
let winningsMessage = document.querySelector('.winnings');
let totalWinningsMessage = document.querySelector('.total-winnings');
let image1 = document.querySelector('.option1-image');
let image2 = document.querySelector('.option2-image');
let image3 = document.querySelector('.option3-image');
let image21 = document.querySelector('.option21-image');
let image22 = document.querySelector('.option22-image');
let image23 = document.querySelector('.option23-image');
let image31 = document.querySelector('.option31-image');
let image32 = document.querySelector('.option32-image');
let image33 = document.querySelector('.option33-image');
let wagerInput = document.querySelector('input');
let wagerMessage = document.querySelector('.wager');
let combo2 = [];




/* ---------------------define functions---------------------- */
function init() {
    result=[];
    wager=0;
    multiplier=0;
    winnings=0;
    totalWinnings=50;
    pics = {
        1 : 'images\\skull-and-bones.png',
        2 : 'images\\diamond (6).png',
        3 : 'images\\fashion (1).png',
        4 : 'images\\fashion (2).png',
        5 : 'images\\fashion.png'
    }

/* ------------add event listeners------------------- */
    spin.addEventListener('click', function(){

        result=[ [getResult(), getResult(), getResult()], [getResult(), getResult(), getResult()], [getResult(), getResult(), getResult()] ];
    
        getCombo(result);
    
        wager= parseInt(wagerInput.value);
        //wagerInput.value = "1";
        winnings = winnings +(wager * multiplier);
        totalWinnings += winnings;
        totalWinnings -= wager;
        
        render();
        winnings=0;
        multiplier = 0;
    });
};

function render() {

    checkForLoss();
    borderReset();
    placePics();
    renderBorders();

    wagerMessage.innerHTML=`<h3>Wager: $${wager} </h3>`;
    winningsMessage.innerHTML = `Winnings: $${winnings}`;
    totalWinningsMessage.innerHTML = `<h3>Total Winnings: $${totalWinnings}</h3>`;

    
}

function getResult() {
    let random = Math.random() * 100;

    if ((random>=0)&&(random<=50)) return 1;
    if ((random>50)&&(random<=70)) return 2;
    if ((random>70)&&(random<=85)) return 3;
    if ((random>85)&&(random<=95)) return 4;
    if ((random>95)&&(random<=100)) return 5;
}

function getCombo(result) {

 // -----------check for 2 or 3 square winning combos
 for (var i=0; i<3; i++) {

    if ( result[i][0] === result[i][1]) {
        if (result[i][1]===result[i][2]) {
            if (result[i][0]===1) winnings -= wager;
            if (result[i][0]===2) multiplier += 3;
            if (result[i][0]===3) multiplier += 12;
            if (result[i][0]===4) multiplier += 48;
            if (result[i][0]===5) multiplier += 192;
        } }/* else {
        if (result[i][0]===1) multiplier += 0;
        if (result[i][0]===2) multiplier += 1;
        if (result[i][0]===3) multiplier += 4;
        if (result[i][0]===4) multiplier += 8;
        if (result[i][0]===5) multiplier += 16;
        }
    }
    if (result[i][1] === result[i][2]) {
        if (result[i][0]===1) multiplier += 0;
        if (result[i][0]===2) multiplier += 1;
        if (result[i][0]===4) multiplier += 4;
        if (result[i][0]===3) multiplier += 8;
        if (result[i][0]===5) multiplier += 16;
    } */
        }
        
 for (var i=0; i<result.length; i++) {
    if ( result[0][i] === result[1][i]) {
        if (result[1][i]===result[2][i]) {
            if (result[0][i]===1) winnings -= wager;
            if (result[0][i]===2) multiplier += 3;
            if (result[0][i]===3) multiplier += 12;
            if (result[0][i]===4) multiplier += 48;
            if (result[0][i]===5) multiplier += 192;
        } }/* else {
        if (result[0][i]===1) multiplier += 0;
        if (result[0][i]===2) multiplier += 1;
        if (result[0][i]===3) multiplier += 4;
        if (result[0][i]===4) multiplier += 8;
        if (result[0][i]===5) multiplier += 16;
        }
    }
    if (result[1][i] === result[2][i]) {
        if (result[0][i]===1) multiplier += 0;
        if (result[0][i]===2) multiplier += 1;
        if (result[0][i]===4) multiplier += 4;
        if (result[0][i]===3) multiplier += 8;
        if (result[0][i]===5) multiplier += 16;
    } */
}

 //--------------check for diagonal combos
 if (result[0][0]===result[1][1]) {
    if (result[1][1]===result[2][2]) {
        if (result[0][1]===1) winnings -= wager;
        if (result[0][1]===2) multiplier += 3;
        if (result[0][1]===3) multiplier += 12;
        if (result[0][1]===4) multiplier += 48;
        if (result[0][1]===5) multiplier += 192;
    } /* else {
        if (result[0][1]===1) multiplier += 0;
        if (result[0][1]===2) multiplier += 1;
        if (result[0][1]===3) multiplier += 4;
        if (result[0][1]===4) multiplier += 8;
        if (result[0][1]===5) multiplier += 16;
    }
    if (result[1][1] === result[2][2]) {
        if (result[1][1]===1) multiplier += 0;
        if (result[1][1]===2) multiplier += 1;
        if (result[1][1]===4) multiplier += 4;
        if (result[1][1]===3) multiplier += 8;
        if (result[1][1]===5) multiplier += 16;
    } */
 }
 if (result[0][2]===result[1][1]) {
    if (result[1][1]===result[2][0]) {
        if (result[0][2]===1) winnings -= wager;
        if (result[0][2]===2) multiplier += 3;
        if (result[0][2]===3) multiplier += 12;
        if (result[0][2]===4) multiplier += 48;
        if (result[0][2]===5) multiplier += 192;
    } /* else {
        if (result[0][2]===1) multiplier += 0;
        if (result[0][2]===2) multiplier += 1;
        if (result[0][2]===3) multiplier += 4;
        if (result[0][2]===4) multiplier += 8;
        if (result[0][2]===5) multiplier += 16;
    }
    if (result[1][1] === result[2][0]) {
        if (result[1][1]===1) multiplier += 0;
        if (result[1][1]===2) multiplier += 1;
        if (result[1][1]===4) multiplier += 4;
        if (result[1][1]===3) multiplier += 8;
        if (result[1][1]===5) multiplier += 16;
    } */
 }

  //------------------------------------------------winning blackout combinations-------------------------------------------
  if ((result[0][0]+result[0][1]+result[0][2]+result[1][0]+result[1][1]+result[1][2]+result[2][0]+result[2][1]+result[2][2])===(9*1)) {winnings -= wager;}
  if ((result[0][0]+result[0][1]+result[0][2]+result[1][0]+result[1][1]+result[1][2]+result[2][0]+result[2][1]+result[2][2])===(9*2)) {winnings += wager;}
  if ((result[0][0]+result[0][1]+result[0][2]+result[1][0]+result[1][1]+result[1][2]+result[2][0]+result[2][1]+result[2][2])===(9*3)) {winnings += (2*wager);}
  if ((result[0][0]+result[0][1]+result[0][2]+result[1][0]+result[1][1]+result[1][2]+result[2][0]+result[2][1]+result[2][2])===(9*4)) {winnings += (4*wager);}
  if ((result[0][0]+result[0][1]+result[0][2]+result[1][0]+result[1][1]+result[1][2]+result[2][0]+result[2][1]+result[2][2])===(9*5)) {winnings += (6*wager);}
}

//------------------------------this renders the boardersfor matches-------------------------------
function renderBorders() {
    let lossBorder = "10px solid red";
    let bigWinBorder = "10px solid yellow";
    let smallWinBorder = "10px solid blue";

    if ((result[0][0]===result[0][1])&&(result[0][1]===result[0][2])) {
        if (result[0][0] === 1) {
            image1.style.border = lossBorder;
            image2.style.border = lossBorder;
            image3.style.border = lossBorder;
        } else {
        image1.style.border = bigWinBorder;
        image2.style.border = bigWinBorder;
        image3.style.border = bigWinBorder;}
    };
    if ((result[1][0]===result[1][1])&&(result[1][1]===result[1][2])) {
        if (result[1][0]===1) {
            image21.style.border = lossBorder;
            image22.style.border = lossBorder;
            image23.style.border = lossBorder;
        } else {
        image21.style.border = bigWinBorder;
        image22.style.border = bigWinBorder;
        image23.style.border = bigWinBorder;}
    };
    if ((result[2][0]===result[2][1])&&(result[2][1]===result[2][2])) {
        if (result[2][0]===1){
            image31.style.border = lossBorder;
            image32.style.border = lossBorder;
            image33.style.border = lossBorder;
        } else {
        image31.style.border = bigWinBorder;
        image32.style.border = bigWinBorder;
        image33.style.border = bigWinBorder;}
    };
    if ((result[0][0]===result[1][0])&&(result[1][0]===result[2][0])) {
        if (result[0][0]===1) {
            image1.style.border = lossBorder;
            image21.style.border = lossBorder;
            image31.style.border = lossBorder;
        } else {
        image1.style.border = bigWinBorder;
        image21.style.border = bigWinBorder;
        image31.style.border = bigWinBorder;}
    };
    if ((result[0][1]===result[1][1])&&(result[1][1]===result[2][1])) {
        if (result[0][1]===1){
            image2.style.border = lossBorder;
            image22.style.border = lossBorder;
            image32.style.border = lossBorder;
        } else {
        image2.style.border = bigWinBorder;
        image22.style.border = bigWinBorder;
        image32.style.border = bigWinBorder;}
    };
    if ((result[0][2]===result[1][2])&&(result[1][2]===result[2][2])) {
        if (result[0][2]===1) {
            image3.style.border = lossBorder;
            image23.style.border = lossBorder;
            image33.style.border = lossBorder;
        } else {
        image3.style.border = bigWinBorder;
        image23.style.border = bigWinBorder;
        image33.style.border = bigWinBorder;}
    };
};

//-----------------------------------Reset borders to NONE-----------------------------
function borderReset(){
    let nodelist=  document.querySelectorAll("img");
    nodelist.forEach(node=>{node.style.border="none";})
};

    //----------------------------------place pctures on board--------------------------------
function placePics(){
    image1.src= pics[result[0][0]];
    image2.src=pics[result[0][1]];
    image3.src=pics[result[0][2]];
    image21.src=pics[result[1][0]];
    image22.src=pics[result[1][1]];
    image23.src=pics[result[1][2]];
    image31.src=pics[result[2][0]];
    image32.src=pics[result[2][1]];
    image33.src=pics[result[2][2]];
};

function checkForLoss() {
    if (totalWinnings<=0) {
        alert("You lose sucker!  Hit 'ok' to play again");
        init();
    }
}


init();
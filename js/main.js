/* --------------------variables-------------- */
let result;
let wager;
let multiplier;
let winnings;
let totalWinnings;
let pics;
let individualCombos;
let round;
let lock;
let targetedSpaces;
let result2;
let resultTemp;

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
let combo1 = document.querySelector('.combo1');
let combo2 = document.querySelector('.combo2');
let combo3 = document.querySelector('.combo3');
let combo4 = document.querySelector('.combo4');
let combo5 = document.querySelector('.combo5');
let imageNodeList=  document.querySelectorAll("img");
let spaceNodeList=  document.querySelectorAll(".space");
let filler = document.querySelector('.option55');

/* ---------------------define functions---------------------- */
function init() {
    result=[ 
        [getResult(),getResult(), getResult()], 
        [getResult(), getResult(), getResult()], 
        [getResult(), getResult(), getResult()] 
    ];
    result2= [ result[0][0], result[0][1], result[0][2], result[1][0], result[1][1], result[1][2], result[2][0], result[2][1], result[2][2] ];
    wager=0;
    multiplier=0;
    winnings=0;
    totalWinnings=50;
    round = 0;
    lock = 0;
    targetedSpaces= [filler,filler,filler];
    pics = {
        1 : 'images\\skull-and-bones.png',
        2 : 'images\\diamond (6).png',
        3 : 'images\\fashion (1).png',
        4 : 'images\\fashion (2).png',
        5 : 'images\\fashion.png'
    }
    individualCombos = {
        1 : 0,
        2 : 0,
        3 : 0,
        4 : 0,
        5 : 0
    }

 /* ------------add event listeners------------------- */
    spin.addEventListener('click', function(){
        resetBoard();
        result=[ 
            [getResult(),getResult(), getResult()], 
            [getResult(), getResult(), getResult()], 
            [getResult(), getResult(), getResult()] 
        ];
        getCombo(result);
        wager= parseInt(wagerInput.value);
        winnings = winnings +(wager * multiplier);
        totalWinnings += winnings;
        totalWinnings -= wager;
        round += 1;
        render();
    });
};

function render() {
    checkForLoss();
    borderReset();
    placePics();
    renderBorders();
    renderCombos();
    wagerMessage.innerHTML=`<h3>Wager: $${wager} </h3>`;
    winningsMessage.innerHTML = `Winnings: $${winnings}`;
    totalWinningsMessage.innerHTML = `<h3>Total Winnings: $${totalWinnings}</h3>`;
    spin.innerHTML= `Spin! Round ${round}`;
}

function getResult() {
    let random = Math.random() * 100;
    if ((random>=0)&&(random<=30)) return 1;
    if ((random>30)&&(random<=55)) return 2;
    if ((random>55)&&(random<=75)) return 3;
    if ((random>75)&&(random<=90)) return 4;
    if ((random>90)&&(random<=100)) return 5;
}

function getCombo(result) {
 // -----------check for 2 or 3 square winning combos
 for (var i=0; i<3; i++) {
    if ( result[i][0] === result[i][1]) {
        if (result[i][1]===result[i][2]) {
            if (result[i][0]===1) {multiplier -= 3; individualCombos[1]-=3;}
            if (result[i][0]===2) {multiplier += 3; individualCombos[2]+=3;}
            if (result[i][0]===3) {multiplier += 12; individualCombos[3]+=12;}
            if (result[i][0]===4) {multiplier += 48; individualCombos[4]+=48;}
            if (result[i][0]===5) {multiplier += 192; individualCombos[5]+=192;}
        } 
    }
}    
 for (var i=0; i<result.length; i++) {
    if ( result[0][i] === result[1][i]) {
        if (result[1][i]===result[2][i]) {
            if (result[0][i]===1) {multiplier -= 3; individualCombos[1]-=3;}
            if (result[0][i]===2) {multiplier += 3; individualCombos[2]+=3;}
            if (result[0][i]===3) {multiplier += 12; individualCombos[3]+=12;}
            if (result[0][i]===4) {multiplier += 48; individualCombos[4]+=48;}
            if (result[0][i]===5) {multiplier += 192; individualCombos[5]+=192;}
        } 
    }
}
 //--------------check for diagonal combos
 if (result[0][0]===result[1][1]) {
    if (result[1][1]===result[2][2]) {
        if (result[0][0]===1) {multiplier -= 3; individualCombos[1]-=3;}
        if (result[0][0]===2) {multiplier += 3; individualCombos[2]+=3;}
        if (result[0][0]===3) {multiplier += 12; individualCombos[3]+=12;}
        if (result[0][0]===4) {multiplier += 48; individualCombos[4]+=48;}
        if (result[0][0]===5) {multiplier += 192; individualCombos[5]+=192;}
    } 
 }
 if (result[0][2]===result[1][1]) {
    if (result[1][1]===result[2][0]) {
        if (result[0][2]===1) {multiplier -= 3; individualCombos[1]-=3;}
        if (result[0][2]===2) {multiplier += 3; individualCombos[2]+=3;}
        if (result[0][2]===3) {multiplier += 12; individualCombos[3]+=12;}
        if (result[0][2]===4) {multiplier += 48; individualCombos[4]+=48;}
        if (result[0][2]===5){multiplier += 192; individualCombos[5]+=192;}
    } 
 }
  //------------------------------------------------winning blackout combinations-------------------------------------------
  if ( (result[0][0]===result[0][1]) && (result[0][1]===result[0][2]) && (result[0][2]===result[1][0]) && (result[1][0]===result[1][1]) && (result[1][1]===result[1][2]) && (result[1][2]===result[2][0]) && (result[2][0]===result[2][1]) && (result[2][1]===result[2][2]) ) {
      if(result[0][0]===1) {multiplier -= 15; alert("Major Loss!!! Multiplier minus 15!");  individualCombos[1] -= 15}
      if(result[0][0]===2) {multiplier += 30; alert("BIG TIME WIN!!! Multiplier plus 30!");  individualCombos[2] += 30}
      if(result[0][0]===3) {multiplier += 300; alert("BIG TIME WIN!!! Multiplier plus 300!");  individualCombos[3] += 300}
      if(result[0][0]===4) {multiplier += 3000; alert("BIG TIME WIN!!! Multiplier plus 3000!");  individualCombos[4] += 3000}
      if(result[0][0]===5) {multiplier += 30000; alert("BIG TIME WIN!!! Multiplier plus 30000!");  individualCombos[5] += 30000}
  }
}
//------------------------------this renders the boardersfor matches-------------------------------
function renderBorders() {
    let lossBorder = "15px solid #FF1654";
    let bigWinBorder = "15px solid #247BA0";
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
    if ((result[0][0]===result[1][1])&&(result[1][1]===result[2][2])) {
        if (result[0][0]===1) {
            image1.style.border = lossBorder;
            image22.style.border = lossBorder;
            image33.style.border = lossBorder;
        } else {
        image1.style.border = bigWinBorder;
        image22.style.border = bigWinBorder;
        image33.style.border = bigWinBorder;}
    };
    if ((result[0][2]===result[1][1])&&(result[1][1]===result[2][0])) {
        if (result[0][2]===1) {
            image3.style.border = lossBorder;
            image22.style.border = lossBorder;
            image31.style.border = lossBorder;
        } else {
        image3.style.border = bigWinBorder;
        image22.style.border = bigWinBorder;
        image31.style.border = bigWinBorder;}
    };
};
//-----------------------------------Reset borders to NONE-----------------------------
function borderReset(){
    imageNodeList.forEach(node=>{node.style.border="none";});
    imageNodeList.forEach(node=>{node.style.backgroundColor="transparent";});

};

function treasureReset(){
    spaceNodeList.forEach(node=>{
        node.setAttribute('src', "images\\treasure.png")
    });
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
    if (totalWinnings>=1000) {
        alert("You win!!!!!");
        init();
    }
}

function renderCombos(){
    combo1.innerHTML = `X${individualCombos[1]}`;
    combo2.innerHTML = `X${individualCombos[2]}`;
    combo3.innerHTML = `X${individualCombos[3]}`;
    combo4.innerHTML = `X${individualCombos[4]}`;
    combo5.innerHTML = `X${individualCombos[5]}`;
};

function resetBoard() {
    winnings=0;
    multiplier = 0;
    individualCombos[1]=0;
    individualCombos[2]=0;
    individualCombos[3]=0;
    individualCombos[4]=0;
    individualCombos[5]=0;
    lock=0;
    targetedSpaces=[filler,filler,filler];
    
};

init();
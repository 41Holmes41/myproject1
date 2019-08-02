/* --------------------variables-------------- */

let result=[];

let winnings;

let totalWinnings=50;

/* ------initialize element variables -------*/

let title = document.querySelector('.title');

let option1 = document.querySelector('.option1');

let option2 = document.querySelector('.option2');

let option3 = document.querySelector('.option3');

let spin = document.querySelector('.spin');

let winningsMessage = document.querySelector('.winnings');

let totalWinningsMessage = document.querySelector('.total-winnings');



/* ------------add event listeners------------------- */
spin.addEventListener('click', function(){
    result = [getResult(), getResult(), getResult()];
    winnings = getCombo(result);
    totalWinnings += winnings;
    totalWinnings -= 2;

    render();
});

/* ---------------------define functions---------------------- */

function render() {
    option1.innerHTML = result[0];
    option2.innerHTML = result[1];
    option3.innerHTML = result[2];
    winningsMessage.innerHTML = `WINNINGS: $${winnings}`;
    totalWinningsMessage.innerHTML = `$${totalWinnings}`;
}

function getResult() {
    let random = Math.random() * 100;

    if ((random>=0)&&(random<=30)) return 1;
    if ((random>30)&&(random<=55)) return 2;
    if ((random>55)&&(random<=75)) return 3;
    if ((random>75)&&(random<=90)) return 4;
    if ((random>90)&&(random<=100)) return 5;
/*     if ((random>50)&&(random<=60)) return 6;
    if ((random>60)&&(random<=70)) return 7;
    if ((random>70)&&(random<=80)) return 8;
    if ((random>80)&&(random<=90)) return 9;
    if ((random>90)&&(random<=100)) return 10; */
}

function getCombo(result) {
    //two matching numbers ------- SMALL WIN
    if ((result[0]=== result[1])||(result[1]===result[2])) {
        if ((result[0] + result[1] === 2)||(result[1]+result[2]===2)) return 2;
        if ((result[0] + result[1] === 4)||(result[1]+result[2]===4)) return 8;
        if ((result[0] + result[1] === 6)||(result[1]+result[2]===6)) return 16;
        if ((result[0] + result[1] === 8)||(result[1]+result[2]===8)) return 32;
        if ((result[0] + result[1] === 10)||(result[1]+result[2]===10)) return 64;

    };
    //three matching numbers
    if ((result[0]=== result[1])&&(result[1]===result[2])) {
        if (result[0]===1) return 9;
        if (result[0]===2) return 24;
        if (result[0]===3) return 81;
        if (result[0]===4) return 192;
        if (result[0]===5) return 375;
    }

    else return 0;
}
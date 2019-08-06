/* --------------------variables-------------- */

let result=[];

let wager=5;

let multiplier=0;

let winnings=0;

let totalWinnings=50;

let pics = {
    1 : 'images\\skull-and-bones.png',
    2 : 'images\\diamond (6).png',
    3 : 'images\\fashion (1).png',
    4 : 'images\\fashion (2).png',
    5 : 'images\\fashion.png'
}

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




/* ------------add event listeners------------------- */
spin.addEventListener('click', function(){
    result=[ [getResult(), getResult(), getResult()], [getResult(), getResult(), getResult()], [getResult(), getResult(), getResult()] ];
    console.log(wagerInput);
    getCombo(result);
    wager= parseInt(wagerInput.value);
    wagerInput.value = "1";
    winnings = winnings +(wager * multiplier);
    
    totalWinnings += winnings;
    totalWinnings -= wager;
    
    console.log(winnings);
   
    

    render();
    winnings=0;
    multiplier = 0;
});

/* document.querySelector('.option1-image').addEventListener('click', function(){
    if (combo2.length < 3) {
    combo2.push(result[0][0]);
    image1.style.border = "10px solid red";
    }
});

document.querySelector('.option2-image').addEventListener('click', function(){
    if (combo2.length < 3) {
    combo2.push(result[0][1]);
    image2.style.border = "10px solid red";
    }
});

document.querySelector('.option3-image').addEventListener('click', function(){
    if (combo2.length < 3) {
    combo2.push(result[0][2]);
    image3.style.border = "10px solid red";
    }
});

document.querySelector('.option21-image').addEventListener('click', function(){
    if (combo2.length < 3) {
    combo2.push(result[1][0]);
    image21.style.border = "10px solid red";
    }
});

document.querySelector('.option22-image').addEventListener('click', function(){
    if (combo2.length < 3) {
    combo2.push(result[1][1]);
    image22.style.border = "10px solid red";
    }
});

document.querySelector('.option23-image').addEventListener('click', function(){
    if (combo2.length < 3) {
    combo2.push(result[1][2]);
    image23.style.border = "10px solid red";
    }
});

document.querySelector('.option31-image').addEventListener('click', function(){
    if (combo2.length < 3) {
    combo2.push(result[2][0]);
    image31.style.border = "10px solid red";
    }
});

document.querySelector('.option32-image').addEventListener('click', function(){
    if (combo2.length < 3) {
    combo2.push(result[2][1]);
    image32.style.border = "10px solid red";
    }
});

document.querySelector('.option33-image').addEventListener('click', function(){
    if (combo2.length < 3) {
    combo2.push(result[2][2]);
    image33.style.border = "10px solid red";
    }
}); */

/* ---------------------define functions---------------------- */

function render() {

    let nodelist=  document.querySelectorAll("img");
    nodelist.forEach(node=>{node.style.border="none";})

/*     option1.innerHTML = `<h3>Slot 1: ${result[0]} </h3>`;
    option2.innerHTML = `<h3>Slot 2</h3>${result[1]}`;
    option3.innerHTML = `<h3>Slot 3</h3>${result[2]}`; */

    image1.src= pics[result[0][0]];
    image2.src=pics[result[0][1]];
    image3.src=pics[result[0][2]];
    image21.src=pics[result[1][0]];
    image22.src=pics[result[1][1]];
    image23.src=pics[result[1][2]];
    image31.src=pics[result[2][0]];
    image32.src=pics[result[2][1]];
    image33.src=pics[result[2][2]];

    //this renders the identifying colors for matches
    if ((result[0][0]===result[0][1])&&(result[0][1]===result[0][2])) {
        if (result[0][0] === 1) {
            image1.style.border = "10px solid red";
            image2.style.border = "10px solid red";
            image3.style.border = "10px solid red";
        } else {
        image1.style.border = "10px solid yellow";
        image2.style.border = "10px solid yellow";
        image3.style.border = "10px solid yellow";}
    };
    if ((result[1][0]===result[1][1])&&(result[1][1]===result[1][2])) {
        if (result[1][0]===1) {
            image21.style.border = "10px solid red";
            image22.style.border = "10px solid red";
            image23.style.border = "10px solid red";
        } else {
        image21.style.border = "10px solid yellow";
        image22.style.border = "10px solid yellow";
        image23.style.border = "10px solid yellow";}
    };
    if ((result[2][0]===result[2][1])&&(result[2][1]===result[2][2])) {
        if (result[2][0]===1){
            image31.style.border = "10px solid red";
            image32.style.border = "10px solid red";
            image33.style.border = "10px solid red";
        } else {
        image31.style.border = "10px solid yellow";
        image32.style.border = "10px solid yellow";
        image33.style.border = "10px solid yellow";}
    };

    if ((result[0][0]===result[1][0])&&(result[1][0]===result[2][0])) {
        if (result[0][0]===1) {
            image1.style.border = "10px solid red";
            image21.style.border = "10px solid red";
            image31.style.border = "10px solid red";
        } else {
        image1.style.border = "10px solid yellow";
        image21.style.border = "10px solid yellow";
        image31.style.border = "10px solid yellow";}
    };
    if ((result[0][1]===result[1][1])&&(result[1][1]===result[2][1])) {
        if (result[0][1]===1){
            image2.style.border = "10px solid red";
            image22.style.border = "10px solid red";
            image32.style.border = "10px solid red";
        } else {
        image2.style.border = "10px solid yellow";
        image22.style.border = "10px solid yellow";
        image32.style.border = "10px solid yellow";}
    };
    if ((result[0][2]===result[1][2])&&(result[1][2]===result[2][2])) {
        if (result[0][2]===1) {
            image3.style.border = "10px solid red";
            image23.style.border = "10px solid red";
            image33.style.border = "10px solid red";
        } else {
        image3.style.border = "10px solid yellow";
        image23.style.border = "10px solid yellow";
        image33.style.border = "10px solid yellow";}
    };

    wagerMessage.innerHTML=`<h3>Wager: $${wager} </h3>`;
    winningsMessage.innerHTML = `Winnings: $${winnings}`;
    totalWinningsMessage.innerHTML = `<h3>Total Winnings: $${totalWinnings}</h3>`;

/*    let nodelist=  document.querySelectorAll("img");
    nodelist.forEach(node=>{
        node.style.border="none";
    }) */
}

function getResult() {
    let random = Math.random() * 100;

    if ((random>=0)&&(random<=70)) return 1;
    if ((random>70)&&(random<=85)) return 2;
    if ((random>85)&&(random<=93)) return 3;
    if ((random>93)&&(random<=97)) return 4;
    if ((random>97)&&(random<=100)) return 5;
/*     if ((random>50)&&(random<=60)) return 6;
    if ((random>60)&&(random<=70)) return 7;
    if ((random>70)&&(random<=80)) return 8;
    if ((random>80)&&(random<=90)) return 9;
    if ((random>90)&&(random<=100)) return 10; */
}

function getCombo(result) {
    //two matching numbers ------- SMALL WIN
/*     if ((result[0][0]=== result[0][1])||(result[0][1]===result[0][2])) {
        if ((result[0][0] + result[0][1] === 2)||(result[0][1]+result[0][2]===2)) return 2;
        if ((result[0][0] + result[0][1] === 4)||(result[0][1]+result[0][2]===4)) return 8;
        if ((result[0][0] + result[0][1] === 6)||(result[0][1]+result[0][2]===6)) return 16;
        if ((result[0][0] + result[0][1] === 8)||(result[0][1]+result[0][2]===8)) return 32;
        if ((result[0][0] + result[0][1] === 10)||(result[0][1]+result[0][2]===10)) return 64;

    };
    //three matching numbers
    if ((result[0][0]=== result[0][1])&&(result[0][1]===result[0][2])) {
        if (result[0][0]===1) return 9;
        if (result[0][0]===2) return 24;
        if (result[0][0]===3) return 81;
        if (result[0][0]===4) return 192;
        if (result[0][0]===5) return 375;
    }
 */

 for (var i=0; i<3; i++) {
    if ( result[i][0] === result[i][1]) {
        if (result[i][1]===result[i][2]) {
            if (result[i][0]===1) winnings -= 1;
            if (result[i][0]===2) multiplier += 3;
            if (result[i][0]===3) multiplier += 12;
            if (result[i][0]===4) multiplier += 48;
            if (result[i][0]===5) multiplier += 192;
        } else {
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
    }
 }

 for (var i=0; i<result.length; i++) {
    if ( result[0][i] === result[1][i]) {
        if (result[1][i]===result[2][i]) {
            if (result[0][i]===1) winnings -= 1;
            if (result[0][i]===2) multiplier += 3;
            if (result[0][i]===3) multiplier += 12;
            if (result[0][i]===4) multiplier += 48;
            if (result[0][i]===5) multiplier += 192;
        } else {
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
    }
 }

}
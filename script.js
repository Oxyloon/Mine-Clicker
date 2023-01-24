// Clicks et le nombre de clicks au total
let clicks = 0;
let clicksTT = 0;

// Blocks et le nombre de blocks au total
let blocks = 0;
let blocksTT = 0;

let bonus = 0;
let bonusclicks = 0;
// Les audios du bonus 2 et 3
let audio1 = new Audio('styles/anvil.mp3');
let audio2 = new Audio('styles/tnt_explosion.mp3');
let audio3 = new Audio('styles/big_tnt_explosion.mp3');

// Variable permettant de lister les différentes images 
let images = ['styles/dirt.png', 'styles/stone.png', 'styles/sandstone.png', 'styles/stonebricks.png', 'styles/deepslate_diamond.png'];

// Initialisation du compteur d'images
let counter = 0;

// Selection de la div ou se trouve l'image 
let img = document.querySelector("main");

function clics() {
    //nombre de clics total
    clicksTT +=1;
    document.getElementById('clicksTT').innerHTML = "Nombre de clics au total : " + clicksTT;
    //passage aux clics par blocs
        clicks +=1;
        document.getElementById('clicks').innerHTML = "Nombre de clics : " + clicks;
                //au bout de 10 clics = 1 block
            if (clicks >= 32) {
                counter ++;
                    blocksTT +=1;
                    blocks +=1;
                    document.getElementById('blocksTT').innerHTML = "Nombre de blocks detruits : " + blocksTT;
                    clicks -=32;
                    document.getElementById("main-image").src=images[counter %5]
                //au bout de 5 bloc detruit = 1 bonus
            } if (blocks >= 5) {
                bonus +=1;
                document.getElementById('bonus').innerHTML = "Pts disponible :  " + bonus;
                blocks -=5;
            }
            if (bonusclicks >=1){
                clicks += bonusclicks;
                console.log(bonusclicks); //affiche dans la console le nombre de bonus de clicks en plus
            }
}

function bonus1() { // +2 a chaque clicks    
    if (bonus >=2) {
            bonus -=2;
            bonusclicks +=1;
                document.getElementById('bonus').innerHTML = "Pts disponible :  " + bonus;
                audio1.play();
    } else {
        alert("Tu n'as pas assez de points bonus !");
    }
}

function bonus2() { // +1 000 blocks detruits
    if (bonus >=5) {
        audio2.play();
            bonus -=5;
            blocksTT +=1000;
                document.getElementById('bonus').innerHTML = "Pts disponible :  " + bonus;
                document.getElementById('blocksTT').innerHTML = "Nombre de blocks detruits : " + blocksTT;
    } else {
        alert("Tu n'as pas assez de points bonus !");
    }
}
function bonus3() { // +10 000 blocks detruits
    if (bonus >=10) {
        audio3.play();
            bonus -=10;
            blocksTT +=10000;
                document.getElementById('bonus').innerHTML = "Pts disponible :  " + bonus;
                document.getElementById('blocksTT').innerHTML = "Nombre de blocks detruits : " + blocksTT;
    } else {
        alert("Tu n'as pas assez de points bonus !");
    }
}

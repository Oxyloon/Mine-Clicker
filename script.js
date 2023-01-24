// Clicks et le nombre de clicks au total
var clicks = 0;
var clicksTT = 0;

// Blocks et le nombre de blocks au total
var blocks = 0;
var blocksTT = 0;

var bonus = 0;
var bonusactive = 0;
// Les audios du bonus 2 et 3
var audio1 = new Audio('styles/anvil.mp3');
var audio2 = new Audio('styles/tnt_explosion.mp3');
var audio3 = new Audio('styles/big_tnt_explosion.mp3');

// Variable permettant de lister les différentes images 
var images = ['styles/dirt.png', 'styles/stone.png', 'styles/sandstone.png', 'styles/stonebricks.png', 'styles/deepslate_diamond.png'];

// Initialisation du compteur d'images
var counter = 0;

// Selection de la div ou se trouve l'image 
var img = document.querySelector("main");

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
            if (bonusactive >=1){
                console.log("Le bonus +2 est activé ")
                clicks +=1;
            }
}

function bonus1() { // +2 a chaque clicks    
    if (bonus >=2) {
            bonus -=2;
                document.getElementById('bonus').innerHTML = "Pts disponible :  " + bonus;
                audio1.play();
                bonusactive +=1;
                console.log("Le nombre de bonus actif est de : " + bonusactive);
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

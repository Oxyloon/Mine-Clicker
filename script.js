var clicks = 0;
var clicksTT = 0;
var blocks = 0;
var blocksTT = 0;
var bonus = 0;

function clics() {
    //nombre de clics total
    clicksTT +=1;
    document.getElementById('clicksTT').innerHTML = "Nombre de clics au total : " + clicksTT;
    //passage aux clics par blocs
        clicks +=1;
        document.getElementById('clicks').innerHTML = "Nombre de clics : " + clicks;
                //au bout de 10 clics = 1 block
            if (clicks == 10) {
                blocksTT +=1;
                blocks +=1;
                document.getElementById('blocksTT').innerHTML = "Nombre de blocks detruits : " + blocksTT;
                clicks -=10;
                //au bout de 5 bloc detruit = 1 bonus
            } if (blocks == 5) {
                bonus +=1;
                document.getElementById('bonus').innerHTML = "Pts disponible :  " + bonus;
                blocks -=5;
            }
}

function bonus1() { // x2 a chaque clics
    if (bonus >=2) {
        bonus -=2;
        clicks *=2;
        document.getElementById('bonus').innerHTML = "Pts disponible :  " + bonus;
    } else {
        alert("Tu n'as pas assez de points bonus !");
    }
}
function bonus2() { // +1 000 blocks detruits
    if (bonus >=5) {
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
        bonus -=10;
        blocksTT +=10000;
        document.getElementById('bonus').innerHTML = "Pts disponible :  " + bonus;
        document.getElementById('blocksTT').innerHTML = "Nombre de blocks detruits : " + blocksTT;
    } else {
        alert("Tu n'as pas assez de points bonus !");
    }
}
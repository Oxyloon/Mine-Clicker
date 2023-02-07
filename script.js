let clicks = 0;
let clicksTotal = 0;
let blocks = 0;
let blocksTotal = 0;
let bonus = 0;
let bonusclicks = 0;
let clicksbonus = 1;
let counter = 0;

let audio1 = new Audio('styles/anvil.mp3');
let audio2 = new Audio('styles/tnt_explosion.mp3');
let audio3 = new Audio('styles/big_tnt_explosion.mp3');

let images = ['styles/dirt.png', 'styles/stone.png', 'styles/sandstone.png', 'styles/stonebricks.png', 'styles/deepslate_diamond.png'];
let img = document.querySelector("main");




function clics() {
    clicksTotal +=1;
    document.getElementById('clicksTotal').innerHTML = "Nombre de clics au total : " + clicksTotal;
        clicks +=1;
        document.getElementById('clicks').innerHTML = "Nombre de clics : " + clicks;
            
        if (clicks >= 32) 
        {
        counter ++;
        blocksTotal +=1;
        blocks +=1;
            document.getElementById('blocksTotal').innerHTML = "Nombre de blocks detruits : " + blocksTotal;
        clicks =0;
            document.getElementById("main-image").src=images[counter %5]
        } 

        if (blocks >= 5) 
        {
        bonus +=1;
            document.getElementById('bonus').innerHTML = "Pts disponible :  " + bonus;
        blocks -=5;
        } 

        if (bonusclicks >=1)
        {
        clicks += bonusclicks;
        }
}




function bonus1() { 
   
    if (bonus >=2) {
            if (clicksbonus >= 32){
                alert("Tu es au maximum des améliorations !");
            } else {
                bonus -=2;
                bonusclicks +=1;
                clicksbonus +=1;
                    document.getElementById('bonus').innerHTML = "Pts disponible :  " + bonus;
                    document.getElementById('clicksbonus').innerHTML = "Bonus actuel : +" + clicksbonus;
                    audio1.play();
            }            
        } else {
            alert("Tu n'as pas assez de points bonus !");
    }
}




function bonus2() {
    if (bonus >=5) {
        audio2.play();
            bonus -=5;
            blocksTotal +=1000;
                document.getElementById('bonus').innerHTML = "Pts disponible :  " + bonus;
                document.getElementById('blocksTotal').innerHTML = "Nombre de blocks detruits : " + blocksTotal;
    } else {
        alert("Tu n'as pas assez de points bonus !");
    }
}




function bonus3() {
    if (bonus >=10) {
        audio3.play();
            bonus -=10;
            blocksTotal +=10000;
                document.getElementById('bonus').innerHTML = "Pts disponible :  " + bonus;
                document.getElementById('blocksTotal').innerHTML = "Nombre de blocks detruits : " + blocksTotal;
    } else {
        alert("Tu n'as pas assez de points bonus !");
    }
}

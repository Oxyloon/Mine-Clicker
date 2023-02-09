let clicks = getFromStorage("clicks");
let clicksTotal = getFromStorage("clicksTotal");
let blocks = 0;
let blocksTotal = getFromStorage("blocksTotal");
let bonus = getFromStorage("bonus");
let bonusclicks = 0;
let clicksAdd = getFromStorage("clicksAdd");


document.getElementById('clics').addEventListener('click',clics);
document.getElementById('bonus1').addEventListener('click',bonus1);
document.getElementById('bonus2').addEventListener('click',bonus2);
document.getElementById('bonus3').addEventListener('click',bonus3);
document.getElementById('ResetLocalStorage').addEventListener('click',ResetLocalStorage);


document.getElementById('clicks').innerHTML = "Nombre de clics : " + clicks;
document.getElementById('clicksTotal').innerHTML = "Nombre de clics au total : " + clicksTotal;
document.getElementById('blocksTotal').innerHTML = "Nombre de blocks detruits : " + blocksTotal;
document.getElementById('bonus').innerHTML = "Pts disponible : " + bonus;
document.getElementById('clicksAdd').innerHTML = "Bonus actuel : +" + clicksAdd;


function clics() {
    clicksTotal +=1;
    document.getElementById('clicksTotal').innerHTML = "Nombre de clics au total : " + clicksTotal;
        clicks = clicks+=1 + clicksAdd;
        document.getElementById('clicks').innerHTML = "Nombre de clics : " + clicks;
            
        if (clicks >= 32) 
        {
        let images = ['styles/dirt.png', 'styles/stone.png', 'styles/sandstone.png', 'styles/stonebricks.png', 'styles/deepslate_diamond.png'];
        let img = document.querySelector("main");
        let counter = 0;
            counter ++;
            blocksTotal += 1;
            blocks += 1;
            clicks = 0;
                document.getElementById('blocksTotal').innerHTML = "Nombre de blocks detruits : " + blocksTotal;
                document.getElementById("clics").src=images[counter %5];
        }

        if (blocks >= 5) {
            bonus +=1;
                document.getElementById('bonus').innerHTML = "Pts disponible :  " + bonus;
            blocks -=5;
        }
        
        if (bonusclicks >=1) {
            clicks += bonusclicks;
        }
localStorage.setItem('clicks',clicks);
localStorage.setItem('clicksTotal',clicksTotal);
localStorage.setItem('blocksTotal',blocksTotal);
localStorage.setItem('bonus',bonus);
localStorage.setItem('clicksAdd',clicksAdd);
}


if (bonus >=2) {
    let img = document.createElement("img");
        img.src = "/styles/Enchanted_Diamond_Pickaxe.webp";
    let div = document.getElementById("bonus1");
    div.appendChild(img);
    } else {
        let img = document.createElement("img");
            img.src = "/styles/BarrierNew.png";
        let div = document.getElementById("bonus1");
        div.appendChild(img);
}

if (bonus >=5) {
    let img = document.createElement("img");
        img.src = "/styles/wither.png";
    let div = document.getElementById("bonus2");
    div.appendChild(img);
    } else {
        let img = document.createElement("img");
            img.src = "/styles/BarrierNew.png";
        let div = document.getElementById("bonus2");
        div.appendChild(img);
}

if (bonus >=10) {
    let img = document.createElement("img");
        img.src = "/styles/herobrine.png";
    let div = document.getElementById("bonus3");
    div.appendChild(img);
    } else {
        let img = document.createElement("img");
            img.src = "/styles/BarrierNew.png";
        let div = document.getElementById("bonus3");
        div.appendChild(img);
}

function bonus1() {
let audio1 = new Audio('styles/anvil.mp3'); 
    if (bonus >=2) {
            if (clicksAdd >= 9){
                alert("Tu es au maximum des améliorations !");
            } else {
                audio1.play();
                    bonus -=2;
                    clicksAdd +=1;
                        document.getElementById('bonus').innerHTML = "Pts disponible :  " + bonus;
                        document.getElementById('clicksAdd').innerHTML = "Bonus actuel : +" + clicksAdd;
                    
            }            
        } else {
            alert("Tu n'as pas assez de points bonus !");
    }
}

function bonus2() {
let audio2 = new Audio('styles/tnt_explosion.mp3');
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
let audio3 = new Audio('styles/big_tnt_explosion.mp3');
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


function getFromStorage(name){
    if (localStorage.getItem(name) === null){
        return 0;
    } else {
        return Number(localStorage.getItem(name));
    }
}

function ResetLocalStorage() {
let audio4 = new Audio('styles/lava_destroy.mp3');
    localStorage.clear();
    audio4.play();
        setTimeout(function(){
            window.location.reload();
        }, 3000);  
}
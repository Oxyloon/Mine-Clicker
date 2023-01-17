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
            //au bout de 32 clics = 1 bloc detruit
            if (clicks == 5) {
                blocksTT +=1;
                blocks +=1;
                document.getElementById('blocksTT').innerHTML = "Nombre de blocks detruits : " + blocksTT;
                clicks -=5;
                //au bout de 10 bloc detruit = 1 bonus
            } if (blocks == 10) {
                bonus +=1;
                document.getElementById('bonus').innerHTML = "Nombre de bonus : " + bonus;
                blocks -=10;
            }
}
    let coins = 0;
    let cenaVozik = 5;
    let cenaMarket = 25;
    let cenaClick = 5;
    let vydelek = 0;
    let c = 1;
    let b = 0;
    let a = 0;
    let random;
    let click = 1;

    function pridej(){

        coins = coins + click;
        document.getElementById("coin").innerHTML = coins + " SUS";
            
    }

    function klik() {
        if (coins > cenaClick - 1) {
            
            c++;
            click++;
            coins = coins - cenaClick;
            cenaClick = cenaClick + cenaClick/5
            cenaClick = Math.round(cenaClick);
            document.getElementById("cenaClick").innerHTML = cenaClick + " SUS";   
            document.getElementById("coin").innerHTML = coins + " SUS"; 
            document.getElementById("kolikratClick").innerHTML = c + " počet Kurzorů";
            document.getElementById("vydelek").innerHTML = vydelek + " SUS/s";
            
        }
    }

    function vozik() {
        if (coins > cenaVozik - 1) {
            
            b++;
            coins = coins - cenaVozik;
            cenaVozik = cenaVozik + cenaVozik/5
            vydelek = vydelek + 1;
            cenaVozik = Math.round(cenaVozik);
            document.getElementById("cenaVozik").innerHTML = cenaVozik + " SUS";   
            document.getElementById("coin").innerHTML = coins + " SUS"; 
            document.getElementById("kolikratVozik").innerHTML = b + " počet Vozíků";
            document.getElementById("vydelek").innerHTML = vydelek + " SUS/s";

            
        }
    }


    function market() {
        if (coins > cenaMarket - 1) {
            
            a++;
            coins = coins - cenaMarket;
            cenaMarket = cenaMarket + cenaMarket/5
            vydelek = vydelek + 5;
            cenaMarket = Math.round(cenaMarket);
            document.getElementById("cenaMarket").innerHTML = cenaMarket + " SUS";
            document.getElementById("coin").innerHTML = coins + " SUS";      
            document.getElementById("kolikratMarket").innerHTML = a + " počet Marketů";
            document.getElementById("vydelek").innerHTML = vydelek + " SUS/s";

            
        }
    }
    window.setInterval(function () {
        
        random = Math.floor(Math.random() * 100);
        if (random < 1) {
            coins = coins + 1000;
            document.getElementById("deda").style.display = "block";
        }
        else{
            document.getElementById("deda").style.display = "none";
        }
        coins = coins + vydelek;
        coins = Math.round(coins);
        document.getElementById("coin").innerHTML = coins + " SUS";
        if (coins >= 10000) {
            document.getElementById("gameOver").style.display = "block";
        }
        

    }, 1000);




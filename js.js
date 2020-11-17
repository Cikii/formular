console.log("Funguje ti to debile haha");


let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let v = 0;
let strana =0;
let stra=0;
let strb=0;
let strc=0;

let delka = document.getElementById("delka");
let vyska = document.getElementById("vyska");

let cudl1 = document.getElementById("cudlik1");
let cudl2 = document.getElementById("cudlik2");

let vysledek1 = document.getElementById("vysledeks");
let vysledek2 = document.getElementById("vysledeko");

cudl1.addEventListener('click', function(){
   v = vyska.value; 
   strana = delka.value;
   vysledek1.innerHTML=obsah(v,strana);
   console.log(vysledek1.value);
})

cudl2.addEventListener('click', function(){
    stra = parseInt(a.value) ;
    strb = parseInt(b.value) ;
    strc = parseInt( c.value);
    vysledek2.innerHTML=obvod(stra,strb,strc);
})

function obsah(delka,vyska){
   return delka*vyska/2;
}

function obvod(a,b,c){
    return a+b+c;
}
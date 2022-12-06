let weight = prompt("Baba testsúlya (g)") / 6;
let feed = prompt("Hányszor akarod etetni?");
let ate = prompt("Mennyit evett? (ml)");

let final = weight * feed;
let left = 0;

if(ate < weight){
    left = weight-ate;
    feed -= 1;
    final = (weight-left)*feed;
}else{
    feed -= 1;
}

document.write(`${final} ml-t kell ma még ennie, ${feed} etetés alatt`);
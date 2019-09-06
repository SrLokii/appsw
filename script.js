
var foods=[{nome:"BountyHunterWind",
        midWind:15,
        lowWind:10,
        midMagic:10,
        lowMagic:5,
    },{nome:"teste"}];
let VLupinus = document.getElementById("Lupinus");
let BountyHunteWind = document.getElementById("bhw");
let HighElementalWind = document.getElementById("hew");
let GriffonFire = document.getElementById("gff");
let HellhoundWater = document.getElementById("hhw");
let buttonCalc = document.getElementById("calc");

let lowMagic = document.getElementById("lowmagic");
let midMagic = document.getElementById("midmagic");
let hghMagic = document.getElementById("hghmagic");


console.log(foods);
foods.map((item)=>{
    if(item.nome == "BountyHunterWind"){
        console.log(item.midMagic);
        console.log(item.midWind);
        console.log(item.lowMagic);
        console.log(item.lowWind);
    }
})
function inserirValor(){
    BountyHunteWind.innerHTML = VLupinus.value;
    BountyHunteWind.value = VLupinus.value;
    HighElementalWind.innerHTML = VLupinus.value;
    HighElementalWind.value = VLupinus.value;
    GriffonFire.innerHTML = VLupinus.value;
    GriffonFire.value = VLupinus.value;
    HellhoundWater.innerHTML = VLupinus.value;
    HellhoundWater.value = VLupinus.value;
}

function calculaEssenceMagic(){
    let QntLowMagic = (BountyHunteWind.value*5)+(HighElementalWind.value*5)+(GriffonFire.value*5)+(HellhoundWater.value*15);
    lowMagic.innerHTML = QntLowMagic;
    let QntMidMagic = (BountyHunteWind.value*10)+(HighElementalWind.value*10)+(GriffonFire.value*10)+(HellhoundWater.value*0);
    midMagic.innerHTML = QntMidMagic;
}
function calculaEssenceWind(){
    let QntLowWind = (BountyHunteWind.value*5)+(HighElementalWind.value*5)+(GriffonFire.value*5)+(HellhoundWater.value*15);
    lowMagic.innerHTML = QntLowWind;
    let QntMidWind = (BountyHunteWind.value*10)+(HighElementalWind.value*10)+(GriffonFire.value*10)+(HellhoundWater.value*0);
    midMagic.innerHTML = QntMidWind;
}


function Calcula(){
    alert(BountyHunteWind.value);
}

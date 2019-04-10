// ========== DINOSAURS ========== //
var carn = ["imgs/dinosaurs/food/btn-food-01.svg", "imgs/dinosaurs/food/btn-food-02.svg", "imgs/dinosaurs/food/btn-food-03.svg"];
var herb = []

var tyrannosaurus = {
    food: carn,
    src: ["../imgs/dinosaurs/egg/tyrannosaurus.svg", "../imgs/dinosaurs/baby/tyrannosaurus.svg", "../imgs/dinosaurs/adult/tyrannosaurus.svg"],
    info:"Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator:"",
    size:"100"
}

var dinosaurs = [tyrannosaurus]

// ===== STATE VARS ===== //

var pkg = {
    dino: tyrannosaurus,
    src: [0],
    info:"",
    food:"",
    scale:""
};


// ===== PROXY SETTINGS ===== //

var handler = {
    set:function(obj, props, value){
        //What to handle

        if(props == "dino"){
            SelectDinoUI(value);
        }

        if(props == "food"){
            ShowFoodUI(value);
        }

        if(props == "info"){
            ShowInfoUI(value);
        }
    }
}


var prox = new Proxy(pkg, handler);


// ===== CHANGE STATE FUNCTIONS ===== //

function ExploreButton(){
    window.location.href = "./map.html";
}

function CretaButton(){
    window.location.href = "./map-2.html";
}

function SelectDino(el){
    pkg.dino = el.id;
    prox.dino = pkg.dino;
}

function ShowFood(){
    pkg.food = pkg.dino.food;
    prox.food = pkg.food;
}

function ShowInfo(){
    pkg.info = pkg.dino.info;
    prox.info = pkg.info;
}

// ==== CHANGE UI FUNCTIONS ===== //

function SelectDinoUI(value){
    window.location.href = "./dino.html";
    logo__img.src = value.src[0];
}

function ShowInfoUI(value){
  if(document.querySelector("#infoBox").style.backgroundColor == "yellowgreen"){
  document.querySelector("#infoBox").style.backgroundColor = "";
  document.querySelector("#infoBox").innerHTML = "";
  } else {
  document.querySelector("#infoBox").style.backgroundColor = "yellowgreen";
  document.querySelector("#infoBox").innerHTML = value;
  }

  if(document.querySelector(".menu__food").style.display == "grid"){
  document.querySelector(".menu__food").style.display = "none";
  }

}

function ShowFoodUI(value){

    if(document.querySelector(".menu__food").style.display == "none"){
    document.querySelector(".menu__food").style.display = "grid";
    } else {
    document.querySelector(".menu__food").style.display = "none";
    }
    document.querySelector("#food1").src = value[0];
    document.querySelector("#food2").src = value[1];
    document.querySelector("#food3").src = value[2];

    if(document.querySelector("#infoBox").style.backgroundColor == "yellowgreen"){
    document.querySelector("#infoBox").style.backgroundColor = "";
    document.querySelector("#infoBox").innerHTML = "";
    }
}

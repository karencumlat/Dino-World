// ========== DINOSAURS ========== //
var herb = ["imgs/dinosaurs/food/btn-food-01.svg", "imgs/dinosaurs/food/btn-food-02.svg", "imgs/dinosaurs/food/btn-food-03.svg"];
var carn = []

var tyrannosaurus = {
    food: herb,
    info:"Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator:"",
    size:"100"
}

var dinosaurs = [tyrannosaurus]

// ===== STATE VARS ===== //

var pkg = {
    dino:"tyrannosaurus",
    src: "",
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
    pkg.dino = el.src;
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
    logo__img.src = value;
}

function ShowInfoUI(value){
    document.querySelector("#infoBox").style.backgroundColor = "yellowgreen";
    document.querySelector("#infoBox").innerHTML = value;
    
}

function ShowFoodUI(value){
    
    if(document.querySelector(".menu__food").style.display == "none"){
    document.querySelector(".menu__food").style.display = "grid";
    } else {
    document.querySelector(".menu__food").style.display = "none";
    }
    document.querySelector("#food1").src = herb[0];
    document.querySelector("#food2").src = herb[1];
    document.querySelector("#food3").src = herb[2];
}

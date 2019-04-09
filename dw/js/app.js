// ========== DINOSAURS ========== //

var Tyrannosaurus = {
    food1:"imgs/dinosaurs/food/btn-food-01.svg",
    food2:"imgs/dinosaurs/food/btn-food-02.svg",
    food3:"imgs/dinosaurs/food/btn-food-03.svg",
    info:"Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator:"",
    size:"100"
}

var dinosaurs = [Tyrannosaurus]

// ===== STATE VARS ===== //

var pkg = {
    dino:"",
    food1:"",
    food2:"",
    food3:"",
    scale:""
};


// ===== PROXY SETTINGS ===== //

var handler = {
    set:function(obj, props, value){
        //What to handle
        
        if(props == "dino"){
            SelectDinoUI(value);
        }
        
        if(props == "food1"){
            ShowFood1UI(value);
        }
        if(props == "food2"){
            ShowFood2UI(value);
        }
        if(props == "food3"){
            ShowFood3UI(value);
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

function ShowFood1(){
    pkg.food1 = Tyrannosaurus.food1;
    prox.food1 = pkg.food1;
}

function ShowFood2(){
    pkg.food2 = Tyrannosaurus.food2;
    prox.food2 = pkg.food2;
}

function ShowFood3(){
    pkg.food3 = Tyrannosaurus.food3;
    prox.food3 = pkg.food3;
}

// ==== CHANGE UI FUNCTIONS ===== //

function SelectDinoUI(value){
    window.location.href = "./dino.html";
    logo__img.src = value;
}

function ShowFood1UI(value){
    document.querySelector(".menu__food").style.display = "grid";
    document.querySelector("#food1").src = value;
}

function ShowFood2UI(value){
    document.querySelector(".menu__food").style.display = "grid";
    document.querySelector("#food2").src = value;
}

function ShowFood3UI(value){
    document.querySelector(".menu__food").style.display = "grid";
    document.querySelector("#food3").src = value;
}


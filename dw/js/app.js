// ========== DINOSAURS ========== //
var carn = ["imgs/dinosaurs/food/btn-food-01.svg", "imgs/dinosaurs/food/btn-food-02.svg", "imgs/dinosaurs/food/btn-food-03.svg"];
var herb = [];
var omni = [];
var pesc = [];

var dinoImg = document.querySelector("#dinoImage"),
    dinoH = document.querySelector("#dinoName");

var tyrannosaurus = {
    food: carn,
    src: ["../imgs/dinosaurs/egg/tyrannosaurus.svg", "../imgs/dinosaurs/baby/tyrannosaurus.svg", "../imgs/dinosaurs/adult/tyrannosaurus.svg"],
    info:"Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator:"",
    scale:"100",
    background:""
}

var mosasaurus = {
    food: pesc,
    src: ["../imgs/dinosaurs/egg/mosasaurus.svg", "../imgs/dinosaurs/baby/mosasaurus.svg", "../imgs/dinosaurs/adult/mosasaurus.svg"],
    info:"Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator:"",
    scale:"100",
    background:""
}

var majungasaurus = {
    food: carn,
    src: ["../imgs/dinosaurs/egg/majungasaurus.svg", "../imgs/dinosaurs/baby/majungasaurus.svg", "../imgs/dinosaurs/adult/majungasaurus.svg"],
    info:"Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator:"",
    scale:"100",
    background:""
}

var spinosaurus = {
    food: pesc,
    src: ["../imgs/dinosaurs/egg/spinosaurus.svg", "../imgs/dinosaurs/baby/spinosaurus.svg", "../imgs/dinosaurs/adult/spinosaurus.svg"],
    info:"Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator:"",
    scale:"100",
    background:""
}

var ouranosaurus = {
    food: herb,
    src: ["../imgs/dinosaurs/egg/ouranosaurus.svg", "../imgs/dinosaurs/baby/ouranosaurus.svg", "../imgs/dinosaurs/adult/ouranosaurus.svg"],
    info:"Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator:"",
    scale:"100",
    background:""
}

var khaan = {
    food: omni,
    src: ["../imgs/dinosaurs/egg/khaan.svg", "../imgs/dinosaurs/baby/khaan.svg", "../imgs/dinosaurs/adult/khaan.svg"],
    info:"Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator:"",
    scale:"100",
    background:""
}

var isisaurus = {
    food: herb,
    src: ["../imgs/dinosaurs/egg/isisaurus.svg", "../imgs/dinosaurs/baby/isisaurus.svg", "../imgs/dinosaurs/adult/isisaurus.svg"],
    info:"Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator:"",
    scale:"100",
    background:""
}

var oviraptor = {
    food: omni,
    src: ["../imgs/dinosaurs/egg/khaan.svg", "../imgs/dinosaurs/baby/khaan.svg", "../imgs/dinosaurs/adult/khaan.svg"],
    info:"Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator:"",
    scale:"100",
    background:""
}

var ampelosaurus = {
    food: herb,
    src: ["../imgs/dinosaurs/egg/ampelosaurus.svg", "../imgs/dinosaurs/baby/ampelosaurus.svg", "../imgs/dinosaurs/adult/ampelosaurus.svg"],
    info:"Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator:"",
    scale:"100",
    background:""
}

var bactrosaurus = {
    food: herb,
    src: ["../imgs/dinosaurs/egg/bactrosaurus.svg", "../imgs/dinosaurs/baby/bactrosaurus.svg", "../imgs/dinosaurs/adult/bactrosaurus.svg"],
    info:"Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator:"",
    scale:"100",
    background:""
}

var velociraptor = {
    food: carn,
    src: ["../imgs/dinosaurs/egg/velociraptor.svg", "../imgs/dinosaurs/baby/velociraptor.svg", "../imgs/dinosaurs/adult/velociraptor.svg"],
    info:"Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator:"",
    scale:"100",
    background:""
}

var ankylosaurus = {
    food: herb,
    src: ["../imgs/dinosaurs/egg/ankylosaurus.svg", "../imgs/dinosaurs/baby/ankylosaurus.svg", "../imgs/dinosaurs/adult/ankylosaurus.svg"],
    info:"Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator:"",
    scale:"100",
    background:""
}

var pachycephalosaurus = {
    food: herb,
    src: ["../imgs/dinosaurs/egg/pachycephalosaurus.svg", "../imgs/dinosaurs/baby/pachycephalosaurus.svg", "../imgs/dinosaurs/adult/pachycephalosaurus.svg"],
    info:"Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator:"",
    scale:"100",
    background:""
}

var chasmosaurus = {
    food: herb,
    src: ["../imgs/dinosaurs/egg/chasmosaurus.svg", "../imgs/dinosaurs/baby/chasmosaurus.svg", "../imgs/dinosaurs/adult/chasmosaurus.svg"],
    info:"Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator:"",
    scale:"100",
    background:""
}

var bambiraptor = {
    food: carn,
    src: ["../imgs/dinosaurs/egg/bambiraptor.svg", "../imgs/dinosaurs/baby/bambiraptor.svg", "../imgs/dinosaurs/adult/bambiraptor.svg"],
    info:"Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator:"",
    scale:"100",
    background:""
}

var parasaurolophus = {
    food: herb,
    src: ["../imgs/dinosaurs/egg/parasaurolophus.svg", "../imgs/dinosaurs/baby/parasaurolophus.svg", "../imgs/dinosaurs/adult/parasaurolophus.svg"],
    info:"Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator:"",
    scale:"100",
    background:""
}

var triceratops = {
    food: herb,
    src: ["../imgs/dinosaurs/egg/triceratops.svg", "../imgs/dinosaurs/baby/triceratops.svg", "../imgs/dinosaurs/adult/triceratops.svg"],
    info:"Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator:"",
    scale:"100",
    background:""
}

var antarctosaurus = {
    food: herb,
    src: ["../imgs/dinosaurs/egg/antarctosaurus.svg", "../imgs/dinosaurs/baby/antarctosaurus.svg", "../imgs/dinosaurs/adult/antarctosaurus.svg"],
    info:"Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator:"",
    scale:"100",
    background:""
}

var carnotaurus = {
    food: carn,
    src: ["../imgs/dinosaurs/egg/carnotaurus.svg", "../imgs/dinosaurs/baby/carnotaurus.svg", "../imgs/dinosaurs/adult/carnotaurus.svg"],
    info:"Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator:"",
    scale:"100",
    background:""
}

var alvarezsaurus = {
    food: carn,
    src: ["../imgs/dinosaurs/egg/alvarezsaurus.svg", "../imgs/dinosaurs/baby/alvarezsaurus.svg", "../imgs/dinosaurs/adult/alvarezsaurus.svg"],
    info:"Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator:"",
    scale:"100",
    background:""
}

var irritator = {
    food: pesc,
    src: ["../imgs/dinosaurs/egg/irritator.svg", "../imgs/dinosaurs/baby/irritator.svg", "../imgs/dinosaurs/adult/irritator.svg"],
    info:"Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator:"",
    scale:"100",
    background:""
}

var stegasaurus = {
    food: herb,
    src: ["../imgs/dinosaurs/egg/stegasaurus.svg", "../imgs/dinosaurs/baby/stegasaurus.svg", "../imgs/dinosaurs/adult/stegasaurus.svg"],
    info:"Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator:"",
    scale:"100",
    background:""
}

var camptosaurus = {
    food: herb,
    src: ["../imgs/dinosaurs/egg/camptosaurus.svg", "../imgs/dinosaurs/baby/camptosaurus.svg", "../imgs/dinosaurs/adult/camptosaurus.svg"],
    info:"Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator:"",
    scale:"100",
    background:""
}

var hesperosaurus = {
    food: herb,
    src: ["../imgs/dinosaurs/egg/hesperosaurus.svg", "../imgs/dinosaurs/baby/hesperosaurus.svg", "../imgs/dinosaurs/adult/hesperosaurus.svg"],
    info:"Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator:"",
    scale:"100",
    background:""
}

var brachiosaurus = {
    food: herb,
    src: ["../imgs/dinosaurs/egg/brachiosaurus.svg", "../imgs/dinosaurs/baby/brachiosaurus.svg", "../imgs/dinosaurs/adult/brachiosaurus.svg"],
    info:"Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator:"",
    scale:"100",
    background:""
}

var pterodactyl = {
    food: pesc,
    src: ["../imgs/dinosaurs/egg/pterodactyl.svg", "../imgs/dinosaurs/baby/pterodactyl.svg", "../imgs/dinosaurs/adult/pterodactyl.svg"],
    info:"Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator:"",
    scale:"100",
    background:""
}

var plesiosaurus = {
    food: pesc,
    src: ["../imgs/dinosaurs/egg/plesiosaurus.svg", "../imgs/dinosaurs/baby/plesiosaurus.svg", "../imgs/dinosaurs/adult/plesiosaurus.svg"],
    info:"Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator:"",
    scale:"100",
    background:""
}

var chindesaurus = {
    food: carn,
    src: ["../imgs/dinosaurs/egg/chindesaurus.svg", "../imgs/dinosaurs/baby/chindesaurus.svg", "../imgs/dinosaurs/adult/chindesaurus.svg"],
    info:"Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator:"",
    scale:"100",
    background:""
}

var eoraptor = {
    food: omni,
    src: ["../imgs/dinosaurs/egg/eoraptor.svg", "../imgs/dinosaurs/baby/eoraptor.svg", "../imgs/dinosaurs/adult/eoraptor.svg"],
    info:"Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator:"",
    scale:"100",
    background:""
}

var coelophysis = {
    food: carn,
    src: ["../imgs/dinosaurs/egg/coelophysis.svg", "../imgs/dinosaurs/baby/coelophysis.svg", "../imgs/dinosaurs/adult/coelophysis.svg"],
    info:"Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator:"",
    scale:"100",
    background:""
}

var guaibasaurus = {
    food: omni,
    src: ["../imgs/dinosaurs/egg/guaibasaurus.svg", "../imgs/dinosaurs/baby/guaibasaurus.svg", "../imgs/dinosaurs/adult/guaibasaurus.svg"],
    info:"Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator:"",
    scale:"100",
    background:""
}

var coloradisaurus = {
    food: herb,
    src: ["../imgs/dinosaurs/egg/coloradisaurus.svg", "../imgs/dinosaurs/baby/coloradisaurus.svg", "../imgs/dinosaurs/adult/coloradisaurus.svg"],
    info:"Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator:"",
    scale:"100",
    background:""
}

// ===== STATE VARS ===== //

var pkg = {
    dino: "",
    src: "",
    info:"",
    food:"",
    scale:"",
    background:"",
    header:""
};


// ===== PROXY SETTINGS ===== //

var handler = {
    set:function(obj, props, value){
        //What to handle

        if(props == "dino"){
            SelectDinoUI(value);
            ChangeHeader(value);
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

function SelectContinent(el){
  var continent = el.id,
  selCont = "./c" + continent + ".html";
  window.location.href = selCont;
}

function SelectDino(el){
    localStorage.setItem("DinoName", el.id)
    pkg.dino = localStorage.getItem("DinoName");
    prox.dino = pkg.dino;

    pkg.src = localStorage.getItem("DinoName") + ".src[0]";
    prox.src = pkg.src;
}

function ChangeHeader(){
  pkg.header = localStorage.getItem("DinoName");
  prox.header = pkg.header;
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
    // dinoImg.src = pkg.src;
    // dinoH.innerHTML = localStorage.getItem("DinoName");

}

function ChangeHeaderUI(value){
  dinoH.innerHTML = value;
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

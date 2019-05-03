// ===== STATE VARS ===== //

// dino diets
var carn = ["../imgs/dinosaurs/food/btn-food-01.svg", "../imgs/dinosaurs/food/btn-food-02.svg", "../imgs/dinosaurs/food/btn-food-03.svg"];
var herb = ["../imgs/dinosaurs/food/btn-food-04.svg", "../imgs/dinosaurs/food/btn-food-05.svg", "../imgs/dinosaurs/food/btn-food-06.svg"];
var omni = ["../imgs/dinosaurs/food/btn-food-01.svg", "../imgs/dinosaurs/food/btn-food-07.svg", "../imgs/dinosaurs/food/btn-food-08.svg"];
var pesc = ["../imgs/dinosaurs/food/btn-food-12.svg", "../imgs/dinosaurs/food/btn-food-11.svg", "../imgs/dinosaurs/food/btn-food-08.svg"];

var dinoImg = document.querySelector("#dinoImage"),
  // dinoH is the header appearing above the dino's in the dino.html
  dinoH = document.querySelector("#dinoName"),
  foodBut1 = document.querySelector("#food1"),
  foodBut2 = document.querySelector("#food2"),
  // buttonId is to store the id of the food buttons when clicked
  buttonId,
  // dinoName is for storing the sleected dino's name as a reference for said dinos specific properties
  dinoName = localStorage.getItem("DinoName"),
  pgmn = document.querySelector(".page__main"),
  // Reference to grab food icon
  foodref,
  foodElem,
  bg = document.querySelector(".page");

// var dinosaurs = [tyrannosaurus, mosasaurus, majungasaurus, spinosaurus, ouranosaurus, khaan, isisaurus, oviraptor, ampelosaurus, bactrosaurus, velociraptor, ankylosaurus, pachycephalosaurus, chasmosaurus, bambiraptor, parasaurolophus, triceratops, antarctosaurus, carnotaurus, alvarezsaurus, irritator, stegasaurus, camptosaurus, hesperosaurus, brachiosaurus, pterodactyl, plesiosaurus, chindesaurus, eoraptor, coelophysis, guaibasaurus, coloradisaurus];

var pkg = {
  dino: "",
  tyrannosaurus: {
    food: carn,
    src: ["../imgs/dinosaurs/egg/tyrannosaurus.svg", "../imgs/dinosaurs/baby/tyrannosaurus.svg", "../imgs/dinosaurs/adult/tyrannosaurus.svg"],
    info: "Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator: "",
    scale: "1",
    background: ""
  },

  mosasaurus: {
    food: pesc,
    src: ["../imgs/dinosaurs/egg/mosasaurus.svg", "../imgs/dinosaurs/baby/mosasaurus.svg", "../imgs/dinosaurs/adult/mosasaurus.svg"],
    info: "The mosasaurus was an aquatic dinosaur that is said to be about 50-foot long! Their closest relatives today are snakes and comodo dragons.",
    predator: "",
    scale: "1",
    background: "../imgs/theme/ocean.svg"
  },

  majungasaurus: {
    food: carn,
    src: ["../imgs/dinosaurs/egg/majungasaurus.svg", "../imgs/dinosaurs/baby/majungasaurus.svg", "../imgs/dinosaurs/adult/majungasaurus.svg"],
    info: "The majungasaurus was one of the top predators of its time. It's even believed that majungasaurus would not only hunt other dino's but also each other!",
    predator: "",
    scale: "1",
    background: ""
  },

  spinosaurus: {
    food: pesc,
    src: ["../imgs/dinosaurs/egg/spinosaurus.svg", "../imgs/dinosaurs/baby/spinosaurus.svg", "../imgs/dinosaurs/adult/spinosaurus.svg"],
    info: "The spinosaurus is one of the largest meat eating dinosaurs of all time, even bigger than the tyrannosaurus rex! It also has a spine that grew over 5 feet!",
    predator: "",
    scale: "1",
    background: ""
  },

  ouranosaurus: {
    food: herb,
    src: ["../imgs/dinosaurs/egg/ouranosaurus.svg", "../imgs/dinosaurs/baby/ouranosaurus.svg", "../imgs/dinosaurs/adult/ouranosaurus.svg"],
    info: "The name ouranosaurus means 'brave lizard'. It is believed that the big sail on it's back was used to keep it cool. Though they may have used it to attract a mate too!",
    predator: "",
    scale: "1",
    background: ""
  },

  khaan: {
    food: omni,
    src: ["../imgs/dinosaurs/egg/khaan.svg", "../imgs/dinosaurs/baby/khaan.svg", "../imgs/dinosaurs/adult/khaan.svg"],
    info: "The khaan was a feathered dinosaur with a beak! Dinosaurs closest living relatives today aren't lizards but birds!",
    predator: "",
    scale: "1",
    background: ""
  },

  isisaurus: {
    food: herb,
    src: ["../imgs/dinosaurs/egg/isisaurus.svg", "../imgs/dinosaurs/baby/isisaurus.svg", "../imgs/dinosaurs/adult/isisaurus.svg"],
    info: "The isisaurus inhabited what is today India. They differ from their fellow therapods due to their 'shorter' necks",
    predator: "",
    scale: "1",
    background: ""
  },

  oviraptor: {
    food: omni,
    src: ["../imgs/dinosaurs/egg/oviraptor.svg", "../imgs/dinosaurs/baby/oviraptor.svg", "../imgs/dinosaurs/adult/oviraptor.svg"],
    info: "oviraptor means 'egg thief', it was given the name when they discovered its fossil ontop of a nest of eggs. However later they have discovered it was its own eggs, so perhaps not so bad after all!",
    predator: "",
    scale: "1",
    background: ""
  },

  ampelosaurus: {
    food: herb,
    src: ["../imgs/dinosaurs/egg/ampelosaurus.svg", "../imgs/dinosaurs/baby/ampelosaurus.svg", "../imgs/dinosaurs/adult/ampelosaurus.svg"],
    info: "ampelosaurus is said to have been specialized at eating vegetation that was of medium height. It also had spiky bone armor that grew on its back!",
    predator: "",
    scale: "1",
    background: ""
  },

  bactrosaurus: {
    food: herb,
    src: ["../imgs/dinosaurs/egg/bactrosaurus.svg", "../imgs/dinosaurs/baby/bactrosaurus.svg", "../imgs/dinosaurs/adult/bactrosaurus.svg"],
    info: "The bactrosaurus was a dinosaur who was prone to tumors. It's not known for what reason the poor bactrosaurus suffered from them but paleontologists believe it could be environmental or genetic reasons",
    predator: "",
    scale: "1",
    background: ""
  },

  velociraptor: {
    food: carn,
    src: ["../imgs/dinosaurs/egg/velociraptor.svg", "../imgs/dinosaurs/baby/velociraptor.svg", "../imgs/dinosaurs/adult/velociraptor.svg"],
    info: "The name Velociraptor means 'Speedy Thief', and with their 3.5 inch deadly claws on each foot, they aren't dino's you want to mess with!",
    predator: "",
    scale: "1",
    background: ""
  },

  ankylosaurus: {
    food: herb,
    src: ["../imgs/dinosaurs/egg/ankylosaurus.svg", "../imgs/dinosaurs/baby/ankylosaurus.svg", "../imgs/dinosaurs/adult/ankylosaurus.svg"],
    info: "The ankylosaurus had a massive tail club with which it would defend itself. It's said to be so powerful it could break other dinosaurs bones!",
    predator: "",
    scale: "1",
    background: ""
  },

  pachycephalosaurus: {
    food: herb,
    src: ["../imgs/dinosaurs/egg/pachycephalosaurus.svg", "../imgs/dinosaurs/baby/pachycephalosaurus.svg", "../imgs/dinosaurs/adult/pachycephalosaurus.svg"],
    info: "The pachycephalosaurus had a reall thick head, in fact its skull roof was up to 10 inches thick!",
    predator: "",
    scale: "1",
    background: ""
  },

  chasmosaurus: {
    food: herb,
    src: ["../imgs/dinosaurs/egg/chasmosaurus.svg", "../imgs/dinosaurs/baby/chasmosaurus.svg", "../imgs/dinosaurs/adult/chasmosaurus.svg"],
    info: "The chasmosaurus was as heavy as hippo, and could run as fast as a rhino! Luckily it wouldnt run after us since it was a herbivore",
    predator: "",
    scale: "1",
    background: ""
  },

  bambiraptor: {
    food: carn,
    src: ["../imgs/dinosaurs/egg/bambiraptor.svg", "../imgs/dinosaurs/baby/bambiraptor.svg", "../imgs/dinosaurs/adult/bambiraptor.svg"],
    info: "bambiraptor was a little bird-like dinosaur which could run as fast as a chicken!",
    predator: "",
    scale: "1",
    background: ""
  },

  parasaurolophus: {
    food: herb,
    src: ["../imgs/dinosaurs/egg/parasaurolophus.svg", "../imgs/dinosaurs/baby/parasaurolophus.svg", "../imgs/dinosaurs/adult/parasaurolophus.svg"],
    info: "The parasaurolophus was a dinosaur that could walk on both two and four legs! It's head crest is believed to attract mates, but also to increase it's hearing!",
    predator: "",
    scale: "1",
    background: ""
  },

  triceratops: {
    food: herb,
    src: ["../imgs/dinosaurs/egg/triceratops.svg", "../imgs/dinosaurs/baby/triceratops.svg", "../imgs/dinosaurs/adult/triceratops.svg"],
    info: "Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator: "",
    scale: "1",
    background: ""
  },

  antarctosaurus: {
    food: herb,
    src: ["../imgs/dinosaurs/egg/antarctosaurus.svg", "../imgs/dinosaurs/baby/antarctosaurus.svg", "../imgs/dinosaurs/adult/antarctosaurus.svg"],
    info: "Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator: "",
    scale: "1",
    background: ""
  },

  carnotaurus: {
    food: carn,
    src: ["../imgs/dinosaurs/egg/carnotaurus.svg", "../imgs/dinosaurs/baby/carnotaurus.svg", "../imgs/dinosaurs/adult/carnotaurus.svg"],
    info: "Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator: "",
    scale: "1",
    background: ""
  },

  alvarezsaurus: {
    food: carn,
    src: ["../imgs/dinosaurs/egg/alvarezsaurus.svg", "../imgs/dinosaurs/baby/alvarezsaurus.svg", "../imgs/dinosaurs/adult/alvarezsaurus.svg"],
    info: "Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator: "",
    scale: "1",
    background: ""
  },

  irritator: {
    food: pesc,
    src: ["../imgs/dinosaurs/egg/irritator.svg", "../imgs/dinosaurs/baby/irritator.svg", "../imgs/dinosaurs/adult/irritator.svg"],
    info: "Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator: "",
    scale: "1",
    background: ""
  },

  stegasaurus: {
    food: herb,
    src: ["../imgs/dinosaurs/egg/stegasaurus.svg", "../imgs/dinosaurs/baby/stegasaurus.svg", "../imgs/dinosaurs/adult/stegasaurus.svg"],
    info: "Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator: "",
    scale: "1",
    background: ""
  },

  camptosaurus: {
    food: herb,
    src: ["../imgs/dinosaurs/egg/camptosaurus.svg", "../imgs/dinosaurs/baby/camptosaurus.svg", "../imgs/dinosaurs/adult/camptosaurus.svg"],
    info: "Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator: "",
    scale: "1",
    background: ""
  },

  hesperosaurus: {
    food: herb,
    src: ["../imgs/dinosaurs/egg/hesperosaurus.svg", "../imgs/dinosaurs/baby/hesperosaurus.svg", "../imgs/dinosaurs/adult/hesperosaurus.svg"],
    info: "Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator: "",
    scale: "1",
    background: ""
  },

  brachiosaurus: {
    food: herb,
    src: ["../imgs/dinosaurs/egg/brachiosaurus.svg", "../imgs/dinosaurs/baby/brachiosaurus.svg", "../imgs/dinosaurs/adult/brachiosaurus.svg"],
    info: "Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator: "",
    scale: "1",
    background: ""
  },

  pterodactyl: {
    food: pesc,
    src: ["../imgs/dinosaurs/egg/pterodactyl.svg", "../imgs/dinosaurs/baby/pterodactyl.svg", "../imgs/dinosaurs/adult/pterodactyl.svg"],
    info: "Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator: "",
    scale: "1",
    background: ""
  },

  plesiosaurus: {
    food: pesc,
    src: ["../imgs/dinosaurs/egg/plesiosaurus.svg", "../imgs/dinosaurs/baby/plesiosaurus.svg", "../imgs/dinosaurs/adult/plesiosaurus.svg"],
    info: "Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator: "",
    scale: "1",
    background: "../imgs/theme/ocean.svg"
  },

  chindesaurus: {
    food: carn,
    src: ["../imgs/dinosaurs/egg/chindesaurus.svg", "../imgs/dinosaurs/baby/chindesaurus.svg", "../imgs/dinosaurs/adult/chindesaurus.svg"],
    info: "Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator: "",
    scale: "1",
    background: ""
  },

  eoraptor: {
    food: omni,
    src: ["../imgs/dinosaurs/egg/eoraptor.svg", "../imgs/dinosaurs/baby/eoraptor.svg", "../imgs/dinosaurs/adult/eoraptor.svg"],
    info: "Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator: "",
    scale: "1",
    background: ""
  },

  coelophysis: {
    food: carn,
    src: ["../imgs/dinosaurs/egg/coelophysis.svg", "../imgs/dinosaurs/baby/coelophysis.svg", "../imgs/dinosaurs/adult/coelophysis.svg"],
    info: "Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator: "",
    scale: "1",
    background: ""
  },

  guaibasaurus: {
    food: omni,
    src: ["../imgs/dinosaurs/egg/guaibasaurus.svg", "../imgs/dinosaurs/baby/guaibasaurus.svg", "../imgs/dinosaurs/adult/guaibasaurus.svg"],
    info: "Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator: "",
    scale: "1",
    background: ""
  },

  coloradisaurus: {
    food: herb,
    src: ["../imgs/dinosaurs/egg/coloradisaurus.svg", "../imgs/dinosaurs/baby/coloradisaurus.svg", "../imgs/dinosaurs/adult/coloradisaurus.svg"],
    info: "Don't be fooled by his little arms, the Tyrannosaurus Rex could lift up to 439 pounds! No wonder he's the king of the dinosaurs!",
    predator: "",
    scale: "1",
    background: ""
  },
  food: "",
  src: "",
  info: "",
  scale: "",
  header: ""
};


// ===== PROXY SETTINGS ===== //

var handler = {
  set: function(obj, props, value) {
    //What to handle

    if (props == "dino") {
      SelectDinoUI();
    }

    if (props == "src") {
      ChangeSrcUI(value);
    }

    if (props == "food") {
      ShowFoodUI(value);
    }

    if (props == "info") {
      ShowInfoUI(value);
    }

    if (props == "header") {
      ChangeHeaderUI(value);
    }

    if (props == "scale") {
      ChangeScaleUI(value);
    }

    if(props == "background"){
      ChangeBGUI(value);
    }
  }
}


var prox = new Proxy(pkg, handler);


// ===== CHANGE STATE FUNCTIONS ===== //

// index.html page
function ExploreButton() {
  window.location.href = "./map.html";
}

// map.html page
function selectContinent(el) {
  var continent = el.id,
    selCont = "./c" + continent + ".html";
  window.location.href = selCont;
}

// any of the specified continent pages
function SelectDino(el) {
  localStorage.setItem("DinoName", el.id)
  pkg.dino = localStorage.getItem("DinoName");
  prox.dino = pkg.dino;
}

// dino.html page
function ChangeSrc() {
  pkg.src = pkg[dinoName].src;
  prox.src = pkg.src;
  if (dinoImg.style.transform == "scale(1.6)") {
    dinoImg.src = pkg[dinoName].src[2];
    // alert("Wow Goodjob! You've raised the little " + dinoName + " into a full grown adult!");
  }
}

function ChangeHeader() {
  pkg.header = dinoName;
  prox.header = pkg.header;
}

function ShowFood() {
  pkg.food = pkg[dinoName].food;
  prox.food = pkg.food;
}

function ShowInfo() {
  pkg.info = pkg[dinoName].info;
  prox.info = pkg.info;
}

function ChangeScale() {
  pkg.scale = pkg[dinoName].scale;
  prox.scale = pkg.scale;

}

// Drag and drop food

function CreateFood(num){
    BoopSound();
    //this function creates food
    var newFood = document.createElement("img");
    newFood.src = pkg[dinoName].food[num];
    newFood.id = "food";
    newFood.style.width = "50px";
    newFood.style.height = "50px";
    newFood.style.position = "absolute";
    newFood.style.top = "200px";
    newFood.style.left = "275px";
    pgmn.appendChild(newFood);
    MoveFood(newFood);
    foodref = newFood.id;
    foodElem = document.querySelector("#food");
    buttonId = num;
}

function MoveFood(nf){
  setTimeout(function() {
    nf.style.top = "450px";
  },100);
}

pgmn.addEventListener("click", function(){
  if(event.target.id == foodref){
      RemoveFood(buttonId);
  }
});

function RemoveFood(el){
  BigMunchSound();
  foodElem.remove();
  CreateSplash();
  ChangeScale(el)

}

// Splash effect when eating food

function CreateSplash(){
    SplashSound();
    //this function creates food
    var splash = document.createElement("img");
    splash.id = "splash";

    if(pkg[dinoName].food == herb){
      splash.src = "../imgs/dinosaurs/Splashes/splash-01.svg";
    } else if(pkg[dinoName].food == carn){
      splash.src = "../imgs/dinosaurs/Splashes/splash-02.svg";
    } else if(pkg[dinoName].food == omni){
      splash.src = "../imgs/dinosaurs/Splashes/splash-01.svg";
    } else if(pkg[dinoName].food == pesc){
      splash.src = "../imgs/dinosaurs/Splashes/splash-03.svg"
    }

    splash.style.width = "50px";
    splash.style.height = "50px";
    splash.style.position = "absolute";
    splash.style.top = "450px";
    splash.style.transform = "scale(.5)";
    splash.style.left = "275px";
    pgmn.appendChild(splash);
    setTimeout(function(){
        ScaleSplash(splash);
    }, 100);
}

function ScaleSplash(splash){
  splash.style.transform = "scale(3)";
  setTimeout(function(){
    splash.style.opacity = 0;
  }, 300);
}


// +1 and +2 when dino eats food
function EatFeedback(num){
  var feedBack = document.createElement("h4");
  feedBack.innerHTML = num;
  feedBack.id = "feedback";
  feedBack.style.position = "absolute";
  feedBack.style.top = "150px";
  feedBack.style.left = "150px";
  feedBack.style.opacity = "1";
  pgmn.appendChild(feedBack);

  MoveFeedback(feedBack);
}

function MoveFeedback(fdb){
  setTimeout(function() {
    fdb.style.left = "100px";
    fdb.style.top = "100px";
    fdb.style.opacity = 0;
      setTimeout(function(){
        RemoveFeedBack(fdb);
      },2000);
  },100);
}

function RemoveFeedBack(fdb){
  fdb.remove();
}

function ChangeBG(){
  pkg.background = pkg[dinoName].background;
  prox.background = pkg.background;
}

// ==== CHANGE UI FUNCTIONS ===== //

function SelectDinoUI() {
  window.location.href = "./dino.html";
}

function ChangeSrcUI(value) {
  dinoImg.src = value[0];
}

var eggSpan = document.querySelector("#hatchEgg");

function hatchEgg() {
  EggCrack();
  LittleRoar();
  eggSpan.style.display = "none";
  document.querySelector(".menu__dino").style.display = "grid";

  if(dinoImg.src.includes("imgs/dinosaurs/egg")){
      dinoImg.src = pkg[dinoName].src[1];
  }
}

function resetDino() {
  dinoImg.src = pkg[dinoName].src[0];
  dinoImg.style.transform = "scale(1)";
  pkg[dinoName].scale = "1";
  eggSpan.style.display = "block";
  document.querySelector(".menu__food").style.display = "none";
    document.querySelector(".menu__dino").style.display = "none";
  document.querySelector("#infoBox").style.display = "none";
}

function ChangeHeaderUI(value) {
  dinoH.innerHTML = value;
}

function ShowInfoUI(value) {
  if (document.querySelector("#infoBox").style.display == "grid") {
    document.querySelector("#infoBox").style.display = "none";
  } else {
    document.querySelector("#infoBox").innerHTML = value;
    document.querySelector("#infoBox").style.display = "grid";
  }

  if (document.querySelector(".menu__food").style.display == "grid") {
    document.querySelector(".menu__food").style.display = "none";
  }
}

function ShowFoodUI(value) {
  if (document.querySelector(".menu__food").style.display == "") {
    document.querySelector(".menu__food").style.display = "grid";
    document.querySelector("#infoBox").style.display = "none";
    document.querySelector("#food1").src = value[0];
    document.querySelector("#food2").src = value[1];
    // document.querySelector("#food3").src = value[2];
  } else if (document.querySelector(".menu__food").style.display == "none") {
    document.querySelector(".menu__food").style.display = "grid";
    document.querySelector("#infoBox").style.display = "none";
    document.querySelector("#food1").src = value[0];
    document.querySelector("#food2").src = value[1];
    // document.querySelector("#food3").src = value[2];
  } else{
    document.querySelector(".menu__food").style.display = "none";
  }

}

function ChangeScaleUI(value) {
  var originalScale = value;
  var littleFood = 0.05;
  var currentScale = pkg[dinoName].scale;
  var bigFood = 0.1;
  var donut = 0.6;

  if (pkg[dinoName].scale >= 1.6) {
    pkg[dinoName].scale = 1.6;
    ChangeSrc();
    SweetVictory();
    setTimeout(function(){
      BigRoar();
    },1000);
  } else if (dinoImg.src.includes("imgs/dinosaurs/egg")){
      alert("You can't feed an egg silly! Try clicking on the egg to hatch it first!");
    } else if (buttonId == "0") {
        dinoImg.style.transform = "scale(" + (parseFloat(value) + parseFloat(littleFood)) + ")";
        pkg[dinoName].scale = (parseFloat(value) + parseFloat(littleFood));
        EatFeedback("+1");
        if (dinoImg.style.transform >= "scale(1.6)") {
          dinoImg.style.transform = "scale(1.6)";
        }
      } else if (buttonId == "1") {
        dinoImg.style.transform = "scale(" + (parseFloat(value) + parseFloat(bigFood)) + ")";
        pkg[dinoName].scale = (parseFloat(value) + parseFloat(bigFood));
        EatFeedback("+2")
        if (dinoImg.style.transform >= "scale(1.6)") {
          dinoImg.style.transform = "scale(1.6)";
        }
      } else if (buttonId == "3") {
        dinoImg.style.transform = "scale(" + (parseFloat(value) + parseFloat(donut)) + ")";
        if (dinoImg.style.transform >= "scale(1.6)") {
          dinoImg.style.transform = "scale(1.6)";
        }
      }
}

function ChangeBGUI(value){
  bg.style.background = value;
}

// DEFAULT
if (window.location.href == "dino.html") {
  dinoImg.style.transform = "scale(" + 1 + ")";
}

function menu() {
  var menu = document.querySelector("#ham-menu");
  if (menu.className == "fas fa-bars") {
    menu.className = "fas fa-times";
  } else {
    menu.className = "fas fa-bars";
  }
}

// ===== AUDIO FUNCTIONS ===== //

function ThemeSong(){
  var mnSong = document.querySelector("#theme");

  mnSong.volume = 0.3;
  mnSong.play();
}


function selectionSound(){
  var ds = document.querySelector("#drumSound");
  ds.currentTime = .3;
  ds.volume = 1;
  ds.play();
}

function EggCrack(){
  var crack = document.querySelector("#crack");
  crack.volume = 0.5;
  crack.currentTime = 1;
  crack.play();
}

function BoopSound(){
  var boop = document.querySelector("#boop");

  boop.currentTime = 0.2;
  boop.play();
}

function SplashSound(){
  var splashy = document.querySelector("#splashy");
  splashy.volume = 0.6;
  splashy.play();
}

function BigMunchSound(){
  var bigmunch = document.querySelector("#bigmunch");
  bigmunch.volume = 0.6;
  bigmunch.currentTime = 1.2;
  bigmunch.play();
}

function SweetVictory(){
  var vic = document.querySelector("#victory");
vic.volume = .5;
  vic.play();
}

function BigRoar(){
  var roar = document.querySelector("#bigroar");

  roar.play();
}

function LittleRoar(){
  var roar = document.querySelector("#littleroar");
  roar.volume = .2;
  roar.play();
}

// ===== ANIMATIONS ===== //

// function WiggleDino(){
//   dinoImg.style.top = 10;
// }

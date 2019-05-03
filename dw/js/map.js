var triassic = document.querySelector(".triassic"),
  jurassic = document.querySelector(".jurassic"),
  cretaceous = document.querySelector(".cretaceous"),
  btnTriassic = document.querySelector("#btn-triassic"),
  btnJurassic = document.querySelector("#btn-jurassic"),
  btnCretaceous = document.querySelector("#btn-cretaceous");

var color = "white",
  bgColor = "#B2DE30",
  border = "none";

function clickTriassic(e) {
  jurassic.style.display = "none";
  cretaceous.style.display = "none";
  triassic.style.display = "block";
  changeBtn(e);
}

function clickJurassic(e) {
  jurassic.style.display = "block";
  triassic.style.display = "none";
  cretaceous.style.display = "none";
  changeBtn(e);
}

function clickCretaceous(e) {
  cretaceous.style.display = "block";
  triassic.style.display = "none";
  jurassic.style.display = "none";
  changeBtn(e);
}

function changeBtn(e) {
  if (e.id == "btn-triassic") {
    e.className = "btn-rounded btn-rounded-click";
    btnJurassic.className = "btn-rounded btn-link";
    btnCretaceous.className = "btn-rounded btn-link";
  } else if (e.id == "btn-jurassic") {
    e.className = "btn-rounded btn-rounded-click";
    btnTriassic.className = "btn-rounded btn-link";
    btnCretaceous.className = "btn-rounded btn-link";
  } else if (e.id == "btn-cretaceous") {
    e.className = "btn-rounded btn-rounded-click";
    btnTriassic.className = "btn-rounded btn-link";
    btnJurassic.className = "btn-rounded btn-link";
  }
}

var sHead = document.querySelector("#selectHead");

function selectJurassic(e){
  localStorage.setItem("continent",e.id);
  window.location.href = "./jurassic.html";
}
var con = localStorage.getItem("continent");

var sCon = "j"+con;

function selectCon(){
  var jConti = document.querySelector("[id=" + sCon + "]");
  jConti.style.display = "block";
  sHead.innerText = con;
}



function selectTriassic(e){
  localStorage.setItem("continent",e.id);
  window.location.href = "./triassic.html";
}
var cont = localStorage.getItem("continent");
var tCon = "t"+cont;
function selectTCon(){
  var tConti = document.querySelector("[id=" + tCon + "]");
  tConti.style.display = "block";
  sHead.innerText = cont;
}
/*
function selectContinent(e){
  localStorage.setItem("continent",e.id);
  window.location.href = "./cretaceous.html";
}

var conti = localStorage.getItem("continent");
var cCon = "c"+conti;
function selectCCon(){
  var cConti = document.querySelector("[id=" + cCon + "]");
  cConti.style.display = "block";
  sHead.innerText = conti;
}*/

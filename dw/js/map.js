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

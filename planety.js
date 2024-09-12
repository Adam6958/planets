const url = window.location.search;
const parametry = new URLSearchParams(url);
const planeta = parametry.get("planeta");

const nazwaPlanety = document.getElementById("planet-name");
const opisPlanety = document.getElementById("planet-desc");
const zdjeciePlanety = document.getElementById("planet-img");
const linkPlanety = document.getElementById("planet-link");

const obrotPlanety = document.getElementById("planet-rotation");
const okrazeniePlanety = document.getElementById("planet-revolution");
const srednicaPlanety = document.getElementById("planet-radius");
const tempPlanety = document.getElementById("planet-temp");

const tryb = document. querySelectorAll(".tab");

let wybranyTryb = "overview";

tryb.forEach(function (x) {
  x.onclick = function () {

    tryb.forEach(function (x) {
        x.classList.remove("tab-active");
      });
      x.classList.add("tab-active");
       

    wybranyTryb = x.dataset.tab;
    pobierzDane();
  };
});
function pobierzDane () {
    fetch("./data.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const wybrana = data.find((i) => i.name === planeta);
  
  
      console.log(wybrana);
  
      nazwaPlanety.textContent = wybrana.name;
      opisPlanety.textContent = wybrana[wybranyTryb].content;
  
      zdjeciePlanety.src = wybrana.images[wybranyTryb];
      zdjeciePlanety.alt = wybrana.name;
  
      linkPlanety.href = wybrana[wybranyTryb].source;
  
      obrotPlanety.textContent = wybrana.rotation;
      okrazeniePlanety.textContent = wybrana.revolution;
      tempPlanety.textContent = wybrana.temperature;
      srednicaPlanety.textContent = wybrana.radius;
    });
  
}

pobierzDane();
  
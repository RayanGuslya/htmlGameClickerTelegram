let click = 50000;
let clickCoins = 1;
let maxEnergy = 1500;
let priceBoostClick = 250;
let priceBoostEnergy = 500;
let priceAutoClick = 50000;
let restart = true;
//востановление энергии
function energyHill() {
  let energyLimitElement = document.querySelector(".energyLimit");
  let currentEnergy = parseInt(energyLimitElement.textContent);
  
  if (currentEnergy < maxEnergy) {
    energyLimitElement.textContent = Math.min(currentEnergy + 2, maxEnergy);
  }
  
  return parseInt(energyLimitElement.textContent);
}
//отнимает энергия при нажатии на коин
function clickCoin() {
  let energyLimitElement = document.querySelector(".energyLimit");

  if (parseInt(energyLimitElement.textContent) >= 2) {
    click += clickCoins;
    document.querySelector(".point").textContent = click;
    energyLimitElement.textContent -= 3;
  }
}
setInterval(energyHill,5000);
function buyClickBoostFunc(){
  if(click >= priceBoostClick){
    clickCoins++;
    click-=priceBoostClick;
    document.querySelector(".point").textContent = click;
    priceBoostClick *= 4;
    document.querySelector(".priceBoost").textContent = "за " + priceBoostClick;
  }
}
function buyClickEnergyFunc(){
  let energyLimitElement = document.querySelector(".energyLimit");
  if(click >= priceBoostEnergy){
    priceBoostEnergy *= 2;
    maxEnergy +=500;
    click -= priceBoostEnergy;
    energyLimitElement.textContent = maxEnergy;
    document.querySelector(".point").textContent = click;
    document.querySelector(".priceEnergy").textContent = "за " + priceBoostEnergy;
  }
}
function asd(){
  click -= priceAutoClick;
  document.querySelector(".point").textContent = click++;
}
let test = false;
function buyAutoClick(){
  console.log("test");
  if(click >= priceAutoClick){
    test = true;
  }
}
if(!test){
  setInterval(asd,1000);
}
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtnStore");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


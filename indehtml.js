let click = 100000;
let clickCoins = 1;
let maxEnergy = 1500;
let priceBoostClick = 250;
let priceBoostEnergy = 500;
let restart = true;
document.querySelectorAll('.btn').forEach(function(button) {
    button.addEventListener('touchstart', function() {
        button.classList.add('active');
    });

    button.addEventListener('touchend', function() {
        button.classList.remove('active');
    });
});
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
    priceBoostClick *= 4;

    document.querySelector(".point").textContent = click;
    document.querySelector(".priceBoost").textContent = "за " + priceBoostClick;
  }
}
function buyClickEnergyFunc(){
  let energyLimitElement = document.querySelector(".energyLimit");
  if(click >= priceBoostEnergy){
    maxEnergy +=500;
    click -= priceBoostEnergy; 
    priceBoostEnergy *= 2;
    
    energyLimitElement.textContent = maxEnergy;
    document.querySelector(".point").textContent = click;
    document.querySelector(".priceEnergy").textContent = "за " + priceBoostEnergy;
  }
}
function buyAutoClick(){
  if(click >= 50000){
    const btn = document.querySelector(".buyAutoClick");
    btn.setAttribute('disabled','');
    btn.textContent = 'Куплено';
    click-=50000;
    document.querySelector(".point").textContent = click;
    setInterval(autoClick, 4000)
  }
}
function autoClick(){
  click += 2;
  document.querySelector(".point").textContent = click;
}

    // Get the modal elements
    var modal = document.getElementById("myModal");
    var modalStats = document.getElementById("myStatsModal");
    var modalEarn = document.getElementById("myEarnModal");
    var modalInvite = document.getElementById("myInviteModal");

    // Get the buttons that open the modals
    var btn = document.getElementById("myBtnStore");
    var btnStats = document.getElementById("myBtnStats");
    var btnEarn = document.getElementById("myBtnEarn");
    var btnInvite = document.getElementById("myBtnInvite");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close");

    // When the user clicks the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }
    btnStats.onclick = function() {
        modalStats.style.display = "block";
    }
    btnEarn.onclick = function() {
        modalEarn.style.display = "block";
    }
    btnInvite.onclick = function() {
        modalInvite.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    for (let i = 0; i < span.length; i++) {
        span[i].onclick = function() {
            modal.style.display = "none";
            modalStats.style.display = "none";
            modalEarn.style.display = "none";
            modalInvite.style.display = "none";
        }
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal || event.target == modalStats || event.target == modalEarn || event.target == modalInvite) {
            modal.style.display = "none";
            modalStats.style.display = "none";
            modalEarn.style.display = "none";
            modalInvite.style.display = "none";
        }
    };
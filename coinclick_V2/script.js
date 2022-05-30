var temp;
var game = {
  currentCoins: 0,
  lvlArray: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  iconArray: ['icons/tim.png', 'icons/printer.png', 'icons/magi.png', 'icons/jamal.png', 'icons/ball.png', 'icons/atm.png', 'icons/bank.png', 'icons/mine.png', 'icons/jamal2nd.png', 'icons/slot.png'],
  nameArray: ['Tim', 'Printer', 'Magi', 'Jamal', 'Gumball', 'Atm', 'Bank', 'Mine', 'Jamal II', 'Gamble'],
  tapsArray: [1, 9, 18, 78, 359, 2000, 14000, 79000, 348000, 999000],
  priceArray: [10, 100, 1500, 30000, 100000, 550000, 1250000, 8900000, 69670000, 420000000]
};


for (var i = 0; i<game.lvlArray.length; i++){
  let uppgradesHousing = document.getElementById('uppgradesHousing');
  var uppgradeDiv = document.createElement("div");
  uppgradeDiv.classList.add('uppgradeDiv');
  uppgradesHousing.appendChild(uppgradeDiv);

  var uppgradeLeft = document.createElement("div");
  uppgradeLeft.classList.add('uppgradeLeft');
  uppgradeDiv.appendChild(uppgradeLeft);

  var iconDiv = document.createElement("div");
  iconDiv.classList.add('iconDiv');
  uppgradeLeft.appendChild(iconDiv);

  var uppgradeIcon = document.createElement("img");
  uppgradeIcon.classList.add('uppgradeIcon');
  uppgradeIcon.src=game.iconArray[i];
  iconDiv.appendChild(uppgradeIcon);

  var nameLevelDiv = document.createElement("div");
  nameLevelDiv.classList.add('nameLevelDiv');
  uppgradeLeft.appendChild(nameLevelDiv);

  var uppgradeName = document.createElement("p");
  uppgradeName.classList.add('uppgradeName');
  uppgradeName.innerHTML=game.nameArray[i]
  nameLevelDiv.appendChild(uppgradeName);

  var uppgradeLvl = document.createElement("p");
  uppgradeLvl.classList.add('uppgradeLvl');
  uppgradeLvl.innerHTML='lvl '+ game.lvlArray[i]
  nameLevelDiv.appendChild(uppgradeLvl);

  var uppgradeRight = document.createElement("div");
  uppgradeRight.classList.add('uppgradeRight');
  uppgradeDiv.appendChild(uppgradeRight);

  var uppgradeTaps = document.createElement("p");
  uppgradeTaps.classList.add('uppgradeTaps');
  uppgradeTaps.innerHTML='+'+ numFormatter(game.tapsArray[i], 0) +' Tap';
  uppgradeTaps.setAttribute('id', 'uppgradeTaps'+i)
  uppgradeRight.appendChild(uppgradeTaps);

  var uppgradeButton = document.createElement("div");
  uppgradeButton.classList.add('uppgradeButton');
  uppgradeRight.appendChild(uppgradeButton);

  var uppgradeBuy = document.createElement("p");
  uppgradeBuy.classList.add('uppgradeBuy');
  uppgradeBuy.innerHTML='Buy';
  uppgradeButton.appendChild(uppgradeBuy);

  var uppgradeBuyPrice= document.createElement("p");
  uppgradeBuyPrice.classList.add('uppgradeBuyPrice');
  uppgradeBuyPrice.innerHTML=numFormatter(game.priceArray[i], 1) +'$';
  uppgradeButton.appendChild(uppgradeBuyPrice);
}

// Formaterer nummer
function numFormatter(num, desimal) {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(desimal) + "k"; // convert to k for number from > 1000 < 1 million
  } else if (num >= 1000000 && num < 1000000000) {
    return (num / 1000000).toFixed(desimal) + "M"; // convert to M for number from > 1 million
  } else if (num >= 1000000000 && num < 1000000000000) {
    return (num / 1000000000).toFixed(desimal) + "B"; // convert to M for number from > 1 million
  } else if (num >= 1000000000000 && num < 1000000000000000) {
    return (num / 1000000000000).toFixed(desimal) + "T"; // convert to M for number from > 1 million
  } else if (num >= 1000000000000000) {
    return (num / 1000000000000000).toFixed(desimal) + "Q"; // convert to M for number from > 1 million
  } else if (num < 999) {
    return num.toFixed(); // if value < 1000, nothing to do
  }
}


// Admin code
const pressed = [];
const secretcode = "admin";

window.addEventListener("keyup", (e) => {
  pressed.push(e.key);
  pressed.splice(-secretcode.length - 1, pressed.length - secretcode.length);
  if (pressed.join("").includes(secretcode)) {
    temp = prompt("Password");
    if (temp === "hans") {
      temp = prompt("Add coins");
      game.currentCoins += temp;
    }
  }
});

//Initalize all variables
    // Player Variables
    let cash;
    let autoClicker;
    let rebirths;
    let baseClicks;
    let totalTimePlayed;

    //OTHER VARIABLES
    let autoClickerPurchaseAmt;
    let timeMultiplier;
    let  r;
    let  g;
    let  b;
    let redCycle;
    let greenCycle;
    let blueCycle;
    let rgbClicks;
    let rgbOn;

    //IMPORTANT BOOL
    let timeXUpgradePurchase;

    // Time tracking variables
    let timePlayedSec;
    let timePlayedSec2nd;
    let timePlayedMin;
    let timePlayedMin2nd;
    let timePlayedHour;
    let timePlayedHour2nd;

    // Time Accelerant Upgrade
    let timeAmountBought;
    let timeSpeed;

    // Upgrade prices
    let clickerCost;     
    let rebirthCost;
    let timeUpgradeCost;
    let timeXUpgradeCost;
    let rgbCost;

// Check if user has logged in before and assign values
if(localStorage.getItem("hasLoggedIn")){

    // Player Variables
 cash = localStorage.getItem("playerMoney");
 autoClicker = localStorage.getItem("playerAutoClicker");
 rebirths = localStorage.getItem("playerRebirths");
 baseClicks = localStorage.getItem("userClickPower");
 totalTimePlayed = localStorage.getItem("userTimePlayed");

//OTHER VARIABLES
 autoClickerPurchaseAmt = 1;
 timeMultiplier = localStorage.getItem("currentTimeMult");
  r = 255;
  g = 0;
  b = 0;
 redCycle = true;
 greenCycle = false;
 blueCycle = false;
 rgbClicks = 0;
 rgbOn = false;

//IMPORTANT BOOL
 timeXUpgradePurchase = localStorage.getItem("isTimeXpurchased");

// Time tracking variables
 timePlayedSec = localStorage.getItem("1dSec");
 timePlayedSec2nd = localStorage.getItem("2dSec");
 timePlayedMin = localStorage.getItem("1dMin");
 timePlayedMin2nd = localStorage.getItem("2dMin");
 timePlayedHour = localStorage.getItem("1dHr");
 timePlayedHour2nd = localStorage.getItem("2dHr");

// Time Accelerant Upgrade
 timeAmountBought = localStorage.getItem("numTime");
 timeSpeed = localStorage.getItem("currentTickSpeed");

// Upgrade prices
 clickerCost = Math.floor(10 * Math.pow(1.15, localStorage.getItem("playerAutoClicker")));     
 rebirthCost = Math.floor(1000 * Math.pow(2, localStorage.getItem("playerRebirths")));
 timeUpgradeCost = Math.floor(2 * Math.pow(1.5, localStorage.getItem("numTimeXUpgradeBought")));
 timeXUpgradeCost = 1;
 rgbCost = 10000;

} else {
    // Player Variables
 cash = 0;
 autoClicker = 0;
 rebirths = 0;
 baseClicks = 1;
 totalTimePlayed = 0;

//OTHER VARIABLES
 autoClickerPurchaseAmt = 1;
 timeMultiplier = 1;
  r = 255;
  g = 0;
  b = 0;
 redCycle = true;
 greenCycle = false;
 blueCycle = false;
 rgbClicks = 0;
 rgbOn = false;

//IMPORTANT BOOL
 timeXUpgradePurchase = false;

// Time tracking variables
 timePlayedSec = 0;
 timePlayedSec2nd = 0;
 timePlayedMin = 0;
 timePlayedMin2nd = 0;
 timePlayedHour = 0;
 timePlayedHour2nd = 0;

// Time Accelerant Upgrade
 timeAmountBought = 0;
 timeSpeed = 1000;

// Upgrade prices
 clickerCost = Math.floor(10 * Math.pow(1.15,autoClicker));     
 rebirthCost = Math.floor(1000 * Math.pow(2, rebirths));
 timeUpgradeCost = Math.floor(2 * Math.pow(1.5, timeAmountBought));
 timeXUpgradeCost = 1;
 rgbCost = 10000;

localStorage.setItem("hasLoggedIn", true);
}


function saveGame(){
    //Check if this is users first time logging in
    localStorage.setItem("timesLoggedin", true);
    //saving user stats in local storage
    localStorage.setItem("playerMoney", cash);
    localStorage.setItem("playerAutoClicker", autoClicker);
    localStorage.setItem("userClickPower", baseClicks);
    localStorage.setItem("userTimePlayed", totalTimePlayed);
    localStorage.setItem("playerRebirths", rebirths);
    //saving other important vars in local storage
    localStorage.setItem("currentTickSpeed", timeSpeed)
    localStorage.setItem("currentTimeMult", timeMultiplier);
    localStorage.setItem("isTimeXpurchased", timeXUpgradePurchase);
    //saving time display variables
    localStorage.setItem("1dSec", timePlayedSec);
    localStorage.setItem("2dSec", timePlayedSec2nd);
    localStorage.setItem("1dMin", timePlayedMin);
    localStorage.setItem("2dMin", timePlayedMin2nd);
    localStorage.setItem("1dHr", timePlayedHour);
    localStorage.setItem("2dHr", timePlayedHour2nd);
    //saving the current upgrade and prices
    localStorage.setItem("numTimeXUpgradeBought", timeAmountBought);
    localStorage.setItem("costOfClicker", clickerCost);
    localStorage.setItem("costOfRebirth", rebirthCost);
    localStorage.setItem("costOfTimeUpgrade", timeUpgradeCost);
    localStorage.setItem("costOfTimeXUpgrade", timeXUpgradeCost);
    localStorage.setItem("costOfRgb", rgbCost);
}

//CHECK VARIABLES FOR TESTING PURPOSES
let printCheck = () => {
    console.log(`Current cash: ${cash}`);
    console.log(`Current auto clickers: ${autoClicker}`);
    console.log(`Current rebirths: ${rebirths}`);
    console.log(`Current base click power: ${baseClicks}`);
    console.log(`Current speed of time(in ms): ${timeSpeed}`);
    console.log(`Total Time Played: ${totalTimePlayed}`);
    console.log(`Times accelerant upgrade has been bought: ${timeAmountBought}`);
    console.log(`Current Time Bonus: ${timeMultiplier}`);
    console.log('');
}

// Linking To HTML
    // DISPLAY ELEMENTS
    const clickerDisplay = document.getElementById("clickers");
    const cashDisplay = document.getElementById("cash");
    const rebirthDisplay = document.getElementById("rebirths");
    const cpsDisplay = document.getElementById("cpsDisplay");
// UPGRADE/BUTTON ELEMENTS
const testButton = document.getElementById('test'); //used for quick cash
const testInfoButton = document.getElementById('testInfo'); //used to display info for debug
const testStopButton = document.getElementById('testStop'); //to try and stop timer

const buyAutoButton = document.getElementById("buyAutoClicker");
const button1 = document.getElementById("button1");
const rebirthButton = document.getElementById("buyRebirth");
const timeUpgradeButton = document.getElementById("upgradeTime");
const timeXUpgradeButton = document.getElementById("timeXUpgrade");
// MISC BUTTONS 
const buyRgbButton = document.getElementById('buyRgb');
    // TIME PLAYED ELEMENTS
    const second1d = document.getElementById("second1d");
    const second2d = document.getElementById("second2d");
    const minute1d = document.getElementById("minute1d");
    const minute2d = document.getElementById("minute2d");
    const hour1d = document.getElementById("hour1d");
    const hour2d = document.getElementById("hour2d");


// Check if upgrade is purchasable
const checkPurchasable = () =>{
    if(cash < localStorage.getItem("costOfClicker")){
        buyAutoButton.classList.remove("canBuy");
        buyAutoButton.classList.add("cantBuy");
    } else {
        buyAutoButton.classList.remove("cantBuy");
        buyAutoButton.classList.add("canBuy");
    }

    if(cash < localStorage.getItem("costOfRebirth")){
        rebirthButton.classList.remove("canBuy");
        rebirthButton.classList.add("cantBuy");
    } else {
        rebirthButton.classList.remove("cantBuy");
        rebirthButton.classList.add("canBuy");
    }

    if(rebirths < localStorage.getItem("costOfTimeXUpgrade")){
        timeXUpgradeButton.classList.remove("canBuy");
        timeXUpgradeButton.classList.add("cantBuy")
    } else {
        timeXUpgradeButton.classList.remove("cantBuy")
        timeXUpgradeButton.classList.add("canBuy")
    }

    if(rebirths < localStorage.getItem("costOfTimeUpgrade")){
        timeUpgradeButton.classList.remove("canBuy");
        timeUpgradeButton.classList.add("cantBuy");
    } else {
        timeUpgradeButton.classList.remove("cantBuy");
        timeUpgradeButton.classList.add("canBuy");
    }
}

// Behavior of Upgrades
const getAutoClicker = () => {
    if(cash >= clickerCost){                                   
        autoClicker = autoClicker + autoClickerPurchaseAmt;                                  
    	cash = cash - clickerCost;                       
        clickerDisplay.innerHTML = autoClicker;  
        cashDisplay.innerHTML = cash; 
    };
    let nextCost = Math.floor(10 * Math.pow(1.15,autoClicker));       
    document.getElementById('clickerCost').innerHTML = nextCost;  
}

const getCash = (num) => {
    cash += num;
    cashDisplay.innerHTML = cash;
}

// THIS IS FOR TEST PURPOSE ONLY
const testCash = (num) => {
    cash += num * 10000;
    cashDisplay.innerHTML = cash;
}



const buyRebirth = () => {
    // check if user affords rebirth
    if(cash >= rebirthCost){
        //adjust variables
        rebirths = rebirths + 1;
        cash = 0;
        autoClicker = 0;
        //apply multipliers
        baseClicks = (Math.ceil(2 * Math.pow(1.7, rebirths))); 
        autoClickerPurchaseAmt = (Math.floor(2 * Math.pow(1.2, rebirths)));
        //update elements 
        document.getElementById('clickerCost').innerHTML = 10;
        clickerDisplay.innerHTML = autoClicker;  
        rebirthDisplay.innerHTML = rebirths;  
        cashDisplay.innerHTML = cash;  
        cpsDisplay.innerHTML = baseClicks;
    };
    let nextCost = Math.floor(1000 * Math.pow(2, rebirths));
    document.getElementById("rebirthCost").innerHTML = nextCost;
}

const timeUpgrade = () => {
    let timeUpgradeCost = Math.floor(2 * Math.pow(1.5, timeAmountBought));
    //check if user affords upgrade
    if(rebirths >= timeUpgradeCost && timeAmountBought < 4){
        timeAmountBought++;
        // stop interval to update
        stopGameLoopUpdate();
        // reset variables
        timeSpeed = timeSpeed - 300;
        rebirths = 0;
        cash = 0;
        autoClicker = 0;
        // update elements
        clickerDisplay.innerHTML = autoClicker;  
        rebirthDisplay.innerHTML = rebirths;  
        cashDisplay.innerHTML = cash;  
        cpsDisplay.innerHTML = baseClicks; 
        document.getElementById("rebirthCost").innerHTML = 1000;
        // start interval again
        gameLoopUpdate();
    }
    let nextCost = Math.floor(2 * Math.pow(1.5, timeAmountBought));

    document.getElementById("timeCost").innerHTML = nextCost;
    if(timeAmountBought == 3){
        document.getElementById("timeCost").innerHTML = "Max Upgrades Bought"; 
    }
}

const timeXUpgrade = () =>{
    if(rebirths >= timeXUpgradeCost){
        rebirths = rebirths - timeXUpgradeCost;
        rebirthDisplay.innerHTML = rebirths;  
        document.getElementById('timeXCost').innerHTML = "Max Upgrades Purchased";
        timeXUpgradePurchase = true;
    }
}

// RGB
function buyRGB(){
    if(cash >= rgbCost){
        //updates cash
        cash = cash - rgbCost
        //updates display
        cashDisplay.innerHTML = cash;  
        //activates the rgb background
        toggleRGB();
    }
}

function toggleRGB(){
    rgbOn = !rgbOn;
    if(rgbOn == true){
        document.getElementById("rgbCost").innerHTML = "Toggle Off";
    } else {
        document.getElementById("rgbCost").innerHTML = "Toggle On";
    }
}

buyRgbButton.addEventListener('click',()=>{
    if(rgbClicks == 0){
        buyRGB();
    } else if(rgbClicks > 0){
        toggleRGB();
    }
    rgbClicks++;
})

function rgbBackground(){
if(rgbOn){
    if(r == 255){
        blueCycle = false;
        greenCycle = false;
        redCycle = true;
    } else if(g == 255){
        blueCycle = false;
        redCycle = false;
        greenCycle = true;
    } else if(b == 255){
        greenCycle = false;
        redCycle = false;
        blueCycle = true;
    }


    if((r > 0 && r < 256) && redCycle){
        r--;
        g++;
    } else if((g > 0 && g < 256) && greenCycle){
        g--;
        b++;
    } else if((b > 0 && b < 256) && blueCycle){
        b--;
        r++;
    }
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  }
}


// Time Played function
const timePlayedUpdate = () =>{
    timePlayedSec++;
    totalTimePlayed++;
    second1d.innerHTML = timePlayedSec;
    if(timePlayedSec > 9){
        timePlayedSec = 0;
        second1d.innerHTML = 0;
        timePlayedSec2nd++;
        second2d.innerHTML = timePlayedSec2nd;
    }
    if(timePlayedSec2nd > 5){
        timePlayedSec = 0;
        timePlayedSec2nd = 0;
        second1d.innerHTML = 0;
        second2d.innerHTML = 0;
        timePlayedMin++;
        minute1d.innerHTML = timePlayedMin;
    }
    if(timePlayedMin > 9){
        timePlayedSec = 0;
        timePlayedSec2nd = 0;
        timePlayedMin = 0;
        second1d.innerHTML = 0;
        second2d.innerHTML = 0;
        minute1d.innerHTML = 0;
        timePlayedMin2nd++;
        minute2d.innerHTML = timePlayedMin2nd;
    }
}

// Link Buttons to Buy 
buyAutoButton.addEventListener('click',()=>{
    getAutoClicker();
})
button1.addEventListener('click',()=>{
    getCash(baseClicks);
})
rebirthButton.addEventListener('click',()=>{
    buyRebirth();
})
timeUpgradeButton.addEventListener('click',()=>{
    timeUpgrade();
})
timeXUpgradeButton.addEventListener('click',()=>{
    timeXUpgrade();
})
    //Test buttons
    testButton.addEventListener('click',()=>{
        testCash(1);
    })
    testInfoButton.addEventListener('click', printCheck);



//Save Game
let saveGameInterval;

function saveGameLoop(){
    saveGame();
}

function saveGameLoopUpdate(){
    saveGameInterval = setInterval(saveGameLoop, 50);
}

// Check for purchases available
let checkPurchaseInterval;

function purchasableLoop(){
    clickerCost = Math.floor(10 * Math.pow(1.15,autoClicker));     
    rebirthCost = Math.floor(1000 * Math.pow(2, rebirths));
    timeUpgradeCost = Math.floor(2 * Math.pow(1.5, timeAmountBought));
    checkPurchasable();
}

function checkLoopUpdate(){
    checkPurchaseInterval = setInterval(purchasableLoop, 100);
}

function stopCheckLoopUpdate() {
    clearInterval(checkPurchaseInterval);
}

// Color loop
let rgbLoopVar;

function rgbLoop(){
    rgbBackground();
}

function rgbLoopUpdate(){
    rgbLoopVar = setInterval(rgbLoop, 20);
}

function stopRgbLoopUpdate() {
    clearInterval(rgbLoopVar);
}


// MAIN GAME LOOP UPDATE 

let mainGameLoopVar;

function gameLoop(){
    timePlayedUpdate();
    timeMultiplier = Math.floor(1 * Math.pow(1.0085, totalTimePlayed));
    if(timeXUpgradePurchase == true){
        getCash(autoClicker * timeMultiplier);
    } else {
        getCash(autoClicker);
    }
}
 //timeSpeed
function gameLoopUpdate(){
    mainGameLoopVar = setInterval(gameLoop, timeSpeed);
}

function stopGameLoopUpdate() {
    clearInterval(mainGameLoopVar);
}

saveGame();
rgbLoopUpdate();
checkLoopUpdate();
gameLoopUpdate();
saveGameLoopUpdate();
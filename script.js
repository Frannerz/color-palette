//colour sections
const colorSection1 = document.getElementById('colour1');
const colorSection2 = document.getElementById('colour2');
const colorSection3 = document.getElementById('colour3');
const colorSection4 = document.getElementById('colour4');
const colorSection5 = document.getElementById('colour5');

//colour text 
const colorText1 = document.getElementById('whichColour1');
const colorText2 = document.getElementById('whichColour2');
const colorText3 = document.getElementById('whichColour3');
const colorText4 = document.getElementById('whichColour4');
const colorText5 = document.getElementById('whichColour5');

//lock icons
const lock1 = document.getElementById('lock-icon');
const lock2 = document.getElementById('lock-icon2');
const lock3 = document.getElementById('lock-icon3');
const lock4 = document.getElementById('lock-icon4');
const lock5 = document.getElementById('lock-icon5');

//fave icons
const fave1 = document.getElementById('fave1');
const fave2 = document.getElementById('fave2');
const fave3 = document.getElementById('fave3');
const fave4 = document.getElementById('fave4');
const fave5 = document.getElementById('fave5');

//Colour arrays
let faveColors = []
let section1colors = ['e48cf4'];
let section2colors = ['8ccef4'];
let section3colors = ['f5f6a7'];
let section4colors = ['a7f6c1'];
let section5colors = ['c8a7f6'];

//Favourites collection:
let favouriteCollection = {}

//Favourites section variables
const clearFavourites = document.getElementById('clearFaves')
const colorTableBody = document.querySelector("#colorTable tbody");

//Copy buttons
const copyButton1 = document.getElementById("copy");
const copyButton2 = document.getElementById("copy2");
const copyButton3 = document.getElementById("copy3");
const copyButton4 = document.getElementById("copy4");
const copyButton5 = document.getElementById("copy5");

//generate hex numbers:
const generateRandomHex=()=>{
    let result = '';
    const characters = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  }


//functions to change the colors
function getColour1 (){
  const randomColor1 = generateRandomHex();
  changeColorNew(randomColor1,colorSection1,colorText1,section1colors);
}
function getColour2 (){
  const randomColor2 = generateRandomHex();
  changeColorNew(randomColor2,colorSection2,colorText2,section3colors);
}
function getColour3 (){
  const randomColor3 = generateRandomHex();
  changeColorNew(randomColor3,colorSection3,colorText3,section3colors);
}
function getColour4 (){
  const randomColor4 = generateRandomHex();
  changeColorNew(randomColor4,colorSection4,colorText4,section4colors);
}
function getColour5 (){
  const randomColor5 = generateRandomHex();
  changeColorNew(randomColor5,colorSection5,colorText5,section5colors);
}

const changeColorNew = (randomColor, colorSection,colorText,array ) => {
  colorSection.style.backgroundColor = `#${randomColor}`;
  colorText.innerHTML=`#${randomColor}`;
  array.push(randomColor);
}

//change lock functions
function changeLock(lock) {
  if (lock.src.endsWith("lock.png")) {
    lock.src = "images/lockClosed.png";
  } else if (lock.src.endsWith("lockClosed.png")) {
    lock.src = "images/lock.png";
  }
}

lock1.addEventListener ('click', function() {
  changeLock(lock1);
});
lock2.addEventListener ('click', function() {
  changeLock(lock2);
});
lock3.addEventListener ('click', function() {
  changeLock(lock3);
});
lock4.addEventListener ('click', function() {
  changeLock(lock4);
});
lock5.addEventListener ('click', function() {
  changeLock(lock5);
});


// Listen for the space key press event and activate color change if lock is open
const activateColorChange = (event) => {
    if (event.code === 'Space' || event.code === 'SpaceBar') {
      if(lock1.src.endsWith("lock.png")){
        getColour1();
      } else if (lock1.src.endsWith("lockClosed.png")){
        lock1.removeEventListener('click',activateColorChange);
      }
      if(lock2.src.endsWith("lock.png")){
        getColour2();
      } else if (lock2.src.endsWith("lockClosed.png")){
        lock2.removeEventListener('click',activateColorChange);
      }
      if(lock3.src.endsWith("lock.png")){
        getColour3();
      } else if (lock3.src.endsWith("lockClosed.png")){
        lock3.removeEventListener('click',activateColorChange);
      }
      if(lock4.src.endsWith("lock.png")){
        getColour4();
      } else if (lock4.src.endsWith("lockClosed.png")){
        lock4.removeEventListener('click',activateColorChange);
      }
      if(lock5.src.endsWith("lock.png")){
        getColour5();
      } else if (lock5.src.endsWith("lockClosed.png")){
        lock5.removeEventListener('click',activateColorChange);
      }
    }
};

document.addEventListener('keydown', activateColorChange)

//favourite colors section
//side panel function
function togglePanel() {
  const sidePanel = document.getElementById("sidePanel");
  sidePanel.classList.toggle("open");
}


//adding a table of favourite colours
function addColorToTable(index, color) {
    const newRow = document.createElement("tr");
    const colorCell = document.createElement("td");
    
    colorCell.style.backgroundColor=`#${color}`;
    colorCell.textContent = `#${color}`;

    newRow.appendChild(colorCell);
    colorTableBody.appendChild(newRow);
}

function clearFaves(){
  const colorTableBody = document.querySelector("#colorTable tbody");
  
  while (colorTableBody.firstChild) {
    colorTableBody.removeChild(colorTableBody.firstChild);
  }
  faveColors = [];
  showNoFaves();
  emptyHearts();
}

function showNoFaves(){
  document.getElementById('noFaves').style.display='block';
  hideClearButton()
}

function hideNoFaves(){
  document.getElementById('noFaves').style.display='none';
  showClearButton()
}


function showClearButton(){
  clearFavourites.style.display='block';
}

function hideClearButton(){
  clearFavourites.style.display='none';
}

function emptyHearts(){
  const hearts = document.getElementsByClassName('heart');
  for(let i =0; i<hearts.length; i++){
    hearts[i].src="images/emptyHeart.png"
  }
}


// adding numbers to faves
function addColor1toFaves(){
  color1 = section1colors[section1colors.length - 1];
  addToFaves(color1, fave1)
}
function addColor2toFaves(){
  color2 = section2colors[section2colors.length - 1];
  addToFaves(color2, fave2)
};

function addColor3toFaves(){
  color3 = section3colors[section3colors.length - 1];
  addToFaves(color3, fave3)
};

function addColor4toFaves(){
  color4 = section4colors[section4colors.length - 1];
  addToFaves(color4, fave4)
};

function addColor5toFaves(){
  color5 = section5colors[section5colors.length - 1];
  addToFaves(color5, fave5)
};

// Event listeners for fave functions

document.addEventListener("DOMContentLoaded", function () {
  fave1.addEventListener('click', addColor1toFaves)
});

document.addEventListener("DOMContentLoaded", function () {
  fave2.addEventListener('click', addColor2toFaves)
});
document.addEventListener("DOMContentLoaded", function () {
  fave3.addEventListener('click', addColor3toFaves)
});

document.addEventListener("DOMContentLoaded", function () {
  fave4.addEventListener('click', addColor4toFaves)
});

document.addEventListener("DOMContentLoaded", function () {
  fave5.addEventListener('click', addColor5toFaves)
});
clearFavourites.addEventListener('click', clearFaves)

//add to faves function
function addToFaves(color, fave) {
  if (!faveColors.includes(color) && faveColors.length<10) {
    fave.src="images/filledHeart.png";
    faveColors.push(color);
    addColorToTable(faveColors.length, color);
    addedToFavesMessage();
    hideNoFaves();
  } else if (faveColors.includes(color) && faveColors.length<10){
    colourAlreadyAdded()
  } else {
    favesFullMessage()
  }
  setTimeout(() => {
    fave.src="images/emptyHeart.png";
  }, 200);
  return null; 
}


//favourites messages!
const messageElement=document.getElementById('message');

function addedToFavesMessage() {
    messageElement.textContent = 'Colour added to Faves!';
    messageElement.style.display = "block";
  setTimeout(() => {
    messageElement.style.display = "none";
  }, 1000);
  } 

 function favesFullMessage() {
    messageElement.textContent = 'Favourites list is full';
    messageElement.style.display = "block";
  setTimeout(() => {
    messageElement.style.display = "none";
  }, 1000);
  }

  function colourAlreadyAdded() {
    messageElement.textContent = 'Colour already added to favourites';
    messageElement.style.display = "block";
  setTimeout(() => {
    messageElement.style.display = "none";
  }, 1000);
  }

//copy to clipboard functions
function copyColour1(){
  const colorCode1 = whichColour1.textContent;
  copyColourCode(colorCode1, copyButton1)
}

function copyColour2(){
  const colorCode2 = whichColour2.textContent;
  copyColourCode(colorCode2, copyButton2)
}

function copyColour3(){
  const colorCode3 = whichColour3.textContent;
  copyColourCode(colorCode3, copyButton3)
}

function copyColour4(){
  const colorCode4 = whichColour4.textContent;
  copyColourCode(colorCode4, copyButton4)
}

function copyColour5(){
  const colorCode5 = whichColour5.textContent;
  copyColourCode(colorCode5, copyButton5)
}

// copy colour function (initiated by calling other functions)
function copyColourCode(colorCode, copyButton){
  copyToClipboard(colorCode);
  copyButton.src="images/copyFilled.png"
  setTimeout(() => {
    copyButton.src="images/copy.png";
  }, 200);
};


//function to initialise show message
//.then is a promise, executed if 'writeText' is successful
//.catch is another promise based method, executed if an error occurs
function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      showMessage("Copied to clipboard: " + text);
    })
    .catch((error) => {
      console.error("Clipboard write error:", error);
    });
}

//display the copied message
function showMessage(message) {
  messageElement.textContent = message;
  messageElement.style.display = "block";
  setTimeout(() => {
    messageElement.style.display = "none";
  }, 500);
}

//event listeners for copy buttons
copyButton1.addEventListener("click", copyColour1) 
copyButton2.addEventListener("click", copyColour2);
copyButton3.addEventListener("click", copyColour3);
copyButton4.addEventListener("click", copyColour4);
copyButton5.addEventListener("click", copyColour5);
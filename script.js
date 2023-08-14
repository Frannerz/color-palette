//colour sections
const colorSection1 = document.getElementById('colour1');
const colorSection2 = document.getElementById('colour2');
const colorSection3 = document.getElementById('colour3');
const colorSection4 = document.getElementById('colour4');
const colorSection5 = document.getElementById('colour5');

//lock icons
const lock = document.getElementById('lock-icon');
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


//Copy buttons
const copyButton = document.getElementById("copy");
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

//section1:
//function to change the color 
const changeColor = () => {
    const randomColor = generateRandomHex();
    colorSection1.style.backgroundColor = `#${randomColor}`;
    document.getElementById('whichColour1').innerHTML=`#${randomColor}`;
    section1colors.push(randomColor);
    fave1.src="images/emptyHeart.png";
    fave2.src="images/emptyHeart.png";
    fave3.src="images/emptyHeart.png";
    fave4.src="images/emptyHeart.png";
    fave5.src="images/emptyHeart.png";
    removeCopiedImage ()
}

//change lock
function changeLock() {
  if (lock.src.endsWith("lock.png")) {
    lock.src = "images/lockClosed.png";
  } else if (lock.src.endsWith("lockClosed.png")) {
    lock.src = "images/lock.png";
  }
}

lock.addEventListener('click', changeLock)



//section2:
//function to change the color 
function changeColor2() {
  const randomColor = generateRandomHex();
  colorSection2.style.backgroundColor = `#${randomColor}`;
  document.getElementById('whichColour2').innerHTML = `#${randomColor}`;
  section2colors.push(randomColor);
}

//change lock2
function changeLock2() {
  if (lock2.src.endsWith("lock.png")) {
    lock2.src = "images/lockClosed.png";
  } else if (lock2.src.endsWith("lockClosed.png")) {
    lock2.src = "images/lock.png";
  }
}

lock2.addEventListener('click', changeLock2)


//section3:
//function to change the color 
const changeColor3 = () => {
  const randomColor = generateRandomHex();
  colorSection3.style.backgroundColor = `#${randomColor}`;
  document.getElementById('whichColour3').innerHTML=`#${randomColor}`;
  section3colors.push(randomColor);
}

//change lock3
function changeLock3() {
  if (lock3.src.endsWith("lock.png")) {
    lock3.src = "images/lockClosed.png";
  } else if (lock3.src.endsWith("lockClosed.png")) {
    lock3.src = "images/lock.png";
  }
}

lock3.addEventListener('click', changeLock3)

//section4:
//function to change the color 
const changeColor4 = () => {
  const randomColor = generateRandomHex();
  colorSection4.style.backgroundColor = `#${randomColor}`;
  document.getElementById('whichColour4').innerHTML=`#${randomColor}`;
  section4colors.push(randomColor);
}

//change lock4
function changeLock4() {
  if (lock4.src.endsWith("lock.png")) {
    lock4.src = "images/lockClosed.png";
  } else if (lock4.src.endsWith("lockClosed.png")) {
    lock4.src = "images/lock.png";
  }
}

lock4.addEventListener('click', changeLock4)

//section5:
//function to change the color 
const changeColor5 = () => {
  const randomColor = generateRandomHex();
  colorSection5.style.backgroundColor = `#${randomColor}`;
  document.getElementById('whichColour5').innerHTML=`#${randomColor}`;
  section5colors.push(randomColor);
}

//change lock5


function changeLock5() {
  if (lock5.src.endsWith("lock.png")) {
    lock5.src = "images/lockClosed.png";
  } else if (lock5.src.endsWith("lockClosed.png")) {
    lock5.src = "images/lock.png";
  }
}

lock5.addEventListener('click', changeLock5)

// Listen for the space key press event and activate color change if lock is open
const activateColorChange = (event) => {
    if (event.code === 'Space' || event.code === 'SpaceBar') {
      if(lock.src.endsWith("lock.png")){
        changeColor();
      } else if (lock.src.endsWith("lockClosed.png")){
        lock.removeEventListener('click',activateColorChange);
      }
      if(lock2.src.endsWith("lock.png")){
        changeColor2();
      } else if (lock2.src.endsWith("lockClosed.png")){
        lock2.removeEventListener('click',activateColorChange);
      }
      if(lock3.src.endsWith("lock.png")){
        changeColor3();
      } else if (lock3.src.endsWith("lockClosed.png")){
        lock3.removeEventListener('click',activateColorChange);
      }
      if(lock4.src.endsWith("lock.png")){
        changeColor4();
      } else if (lock4.src.endsWith("lockClosed.png")){
        lock4.removeEventListener('click',activateColorChange);
      }
      if(lock5.src.endsWith("lock.png")){
        changeColor5();
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
const colorTableBody = document.querySelector("#colorTable tbody");

function addColorToTable(index, color) {
    const newRow = document.createElement("tr");
    const colorCell = document.createElement("td");
    
    colorCell.style.backgroundColor=`#${color}`;
    colorCell.textContent = `#${color}`;

    newRow.appendChild(colorCell);
    colorTableBody.appendChild(newRow);
}

const clearFavourites = document.getElementById('clearFaves')

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

clearFavourites.addEventListener('click', clearFaves)


// adding numbers to faves
//color 1


function addColor1toFaves(){
  color1 = section1colors[section1colors.length - 1];
  addToFaves(color1, fave1)
}

document.addEventListener("DOMContentLoaded", function () {
  fave1.addEventListener('click', addColor1toFaves)
});

//colour 2


function addColor2toFaves(){
  color2 = section2colors[section2colors.length - 1];
  addToFaves(color2, fave2)
};

document.addEventListener("DOMContentLoaded", function () {
  fave2.addEventListener('click', addColor2toFaves)
});

//colour 3

function addColor3toFaves(){
  color3 = section3colors[section3colors.length - 1];
  addToFaves(color3, fave3)
};

document.addEventListener("DOMContentLoaded", function () {
  fave3.addEventListener('click', addColor3toFaves)
});

//colour 4
function addColor4toFaves(){
  color4 = section4colors[section4colors.length - 1];
  addToFaves(color4, fave4)
};

document.addEventListener("DOMContentLoaded", function () {
  fave4.addEventListener('click', addColor4toFaves)
});

//colour 5


function addColor5toFaves(){
  color5 = section5colors[section5colors.length - 1];
  addToFaves(color5, fave5)
};

document.addEventListener("DOMContentLoaded", function () {
  fave5.addEventListener('click', addColor5toFaves)
});


//add to faves function
function addToFaves(color, fave) {
  if (!faveColors.includes(color) && faveColors.length<10) {
    fave.src="images/filledHeart.png";
    faveColors.push(color);
    addColorToTable(faveColors.length, color);
    addedToFavesMessage();
    hideNoFaves();
  } else {
    favesFullMessage()
  }
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



//copy to clipboard functions for 1st color

//find the colorCode and initialise copyToClipboard function
document.getElementById("copy").addEventListener("click", () => {
  const colorCode = whichColour1.textContent; 
  copyToClipboard(colorCode);
  copyButton.src="images/copyFilled.png"
  copyButton2.src="images/copy.png";
  copyButton3.src="images/copy.png";
  copyButton4.src="images/copy.png";
  copyButton5.src="images/copy.png";
});

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

//const messageElement=document.getElementById('message');

//display the message
function showMessage(message) {
  messageElement.textContent = message;
  messageElement.style.display = "block";
  setTimeout(() => {
    messageElement.style.display = "none";
  }, 1000);
}

//copy to clipboard function for 2nd color
//find the colorCode and initialise copyToClipboard function
document.getElementById("copy2").addEventListener("click", () => {
  const colorCode2 = whichColour2.textContent; 
  copyToClipboard(colorCode2);
  copyButton2.src="images/copyFilled.png"
  copyButton.src="images/copy.png";
  copyButton3.src="images/copy.png";
  copyButton4.src="images/copy.png";
  copyButton5.src="images/copy.png";
});


//copy to clipboard function for 3rd color
//find the colorCode and initialise copyToClipboard function
document.getElementById("copy3").addEventListener("click", () => {
  const colorCode3 = whichColour3.textContent; 
  copyToClipboard(colorCode3);
  copyButton3.src="images/copyFilled.png"
  copyButton.src="images/copy.png";
  copyButton2.src="images/copy.png";
  copyButton4.src="images/copy.png";
  copyButton5.src="images/copy.png";
});

//copy to clipboard function for 4th color
//find the colorCode and initialise copyToClipboard function
document.getElementById("copy4").addEventListener("click", () => {
  const colorCode4 = whichColour4.textContent; 
  copyToClipboard(colorCode4);
  copyButton4.src="images/copyFilled.png"
  copyButton.src="images/copy.png";
  copyButton3.src="images/copy.png";
  copyButton2.src="images/copy.png";
  copyButton5.src="images/copy.png";
});

//copy to clipboard function for 4th color
//find the colorCode and initialise copyToClipboard function
document.getElementById("copy5").addEventListener("click", () => {
  const colorCode5 = whichColour5.textContent; 
  copyToClipboard(colorCode5);
  copyButton5.src="images/copyFilled.png"
  copyButton.src="images/copy.png";
  copyButton3.src="images/copy.png";
  copyButton4.src="images/copy.png";
  copyButton2.src="images/copy.png";
});

function removeCopiedImage (){
  copyButton.src="images/copy.png"
  copyButton2.src="images/copy.png";
  copyButton3.src="images/copy.png";
  copyButton4.src="images/copy.png";
  copyButton5.src="images/copy.png";
}




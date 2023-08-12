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
const changeColor2 = () => {
  const randomColor = generateRandomHex();
  colorSection2.style.backgroundColor = `#${randomColor}`;
  document.getElementById('whichColour2').innerHTML=`#${randomColor}`;
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
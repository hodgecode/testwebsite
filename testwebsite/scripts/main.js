var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bentley.JPG') {
      myImage.setAttribute ('src','images/bentley3.jpg');
    } else {
      myImage.setAttribute ('src','images/bentley.JPG');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Bentley says HI!, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Bentley says HI!, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
let myImage = document.querySelector("img");

myImage.onclick = function () {
  let imgSrc = myImage.getAttribute("src");
  if (imgSrc === "images/sQ.jpg") {
    myImage.setAttribute("src", "images/download.jpeg");
  } else {
    myImage.setAttribute("src", "images/sQ.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Stoicism is cool, " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Stoicism is cool, " + storedName;
}

myButton.onclick = function () {
  setUserName();
};

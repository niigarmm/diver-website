document.addEventListener("DOMContentLoaded", function () {
  let header = document.querySelector(".body");
  let bodyItemA = document.querySelectorAll(".body-item a");
  let headerOffset = header.offsetTop;

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > headerOffset) {
      header.classList.add("fixed");
      bodyItemA.forEach((element, index) => {
        if (index === 0) {
          element.setAttribute("style", "color: blue !important");
        } else {
          element.setAttribute("style", "color: black !important");
        }
      });
    } else {
      header.classList.remove("fixed");
      bodyItemA.forEach((element, index) => {
        if (index === 0) {
          element.setAttribute("style", "color: yellow !important");
        } else {
          element.setAttribute("style", "color: white !important");
        }
      });
    }
  });
});

let first = document.querySelector(".first");
let firstImg = document.querySelector(".maldive-img");
let firstButton = document.querySelector(".button");
first.addEventListener("mouseover", (event) => {
  firstImg.style.width = "400px";
  firstImg.style.transition = "0.4s";
  firstImg.style.border = "none";
  first.style.border = "1px solid rgb(217, 217, 217)";
  first.style.boxShadow = "1px 3px 1px 1px rgb(217, 217, 217)";
  firstButton.style.border = "2px solid rgb(37, 72, 160)";
  firstButton.style.borderRadius = "5px";
  firstButton.style.color = "rgb(37, 72, 160)";
  firstButton.style.padding = "5px";
  firstButton.style.fontSize = "15px";
  firstButton.style.transition = "0.4s";
});
first.addEventListener("mouseout", (event) => {
  firstImg.style.width = "361px";
  firstImg.style.border = "1px solid rgb(203, 203, 203)";
  first.style.border = "none";
  first.style.boxShadow = "none";
  firstButton.style.border = "none";
  firstButton.style.color = "grey";
  firstButton.style.fontSize = "17px";
  firstButton.style.transition = "0.3s";
  firstButton.style.borderRadius = "0px";
  firstButton.style.borderBottom = "2px solid grey";
});

let second = document.querySelector(".second");
let secondImg = document.querySelector(".indonesia-img");
let secondButton = document.querySelector(".button-second");
second.addEventListener("mouseover", (event) => {
  secondImg.style.width = "400px";
  secondImg.style.transition = "0.4s";
  secondImg.style.border = "none";
  second.style.border = "1px solid rgb(217, 217, 217)";
  second.style.boxShadow = "1px 3px 1px 1px rgb(217, 217, 217)";
  secondButton.style.border = "2px solid rgb(37, 72, 160)";
  secondButton.style.borderRadius = "5px";
  secondButton.style.color = "rgb(37, 72, 160)";
  secondButton.style.padding = "5px";
  secondButton.style.fontSize = "15px";
  secondButton.style.transition = "0.4s";
});
second.addEventListener("mouseout", (event) => {
  secondImg.style.width = "361px";
  secondImg.style.border = "1px solid rgb(203, 203, 203)";
  second.style.border = "none";
  second.style.boxShadow = "none";
  secondButton.style.border = "none";
  secondButton.style.color = "grey";
  secondButton.style.fontSize = "17px";
  secondButton.style.transition = "0.3s";
  secondButton.style.borderRadius = "0px";
  secondButton.style.borderBottom = "2px solid grey";
});

let third = document.querySelector(".third");
let thirdImg = document.querySelector(".third-img");
let thirdButton = document.querySelector(".button-third");
third.addEventListener("mouseover", (event) => {
  thirdImg.style.width = "400px";
  thirdImg.style.transition = "0.4s";
  thirdImg.style.border = "none";
  third.style.border = "1px solid rgb(217, 217, 217)";
  third.style.boxShadow = "1px 3px 1px 1px rgb(217, 217, 217)";
  thirdButton.style.border = "2px solid rgb(37, 72, 160)";
  thirdButton.style.borderRadius = "5px";
  thirdButton.style.color = "rgb(37, 72, 160)";
  thirdButton.style.padding = "5px";
  thirdButton.style.fontSize = "15px";
  thirdButton.style.transition = "0.4s";
});
third.addEventListener("mouseout", (event) => {
  thirdImg.style.width = "361px";
  thirdImg.style.border = "1px solid rgb(203, 203, 203)";
  third.style.border = "none";
  third.style.boxShadow = "none";
  thirdButton.style.border = "none";
  thirdButton.style.color = "grey";
  thirdButton.style.fontSize = "17px";
  thirdButton.style.transition = "0.3s";
  thirdButton.style.borderRadius = "0px";
  thirdButton.style.borderBottom = "2px solid grey";
});

let firstBtn = document.querySelector(".panel-first-btn");
let secondBtn = document.querySelector(".panel-second-btn");
let thirdBtn = document.querySelector(".panel-third-btn");
let panelFirst = document.querySelector(".panel-first");
let panelSecond = document.querySelector(".panel-second");
let panelThird = document.querySelector(".panel-third");

secondBtn.addEventListener("click", (event) => {
  panelSecond.style.display = "flex";
  panelFirst.style.display = "none";
  panelThird.style.display = "none";
  event.target.style.backgroundColor = "blue";
  firstBtn.style.backgroundColor = "rgb(174, 174, 174)";
  thirdBtn.style.backgroundColor = "rgb(174, 174, 174)";
});

thirdBtn.addEventListener("click", (event) => {
  panelSecond.style.display = "none";
  panelThird.style.display = "flex";
  event.target.style.backgroundColor = "blue";
  secondBtn.style.backgroundColor = "rgb(174, 174, 174)";
});
firstBtn.addEventListener("click", (event) => {
  panelSecond.style.display = "none";
  panelThird.style.display = "none";
  panelFirst.style.display = "flex";
  event.target.style.backgroundColor = "blue";
  secondBtn.style.backgroundColor = "rgb(174, 174, 174)";
  thirdBtn.style.backgroundColor = "rgb(174, 174, 174)";
});

let i = document.querySelector(".fa-angle-right");
let experienceInfo = document.querySelector(".experience-info");

i.addEventListener("click", (event) => {
  if (experienceInfo.style.display === "none") {
    experienceInfo.style.display = "flex";
    i.style.backgroundColor = "blue";
    i.style.color = "white";
    i.style.transition = "0.6s";
    experienceInfo.style.transition = "6s";
  } else {
    experienceInfo.style.display = "none";
    i.style.backgroundColor = "white";
    i.style.color = "blue";
    i.style.transition = "0.6s";
    experienceInfo.style.transition = "6s";
  }
});

let iSecond = document.querySelector(".experience-second i");
let experienceSecondInfo = document.querySelector(".experience-info-second");

iSecond.addEventListener("click", (event) => {
  if (experienceSecondInfo.style.display === "none") {
    experienceSecondInfo.style.display = "flex";
    iSecond.style.backgroundColor = "blue";
    iSecond.style.color = "white";
    iSecond.style.transition = "0.6s";
    experienceSecondInfo.style.transition = "6s";
  } else {
    experienceSecondInfo.style.display = "none";
    iSecond.style.backgroundColor = "white";
    iSecond.style.color = "blue";
    iSecond.style.transition = "0.6s";
    experienceSecondInfo.style.transition = "6s";
  }
});

let iThird = document.querySelector(".experience-third i");
let experienceThirdInfo = document.querySelector(".experience-info-third");

iThird.addEventListener("click", (event) => {
  if (experienceThirdInfo.style.display === "none") {
    experienceThirdInfo.style.display = "flex";
    iThird.style.backgroundColor = "blue";
    iThird.style.color = "white";
    iThird.style.transition = "0.6s";
    experienceThirdInfo.style.transition = "6s";
  } else {
    experienceThirdInfo.style.display = "none";
    iThird.style.backgroundColor = "white";
    iThird.style.color = "blue";
    iThird.style.transition = "0.6s";
    experienceThirdInfo.style.transition = "6s";
  }
});

let firstClient = document.querySelector(".first-client");
firstClient.addEventListener("mouseover", (event) => {
  firstClient.style.opacity = "0.6";
  firstClient.style.transition = "0.3s";
});
firstClient.addEventListener("mouseout", (event) => {
  firstClient.style.opacity = "100";
  firstClient.style.transition = "0.3s";
});

let secondClient = document.querySelector(".second-client");
secondClient.addEventListener("mouseover", (event) => {
  secondClient.style.opacity = "0.6";
  secondClient.style.transition = "0.3s";
});
secondClient.addEventListener("mouseout", (event) => {
  secondClient.style.opacity = "100";
  secondClient.style.transition = "0.3s";
});

let thirdClient = document.querySelector(".third-client");
thirdClient.addEventListener("mouseover", (event) => {
  thirdClient.style.opacity = "0.6";
  thirdClient.style.transition = "0.3s";
});
thirdClient.addEventListener("mouseout", (event) => {
  thirdClient.style.opacity = "100";
  thirdClient.style.transition = "0.3s";
});

let inputElement = document.querySelector(".middle-input");
inputElement.addEventListener("focus", function () {
  inputElement.placeholder = "";
  inputElement.style.outline = "none";
});

inputElement.addEventListener("blur", function () {
  inputElement.placeholder = "Enter your email address";
});

let buttonSubscribe = document.querySelector(".subscribe");
buttonSubscribe.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "blue";
  event.target.style.color = "white";
  event.target.style.transition = "0.6s";
});
buttonSubscribe.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "#ffd249";
  event.target.style.color = "black";
  event.target.style.transition = "0.6s";
});

let peterImg = document.querySelector(".peter img");
let peter = document.querySelector(".peter");
peter.addEventListener("mouseover", (event) => {
  peterImg.style.width = "276px";
  peterImg.style.height = "232px";
  peterImg.style.transition = "0.3s";
});
peter.addEventListener("mouseout", (event) => {
  peterImg.style.width = "270px";
  peterImg.style.height = "225px";
  peterImg.style.transition = "0.3s";
});

let janeImg = document.querySelector(".jane img");
let jane = document.querySelector(".jane");
jane.addEventListener("mouseover", (event) => {
  janeImg.style.width = "276px";
  janeImg.style.height = "232px";
  janeImg.style.transition = "0.3s";
});
jane.addEventListener("mouseout", (event) => {
  janeImg.style.width = "270px";
  janeImg.style.height = "225px";
  janeImg.style.transition = "0.3s";
});

let johnImg = document.querySelector(".john img");
let john = document.querySelector(".john");
john.addEventListener("mouseover", (event) => {
  johnImg.style.width = "276px";
  johnImg.style.height = "232px";
  johnImg.style.transition = "0.3s";
});
john.addEventListener("mouseout", (event) => {
  johnImg.style.width = "270px";
  johnImg.style.height = "225px";
  johnImg.style.transition = "0.3s";
});

let samImg = document.querySelector(".sam img");
let sam = document.querySelector(".sam");
sam.addEventListener("mouseover", (event) => {
  samImg.style.width = "276px";
  samImg.style.height = "232px";
  samImg.style.transition = "0.3s";
});
sam.addEventListener("mouseout", (event) => {
  samImg.style.width = "270px";
  samImg.style.height = "225px";
  samImg.style.transition = "0.3s";
});

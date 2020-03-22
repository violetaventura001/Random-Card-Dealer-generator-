/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = () => {
  let selectRandom = arrayRandom => [Math.floor(Math.random() * arrayRandom)];

  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "K",
    "Q",
    "J"
  ];
  let suites = ["&spades;", "&clubs;", "&hearts;", "&diams;"];

  let randomSuites = () => {
    let suiteIcon = document.getElementById("suites");
    let iconRandom = selectRandom(suites.length);
    // console.log(iconRandom);
    for (s in suiteIcon) {
      suiteIcon(s).innerHTML = suites[iconRandom];
      //console.log(suiteIcon(s));
      if (iconRandom === 2 || iconRandom === 3) {
        suiteIcon(s).style.color = "white";
      }
    }
  };
  let randomNumber = () => {
    let numberRandom = selectRandom(numbers.length);
    document.getElementById("numbers").innerHTML = numbers[numberRandom];
    console.log(numberRandom);
  };
};

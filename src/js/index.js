/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = () => {
  const selectRandomIndex = array =>
    array[Math.floor(Math.random() * (array.length - 1 - 0) + 0)];
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
  let suites = ["diamonds", "hearts", "spades", "clubs"];
  const suiteChar = selectRandomIndex(suites);
  const numberSelect = selectRandomIndex(numbers);
  const card = document.querySelector(".card");
  console.log(card, numberSelect, suiteChar);

  //   document.querySelector(".card").classlist.add(randonsuites());
  //   document.querySelector(".card").innerHTML = randonnumbers();
};

let randonsuites = () => {
  let indexsuites = Math.floor(Math.random() * Math.floor(suites.length));
  return suites[indexsuites];
};

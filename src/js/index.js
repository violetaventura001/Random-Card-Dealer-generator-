/* eslint-disable */
import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";
window.onload = () => {
  let suites = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
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
  const getRand = x => {
    let randNum = Math.floor(Math.random() * x.length);
    return x[randNum];
  };
  let test = (document.querySelector("#suites").innerHTML = getRand(suites));
  document.querySelector("#numbers").innerHTML = getRand(numbers);
  document.querySelector("#suites2").innerHTML = test;
};

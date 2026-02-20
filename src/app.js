import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here

function excusesGenerator(arr, arrImg) {
  let str = "";
  let randomIndex = (arr1) => Math.floor(Math.random() * arr1.length);
  let randomWord = (arr2, index) => arr2[index];
  let img = randomWord(arrImg, randomIndex(arrImg));

  for (let i = 0; i < arr.length; i++) {
    let currentArray = arr[i];
    str += randomWord(currentArray, randomIndex(arr[i])) + " ";
  }

  document.getElementById("excuse").innerHTML = str;
  document.getElementById("image").innerHTML =
    `<img src="${img}" alt="excuse img" width:"auto" height="150px">`;
}

let images = [
  "./assets/img/cr7.jpg",
  "./assets/img/pat.jpg",
  "./assets/img/rigo-baby.jpg",
  "./assets/img/pog.jpg",
];

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying",
];
const unifyArrays = [who, action, what, when];

window.onload = function () {
  excusesGenerator(unifyArrays, images);
};

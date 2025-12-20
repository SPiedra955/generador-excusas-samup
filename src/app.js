import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  var excuses = {
    questions: [who, action, what, when]
  }

  function excusesGenerator(arr) {
    let sentence = "";
    for (let i = 0; i < arr.questions.length; i++) {
      let randomWord = Math.floor(Math.random() * arr.questions[i].length);
      sentence += arr.questions[i][randomWord] + ' '
      console.log(sentence);
    }
    document.getElementById("excuse").innerHTML = sentence;
  }

  excusesGenerator(excuses);

};

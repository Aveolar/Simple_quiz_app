const ul = document.getElementById('ul');
const scoreCard = document.querySelector('.scoreCard');
const totalScore = document.querySelector('.score-card');
const btn = document.getElementById('next');
const quizQuestions = document.querySelector('.quiz');
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');

let app = {
  questions: [
    {
      q: 'HTML stands for?',
      options: ['Hyper Text Markup Language', 'High Text Markup Language', 'Hyper Tabular Markup Language', 'None of these'],
      answer: 1
    },
    {
      q: 'which of the following tag is used to mark a begining of paragraph ?',
      options: ['td', 'br', 'p', 'tr'],
      answer: 3
    },
    {
      q: 'Correct HTML tag for the largest heading is ?', options: ['h4', 'h1', 'h8', 'h9'],
      answer: 2
    },
    {
      q: "Who invented JavaScript?",
      options: ['Douglas Crockford', 'Sheryl Sandberg', 'Sheryl Sandberg', 'Brendan Eich'],
      answer: 4
    },
    {
      q: "Which one of these is a JavaScript package manager?",
      options: ['Node.js', 'TypeScript', 'npm', 'All of the above'],
      answer: 3
    }
  ],
  index: 0,
  load: function () {
    if (this.index <= this.questions.length - 1) {
      quizQuestions.textContent = this.index + 1 + '. ' + this.questions[this.index].q;
      op1.innerText = this.questions[this.index].options[0];
      op2.innerText = this.questions[this.index].options[1];
      op3.innerText = this.questions[this.index].options[2];
      op4.innerText = this.questions[this.index].options[3];
      this.scoreCard();
    }
    else {
      quizQuestions.innerHTML = `Your total score is ** ${this.score} ** <br/><br/>Reload page to try again`;
      totalScore.className = 'total';
      op1.style.display = "none";
      op2.style.display = "none";
      op3.style.display = "none";
      op4.style.display = "none";
      btn.style.display = "none";
      this.scoreCard();
    }
  },
  next: function () {
    this.index++;
    this.load();
  },
  check: function (ele) {
    let id = ele.id.split('');

    if (id[id.length - 1] == this.questions[this.index].answer) {
      this.score++;
      ele.style.backgroundColor = 'green';
      ele.style.color = '#fff';
      this.scoreCard();
    }
    else {
      ele.style.backgroundColor = 'red';
      ele.style.color = '#fff';
    }
    
  },
  notClickAble: function () {
    for (let i = 0; i < ul.children.length; i++) {
      ul.children[i].style.pointerEvents = "none";
    }
  },

  clickAble: function () {
    for (let i = 0; i < ul.children.length; i++) {
      ul.children[i].style.pointerEvents = "auto";
      ul.children[i].style.color = '#000';
      ul.children[i].style.backgroundColor = '';

    }
  },
  score: 0,
  scoreCard: function () {
    scoreCard.innerText = this.score + "/" + this.questions.length;
  }
  
}

window.onload = app.load();

function button(ele) {
  app.check(ele);
  app.notClickAble();
}

function next() {
  app.next();
  app.clickAble();
} 

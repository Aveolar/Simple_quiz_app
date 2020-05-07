let ul = document.getElementById('ul');
const scoreCard = document.querySelector('.scoreCard');
const totalScore = document.querySelector('.score-card');
const btn = document.getElementById('next');
const quizQuestions = document.querySelector('.quiz');
const quizSection = document.querySelector('#quizBody');
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');
const startQuizBtn = document.querySelector('.start-page')

startQuizBtn.addEventListener('click', startQuiz);

function startQuiz() {
  startQuizBtn.classList.add('hide');
  quizSection.classList.remove('hide');
}

let app = {
  questions: [
    {
      pass: false,
      q: 'HTML stands for?',
      options: ['Hyper Text Markup Language', 'High Text Markup Language', 'Hyper Tabular Markup Language', 'None of these'],
      answer: 1
    },
    {
      pass: false,
      q: 'which of the following tag is used to mark a begining of paragraph ?',
      options: ['td', 'br', 'p', 'tr'],
      answer: 3
    },
    {
      pass: false,
      q: 'Correct HTML tag for the largest heading is ?', options: ['h4', 'h1', 'h8', 'h9'],
      answer: 2
    },
    {
      pass: false,
      q: "Who invented JavaScript?",
      options: ['Douglas Crockford', 'Sheryl Sandberg', 'Sheryl Sandberg', 'Brendan Eich'],
      answer: 4
    },
    {
      pass: false,
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
      totalScore.className = 'total';
      op1.style.display = "none";
      op2.style.display = "none";
      op3.style.display = "none";
      op4.style.display = "none";
      btn.innerText = 'Try again';
      btn.addEventListener("click", () => {
        location.reload();
      })
      if (this.score == 4 || this.score == 5) {
        quizQuestions.innerHTML = `<p style="font-size:1.5em">Excellent!!!</p>`;
      } else if (this.score == 3) {
        quizQuestions.innerHTML = `<p style="font-size:1.5em">You can do better</p>`;
      } else if (this.score <= 2){
        quizQuestions.innerHTML = `<p style="font-size:1.5em">Please try again</p>`;
      } else {
        
      }
    }
  },
  check: function (e) {
    
    let id = e.id.split('');
    this.questions[this.index].pass = true;
    if (id[id.length - 1] == this.questions[this.index].answer) {
      this.score++;
      e.className = "success";
      this.scoreCard();
    }
    else {
      e.className = "error";
      document.getElementById(`op${this.questions[this.index].answer}`).className = "success";
    }
  },
  next: function () {
    if (this.questions[this.index].pass !== true) {
      return alert('Please pick an option');
    }
    this.index++;
    this.load();
  },
  notClickAble: function () {
    for (let i = 0; i < ul.children.length; i++) {
      ul.children[i].classList.add('disabled');
    }
  },

  clickAble: function () {
    for (let i = 0; i < ul.children.length; i++) {
      ul.children[i].classList.remove('disabled', 'error', 'success');
    }
  },
  score: 0,
  scoreCard: function () {
    scoreCard.innerText = this.score + "/" + this.questions.length;
  }
}

window.onload = app.load();

function button(e) {
  app.check(e);
  app.notClickAble();
}

function next() {
  app.next();
  app.clickAble();
} 

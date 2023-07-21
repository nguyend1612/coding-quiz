const quizData = [
    {
      question: 'What is the capital of France?',
      choices: ['Paris', 'London', 'Rome', 'Madrid'],
      correctAnswer: 0
    },
    {
      question: 'What is the largest planet in our solar system?',
      choices: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
      correctAnswer: 1
    },
    {
      question: 'Which country won the 2018 FIFA World Cup?',
      choices: ['Brazil', 'Germany', 'Argentina', 'France'],
      correctAnswer: 3
    }
  ];
  
  const questionElement = document.getElementById('question');
  const choicesElement = document.getElementById('choices');
  const scoreElement = document.getElementById('score');
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    choicesElement.innerHTML = '';
  
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';
  
    for (let i = 0; i < currentQuizData.choices.length; i++) {
      const choice = currentQuizData.choices[i];
      const choiceElement = document.createElement('button');
      choiceElement.innerText = choice;
      choiceElement.addEventListener('click', () => checkAnswer(i));
      buttonContainer.appendChild(choiceElement);
    }
  
    choicesElement.appendChild(buttonContainer);
  }
  
  function checkAnswer(choice) {
    const currentQuizData = quizData[currentQuestion];
  
    if (choice === currentQuizData.correctAnswer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showScore();
    }
  }
  
  function showScore() {
    questionElement.style.display = 'none';
    choicesElement.style.display = 'none';
    scoreElement.innerText = `You scored ${score} out of ${quizData.length}!`;
    scoreElement.style.display = 'block';
  }
  
  loadQuestion();
  
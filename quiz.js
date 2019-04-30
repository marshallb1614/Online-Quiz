const quiz_container = document.getElementById('quiz') ;
const results_container = document.getElementById('results') ;
const submit_button = document.getElementById('submit') ;

function buildQuiz() {
    const output = [] ; 
    myQuestionsOMB.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];
            for(letter in currentQuestion.answers){
                answers.push(
                    <label>
                    <input type ="radio" name="question${questionNumber}" value = "${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}

                    </input>
                    </label>

                );

            }

            output.push(
                <div class="question"> ${currentQuestion.question}</div>
                <div class="answers"> ${answers.join('')}</div>
            )
        }
    )
}

function displayResults() {

}

buildQuiz();

submit_button.addEventListener('click',displayResults);

const myQuestionsHP = [
    {
        question: "Did Caesar kill Latrell?",
        answers: {
            a: "Yes",
            b: "No"
        },
        correct_answer: 'b'
    },
    {
        questtion: "Who shot Ruby and Olivia?",
        answers: {
            a: "Spooky",
            b: "Latrell",
            c: "Jasmin"
        },
        correct_answer: 'b'
    },
    {
        question: "Who is the leader of Los Santos?",
        answers: {
            a: "Caeser",
            b: "Jamal",
            c: "Spooky",
        },
        correct_answer: 'c'
    },
    {
        question: "Who found the Roller World Money?",
        answers: {
            a: "Jamal",
            b: "Monse",
            c: "Ruby",
        },
        correct_answer: 'a'
    },
    {
        question: "Which character died when Latrell shot up Olivia's quince?",
        answers: {
            a: "Ruby",
            b: "Olivia",
            c: "Caesar"
        },
        correct_answer: 'b'
    }
];

function buildQuiz(){

    const output = [];

    myQuestionsHP.forEach(
        (currentQuestion, questionNumber) => {
            //finish later
        }
    )
    const answerContainers = quizContainer.querySelectorAll('.answers');

    let numCorrect = 0;

    myQuestionsOMB.forEach((currentQuestion, questionNumber)); {
        const answerContainer = answerContainers[questionNumber];
        const selector = 'input[name=question'+questionNumber+']:checked';
        const userAnswer = (answerContainer.querrySelector(selector) || {}).value;

    if(userAnswer===currentQuestion.correctAnswer){

        numCorrect++;
        answerContainers[questionNumber].style.color = 'lightgreen';

    }
    else{
        answerContainers[quesetionNumber].style.color = 'red';
    }
  };

  results_container.innerHTML = numCorrect + ' out of ' + myQuestionsHP.length;  
}
function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide===0){
        previousButton.style.display = 'none';
    }
    else{
        previousButton.style.display = 'inline=block';
    }
    if(currentSlide===slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-clock';
    }
    else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }
}

function showNextSlide() {
    showSlide(currentSlide + 1);
}

function showPreviousSlide() {
    showSlide(currentSlide - 1);
}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

buildQuiz();

const previousButton = document.getElementById()
// Sample data
const questions = [
    {
    text: "Which language is primarily used for web app development?",
    options: ["C#", "Python", "JavaScript", "Swift"],
    correct: 2
},
{
    text: "Which of the following is a relational database management system?",
    options: ["Oracle", "Scala", "Perl", "Java"],
    correct: 0
},
{
    text: "In which language is memory management provided by JVM?",
    options: ["Java", "C", "C++", "Python"],
    correct: 0
},
{
    text: "What does HTML stand for?",
    options: ["Hyperlink and Text Markup Language", "High Technology Modern Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
    correct: 2
},
{
    text: "Which of the following is not a valid variable name in Python?",
    options: ["_myVar", "myVar2", "2myVar", "my_var"],
    correct: 2
},
{
    text: "Which of the following is not an object-oriented programming language?",
    options: ["Java", "C#", "Scala", "C"],
    correct: 3
},
{
    text: "Which tool is used to ensure code quality in JavaScript?",
    options: ["JSLint", "TypeScript", "Babel", "Webpack"],
    correct: 0
},
{
    text: "In which data structure, elements are added at one end and removed from the other?",
    options: ["Array", "Stack", "Queue", "LinkedList"],
    correct: 2
},
{
    text: "What is the primary use of the Git command 'clone'?",
    options: ["To stage changes", "To copy a repository", "To switch to a different branch", "To list all the files in a repository"],
    correct: 1
},
{
    text: "What does API stand for in the context of programming?",
    options: ["Apple Pie Interface", "Application Programming Interface", "Advanced Peripheral Integration", "Application Process Integration"],
    correct: 1
}
];

const questionEle = document.getElementById("question");
const answerEle = document.getElementById("answer-list");
const nextButton = document.getElementById("next");
const submitButton = document.getElementById("submit");

let currentquesIndex =0;
let score =0;

function startQuiz(){
    currentquesIndex =0;
    score =0;
    showQuestion()
}

function showQuestion(){
    answerEle.innerHTML = "";
    let currentQues = questions[currentquesIndex];
    questionEle.innerHTML = currentQues.text;

    currentQues.options.forEach ((optionText,index) =>{
        const liEle = document.createElement("li");
        const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.id = `opt${index}`;
    input.value = index;
    input.classList.add("option");

    const label = document.createElement("label");
    label.htmlFor = `opt${index}`;
    label.innerText = optionText;

    liEle.appendChild(input);
    liEle.appendChild(label);
    answerEle.appendChild(liEle);
    })

    submitButton.style.display = "block";
    nextButton.style.display = "none";
}

submitButton.addEventListener("click", () => {
    const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (!selectedOption) {
        alert("Please select an answer!");
        return;
    }

    const selectedIndex = parseInt(selectedOption.value);
    const correctIndex = questions[currentquesIndex].correct;

    const allOptions = document.querySelectorAll(".option");
      allOptions.forEach(opt => {
        if (parseInt(opt.value) === correctIndex) {
          opt.parentElement.classList.add("correct");
        }
        opt.disabled = true;
      });

    if (selectedIndex === correctIndex) {
        score++;
    }
    submitButton.style.display = "none";
    nextButton.style.display = "block";
});

nextButton.addEventListener("click", () => {
    currentquesIndex++;
    if (currentquesIndex < questions.length) {
        showQuestion();
    } else {
        alert(`Quiz finished! Your score is: ${score}/${questions.length}`);
        startQuiz();
    }
});
startQuiz();

const quizDB = [
{
	question: "Q1: What is the full form of HTML?",
	a: "Hello to my land",
	b: "Hey markup language",
	c: "hypertext markup language",
	d: "hypertext makeup language",
	ans: "ans3",
},
{
	question:"Q2: What is the full form of CSS?",
	a: "Cascading Spread Sheets ",
	b: "Cartoon Style Sheets",
	c: "Cascading Style Sheets",
	d: "none of the above",
	ans: "ans3",
},
{
	question:"Q3: Who is the founder of Microsoft?",
	a: "Bill Gates",
	b: "Jeff Bezos",
	c: "Elon Musk",
	d: "Mark Zukerberg",
	ans: "ans1",
},
{
	question:"Q4: Who wins IPL2019 finals?",
	a: "Chennai Super Kings",
	b: "Mumbai Indians",
	c: "Delhi Capitals",
	d: "Royal Challengers Bangalore",
	ans: "ans2",
},
{
	question: "Q5: What is the full form of JS?",
	a: "Java Sequence",
	b: "javascript",
	c: "javaSuper",
	d: "JustScripting",
	ans: "ans2",
}
];

 const question = document.querySelector('.question');
 const option1 = document.querySelector('#option1');
 const option2 = document.querySelector('#option2');
 const option3 = document.querySelector('#option3');
 const option4 = document.querySelector('#option4');
 const submit = document.querySelector('#submit');
 const answers = document.querySelectorAll('.answer');
 const showscore = document.querySelector('#showScore');

 let questionCount = 0;
 let score = 0;


 const loadQuestion = () => {
 	const questionlist = quizDB[questionCount];
 	question.innerText = questionlist.question;
 	option1.innerText = questionlist.a;
 	option2.innerText = questionlist.b;
 	option3.innerText = questionlist.c;
 	option4.innerText = questionlist.d;
 };

const getcheckAnswer = () => {
	let answer;
	answers.forEach((currentitem) => {
		if(currentitem.checked){
			answer = currentitem.id;
		}
	});
	return answer;
};


 const deselector = () => {
 	answers.forEach((currentitem) => currentitem.checked = false );
 }




submit.addEventListener('click', () => {
	
	const checkedanswer = getcheckAnswer();
	if(checkedanswer == quizDB[questionCount].ans){
		score++;
	};

	questionCount++;
	deselector();

	if(questionCount<quizDB.length){
		loadQuestion();
	}
	else{
		const accuracy = score/quizDB.length * 100;
		showscore.innerHTML = `
		<h2> You scored = ${score}/${quizDB.length}!! </h2>
		<h3>Your accuracy is ${accuracy}%.</h3>
		<button class="btn" onclick="location.reload()"> Play again</button>
		`;
		showscore.classList.remove('showArea');
	}
});

loadQuestion();

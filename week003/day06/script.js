let questions = [{
	question: "What is 2*5?",
	alternatives: [2, 5, 10, 15, 20],
	correctAnswer: 2,
	questionType: "singleAnswer"
}, {
	question: "What is 3*6?",
	alternatives: [12, 18],
	correctAnswer: [0, 2],
	questionType: "singleAnswer"
}, {
	question: "What is 8*9?",
	alternatives: [72, 99, 108, 156],
	questionType: "singleAnswer"
}, {
	question: "What is Ankur last name?",
	correctAnswer: "Pandey",
	questionType: "freeText"
}, {
	question: "Which answers bellow are correct? hint: multiple",
	alternatives: ["This is correct", "This is not correct", 2, "NaN"],
	correctAnswer: [1, 3],
	questionType: "multiAnswer"
}];
let questionCounter = 0;
let selections = [];
let questionElem = document.getElementById("question");
let quiz = document.getElementById("quiz");
let countLabel = document.createElement("label");
let countNode = document.createTextNode("Question " + questionCounter + " of " + questions.length);
let nextBtn = document.createElement("button");
nextBtn.innerHTML = "Next Question";
nextBtn.setAttribute("id", "next");

(function(){
	questionElem.appendChild(document.createTextNode(questions[0].question));
	quiz.appendChild(questionElem);
	quiz.appendChild(nextBtn);
	loadRadios(questionCounter);
})();

function nextQuestion(){
	questionCounter++;
	if(questionCounter === questions.length){
		for(let i = 0; i < selections.length; i++){
			alert(selections[i]);
		}
	}
	else{
		while(quiz.hasChildNodes()){
			quiz.removeChild(quiz.firstChild);
		}
		choice();
		questionElem.innerHTML = questions[questionCounter].question;
		quiz.appendChild(questionElem);
		quiz.appendChild(nextBtn);

		if(questions[questionCounter].questionType == "singleAnswer"){
			loadRadios(questionCounter);
		}
		else if(questions[questionCounter].questionType == "multiAnswer"){
			loadCheckboxes(questionCounter);
		}
		else{
			loadFreetext();
		}
	}
}

function loadRadios(index){
	let radioList = document.createElement("ul");
	let answer;
	let input = "";
	let answerLabel = "";
	for(let i = 0; i < questions[index].alternatives.length; i++){
		answer = document.createElement("li");
		input = document.createElement("input");
		answerLabel = document.createElement("label");

		input.setAttribute("type", "radio");
		input.setAttribute("name", "singleAnswer");
		input.setAttribute("class", "radiobtns");
		input.value = questions[index].alternatives[i];

		answerLabel.innerHTML = questions[index].alternatives[i];
		answerLabel.appendChild(input);
		answer.appendChild(answerLabel);
		radioList.appendChild(answer);
	}
	quiz.appendChild(radioList);
	return radioList;
}

function loadCheckboxes(index){
	let checkboxList = document.createElement("ul");
	let answer;
	let input = "";
	let answerLabel = "";
	for(let i = 0; i < questions[index].alternatives.length; i++){
		answer = document.createElement("li");
		input = document.createElement("input");
		answerLabel = document.createElement("label");

		input.setAttribute("type", "checkbox");
		input.setAttribute("name", "multiAnswer");
		input.setAttribute("class", "checkbxs");
		input.value = questions[index].alternatives[i];

		answerLabel.innerHTML = questions[index].alternatives[i];
		answerLabel.appendChild(input);
		answer.appendChild(answerLabel);
		checkboxList.appendChild(answer);
	}
	quiz.appendChild(checkboxList);
	return checkboxList;
}

function loadFreetext(){
	let answer = document.createElement("input");
	answer.setAttribute("type", "text");
	answer.setAttribute("name", "textAnswer");
	quiz.appendChild(answer);
}

function choice(){
	let choice = "";
	let checkboxes = document.getElementsByName("multiAnswer");
	let radiobuttons = document.getElementsByName("singleAnswer");

	if(questions[questionCounter].questionType == "singleAnswer"){
		for(let i = 0; i < radiobuttons.length; i++){
			if(radiobuttons[i].checked){
				choice = radiobuttons[i].value;
				selections.push(choice);
			}
		}
	}
	else if(questions[questionCounter].questionType == "multiAnswer"){
		for(let i = 0; i < checkboxes.length; i++){
			if(checkboxes[i].checked){
				choice = checkboxes[i].value;
				selections.push(choice);
			}
		}
	}
	else{
		let txt = document.getElementsByName("textAnswer");
		choice = txt.value;
		selections.push(choice);
	}
}

nextBtn.onclick = function(){
	nextQuestion();
}
var question1 = "Where did Hermione send her parents in book 7?";
var q1answers = ["France", "Australia", "United States of America", "Italy"];
var question2 = "How many galleons does the Tri-Wizard Tournament winner receive?";
var q2answers = ["1,000", "10,000", "100,000", "2"];
var question3 = "Who was the Half-Blood Prince?";
var q3answers = ["Eileen Prince", "James Potter", "Albus Dumbledore", "Severus Snape"];
var question4 = "What is the Dursley's street address?";
var q4answers = ["#4 Prival Street", "#14 Privet Lane", "#4 Privet Drive", "#394 Perry Avenue"];
var question5 = "Who was not one of Harry's Defense Against the Dark Arts Teachers?";
var q5answers = ["Remus Lupin", "Delores Umbridge", "Minerva McGonagall", "Gilderoy Lockhart"];
var question6 = "What is the only unforgiveable curse Harry doesn't use?";
var q6answers = ["Crucio", "Avada Kedavra", "Imperio", "Harry would never use an unforgiveable curse!"];
var questions = [question1, question2, question3, question4, question5, question6];
var answers = [q1answers, q2answers, q3answers, q4answers, q5answers, q6answers];
var questionBox = $("#questionBox");



for (var i = 0; i < questions.length; i++) {
	var j = 0; j < answers.length; j++;
	questionBox.html("<div>" + questions[i] + "<br>" + answers[j] + "</div>");
	console.log(questions[i]);
};





function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
function checkAnswers() {
  // Correct answers
  const answers = {
    q1: "A",
    q2: "B",
    q3: "B",
  };

  // Get user answers
  let score = 0;
  const totalQuestions = Object.keys(answers).length;
  for (let question in answers) {
    const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
    if (selectedOption && selectedOption.value === answers[question]) {
      score++;
    }
  }

  // Display result
  const result = document.getElementById("quiz-result");
  result.textContent = `You scored ${score} out of ${totalQuestions}!`;
}

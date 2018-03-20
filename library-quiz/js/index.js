var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// Number of questions. Max=10.
var NUMQUESTIONS = 10;

// List of questions.
var questionsMap = new Map();

// The sequence of the quiz.
var quizSequence = [];

// Store the quiz stats.
var quizStats = {
	counter: 0,
	correct: 0,
	wrong: 0,
	currentQuestion: 0
};

// The questions.
function quizQuestions() {
	questionsMap.set(1, {
		question: "登記或預約使用本館電腦，需攜帶什麼東西?",
		a: "麥當勞",
		b: "手機",
		c: "本人借閱證或有效身分證明文件",
		answer: "c"
	});
	questionsMap.set(2, {
		question: "公用電腦每次使用為多久?",
		a: "一個禮拜",
		b: "一天",
		c: " 三十分鐘",
		answer: "c"
	});
	questionsMap.set(3, {
		question: "fun心聽故事時間和好玩的延伸活動時間，是禮拜幾上午10點到11點?",
		a: "禮拜一",
		b: "禮拜六",
		c: "禮拜二",
		answer: "b"
	});
	questionsMap.set(4, {
		question: "看完書要怎麼做?",
		a: "將書本送回他的家",
		b: "亂丟在地上",
		c: "全部帶回家",
		answer: "a"
	});
	questionsMap.set(5, {
		question: "哺集乳室是用來做什麼的?",
		a: "哺乳",
		b: "看書",
		c: "睡覺",
		answer: "a"
	});
	questionsMap.set(6, {
		question: "開架閱覽區有何種書籍?",
		a: "自然科學",
		b: "社會科學",
		c: "以上皆是",
		answer: "c"
	});
	questionsMap.set(7, {
		question: "閱覽區整體空間設計如何?",
		a: "很狹窄",
		b: "寬敞明亮視野通透",
		c: "很暗都沒開燈",
		answer: "b"
	});
	questionsMap.set(8, {
		question: "陽光靜讀區那些地方有別於一般的閱覽座位?",
		a: "可鳥瞰市區並享受室內綠意",
		b: "跟一般的閱覽座位相同",
		c: "懶得比較",
		answer: "a"
	});
	questionsMap.set(9, {
		question: "多功能教室內部設備除課桌椅外，還備有什麼設備?",
		a: "投影機",
		b: "數位化多功能講桌",
		c: "以上皆是",
		answer: "c"
	});
	questionsMap.set(10, {
		question: "多功能教室每年均舉辦許多課程活動，其中包括什麼?",
		a: "多元文化課程",
		b: "親子共讀",
		c: "以上皆是",
		answer: "c"
	});
}

// Get the containers.
var questionContainer = document.getElementById("the-question"),
	answerA = document.getElementById("a"),
	answerB = document.getElementById("b"),
	answerC = document.getElementById("c"),
	//answerD = document.getElementById("d"),
	scoreCounter = document.getElementById("score-counter");

// Add question keys to the quiz sequence array.
function determineSequence() {
	// Populate quizSequence.
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = questionsMap[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var _ref = _step.value;

			var _ref2 = _slicedToArray(_ref, 2);

			var key = _ref2[0];
			var value = _ref2[1];

			quizSequence.push(key);
		}

		// Shuffle an array.
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	function shuffle(array) {
		var currentIndex = array.length,
			temporaryValue = void 0,
			randomIndex = void 0;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array;
		// See: http://stackoverflow.com/a/2450976/4429450
	}

	// Randomize quizSequence.
	quizSequence = shuffle(quizSequence);
}

// Get the next question.
function getNextQuestion() {
	// Up the counter.
	quizStats.counter++;

	// Get the question number.
	var qn = quizSequence.shift();

	// Set up the question and answers.
	var a = questionsMap.get(qn).a,
		b = questionsMap.get(qn).b,
		c = questionsMap.get(qn).c,
		//d = questionsMap.get(qn).d,
		question = questionsMap.get(qn).question;

	// Print the questions.
	questionContainer.textContent = question;
	answerA.textContent = a;
	answerB.textContent = b;
	answerC.textContent = c;
	//answerD.textContent = d;

	// Track the current question.
	quizStats.currentQuestion = qn;
}

// Add event listeners.
function addEventListeners() {
	answerA.addEventListener("click", checkTheAnswer);
	answerB.addEventListener("click", checkTheAnswer);
	answerC.addEventListener("click", checkTheAnswer);
	//answerD.addEventListener("click", checkTheAnswer);
}

// Add data attributes.
function addDataAttributes() {
	answerA.setAttribute("data-answer", "a");
	answerB.setAttribute("data-answer", "b");
	answerC.setAttribute("data-answer", "c");
	//answerD.setAttribute("data-answer", "d");
}

// Check the answer.
function checkTheAnswer() {
	// Get the answers.
	var givenAnswer = this.dataset.answer,
		correctAnswer = questionsMap.get(quizStats.currentQuestion).answer;
	// Check given and correct answers.
	if (givenAnswer === correctAnswer) {
		quizStats.correct++;
		this.classList.add("correct");
	} else {
		quizStats.wrong++;
		this.classList.add("wrong");
		document.getElementById(correctAnswer).classList.add("correct");
	}

	// Update the counter.
	scoreCounter.textContent = quizStats.correct;

	// Check if max num of questions has been reached.
	if (quizStats.counter < NUMQUESTIONS) {
		setTimeout(clearClasses, 2000);
		setTimeout(getNextQuestion, 2000);
	}
	// If so, stop the quiz.
	else {
		showTheResults();
	}
}

// Clear classes.
function clearClasses() {
	answerA.classList.remove("correct", "wrong");
	answerB.classList.remove("correct", "wrong");
	answerC.classList.remove("correct", "wrong");
	//answerD.classList.remove("correct", "wrong");
}

// The results.
function showTheResults() {
	// Get the containers.
	var numCorrect = document.getElementById("num-correct"),
		numWrong = document.getElementById("num-wrong"),
		numTotal = document.getElementById("num-total");

	// Get the results.
	var correct = quizStats.correct,
		wrong = quizStats.wrong,
		total = NUMQUESTIONS;

	// Print the results.
	numCorrect.textContent = correct;
	numWrong.textContent = wrong;
	numTotal.textContent = total;

	// Display the results.
	document.getElementsByClassName("results-container")[0].style.display = "flex";

	// 結果描述
	const resulDesc = document.getElementById("result-desc");
	console.log(correct);
	if (correct==10)
		resulDesc.innerText="叫我第一名！";
	else if (correct<10&&correct>7)
		resulDesc.innerText = "快滿分了！再加油！！";
	else if (correct <= 7 && correct > 4)
		resulDesc.innerText = "再接再厲！";
	else if (correct <= 4 && correct > 2)
		resulDesc.innerText = "要再加油囉！";
	else
		resulDesc.innerText = "要做個乖寶寶哦！";
}

//Let's start!
(function startQuiz() {
	// Init.
	quizQuestions();
	determineSequence();
	getNextQuestion();
	addEventListeners();
	addDataAttributes();
})();

var ok = function ok() {
	// invisible the results.
	document.getElementsByClassName("results-container")[0].style.display = "none";
	// Init.
	quizStats = {
		counter: 0,
		correct: 0,
		wrong: 0,
		currentQuestion: 0
	};
	quizQuestions();
	determineSequence();
	getNextQuestion();
	addEventListeners();
	addDataAttributes();
	clearClasses();
	console.log('yoooooo');
};

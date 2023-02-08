import "./Quiz.scss";
import Input from "../../components/Input/Input";
import {questions} from "../../utils/questions";
import { useState } from "react";

const Quiz = () => {
    const [question, setQuestion] = useState("");
    const [showQuestion, setShowQuestion] = useState(false);
    const [answer, setAnswer] = useState([]);
    const [showQuizButton, setShowQuizButton] = useState(true);
    const [userInput, setUserInput] = useState("");
    const [correct, setCorrect] = useState(false);
    const [message, setMessage] = useState("");

    const getQuestion = () => {
        let index = Math.floor(Math.random() * questions.length-1);
        setQuestion(questions[index].question);
        setAnswer(questions[index].answer);
        setShowQuestion(true);
        setShowQuizButton(false);
    }

    const handleUserInput = (e) => {
        setUserInput(e.target.value.toLowerCase());
    }

    const handleUserAnswer = () => {
        if (answer.includes(userInput)) {
            setCorrect(true)
            setMessage("Correct!")
        } else {
            setCorrect(false)
            setMessage("Incorrect! Try Again!")
        }
    }

    return (
        <div className="quiz">
            <h1 className="quiz__heading">Quiz</h1>
            {showQuizButton && <button onClick={getQuestion} className="quiz__start-btn">Start Quiz</button>}
            {showQuestion && <div className="quiz__question-container">
                    <p className="quiz__question-container--question">{question}</p>
                    <p className={correct ? "correct" : "quiz__question-container--message"}>{message}</p>
                </div>}
            {showQuestion && <Input handleUserInput={handleUserInput} userInput={userInput} handleUserAnswer={handleUserAnswer}/>}
        </div>
    )
}

export default Quiz;
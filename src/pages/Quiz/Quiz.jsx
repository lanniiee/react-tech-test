import "./Quiz.scss";
import Input from "../../components/Input/Input";
import {questions} from "../../utils/questions";
import { useEffect, useState } from "react";

const Quiz = () => {
    const [question, setQuestion] = useState("");

    const getQuestion = () => {
        let index = Math.floor(Math.random() * questions.length-1);
        setQuestion(questions[index]);
    }

    useEffect(() => {
        getQuestion()
    }, [])

    return (
        <div className="quiz">
            <h1>Quiz</h1>
            <p>{question.question}</p>
            <Input />
        </div>
    )
}

export default Quiz;
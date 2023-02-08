import "./Input.scss";

const Input = ({handleUserInput, userInput, handleUserAnswer}) => {

    return (
        <div className="input">
            <h1 className="input__text">Your answer: </h1>
            <input type="text" className="input__box" onChange={handleUserInput} value={userInput}/>
            <button className="input__btn" onClick={handleUserAnswer}>Submit answer</button>
        </div>
    )
}

export default Input;
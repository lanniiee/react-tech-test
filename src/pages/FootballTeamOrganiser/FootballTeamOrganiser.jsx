import "./FootballTeamOrganiser.scss";
import footballersArr from "../../data/football-team.data copy.json";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";

const FootballTeamOrganiser = () => {
    const [goalkeepersArr, setGoalkeepersArr] = useState(footballersArr.filter(e => e.position == "Goalkeeper"));
    const [defendersArr, setDefendersArr] = useState(footballersArr.filter(e => e.position == "Defender"));
    const [midfieldersArr, setMidfieldersArr] = useState(footballersArr.filter(e => e.position == "Midfielder"));
    const [attackersArr, setAttackersArr] = useState(footballersArr.filter(e => e.position == "Attacker"));
    const [showModal, setShowModal] = useState(false);
    const [playerArr, setPlayerArr] = useState([]);

    const toggleModal = (e) => {
        
        if (e.target.textContent == "Select Goalkeeper ▼") {
            setPlayerArr(goalkeepersArr);
        } else if (e.target.textContent == "Select Defender ▼") {
            setPlayerArr(defendersArr);
        } else if (e.target.textContent == "Select Midfielder ▼") {
            setPlayerArr(midfieldersArr);
        } else if (e.target.textContent == "Select Attacker ▼") {
            setPlayerArr(attackersArr);
        }
        setShowModal(!showModal)
    }


    return (
        <div className="football">
            <h1 className="football__heading">Football</h1>
            <div className="football__options">
                <h1 className="football__select" onClick={toggleModal}>Select Goalkeeper ▼</h1>
                <h1 className="football__select" onClick={toggleModal}>Select Defender ▼</h1>
                <h1 className="football__select" onClick={toggleModal}>Select Midfielder ▼</h1>
                <h1 className="football__select" onClick={toggleModal}>Select Attacker ▼</h1>
            </div>
            
            {showModal && <Modal playerArr={playerArr} toggleModal={toggleModal}/>}

        </div>
    )
}

export default FootballTeamOrganiser;
import "./FootballTeamOrganiser.scss";
import footballersArr from "../../data/football-team.data copy.json";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import Rota from "../../components/Rota/Rota";


const FootballTeamOrganiser = () => {
    const [goalkeepersArr, setGoalkeepersArr] = useState(footballersArr.filter(e => e.position == "Goalkeeper"));
    const [defendersArr, setDefendersArr] = useState(footballersArr.filter(e => e.position == "Defender"));
    const [midfieldersArr, setMidfieldersArr] = useState(footballersArr.filter(e => e.position == "Midfielder"));
    const [attackersArr, setAttackersArr] = useState(footballersArr.filter(e => e.position == "Attacker"));
    const [showModal, setShowModal] = useState(false);
    const [playerArr, setPlayerArr] = useState([]);
    const [selectedPlayer, setSelectedPlayer] = useState({});
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [selectedPlayerLoading, setSelectedPlayerLoading] = useState(false);

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

    const selectPlayer = (player) => {
        setSelectedPlayer(player)
        let players = [...selectedPlayers];
        let keeperCount = 0;
        let midfielderCount = 0;
        let defenderCount = 0;
        let attackerCount = 0;

        for (let i = 0; i < players.length; i++) {
            if (players[i].position == "Goalkeeper") {
                keeperCount++
            } else if (players[i].position == "Defender") {
                defenderCount++
            } else if (players[i].position == "Midfielder") {
                midfielderCount++
            } else if (players[i].position == "Attacker") {
                attackerCount++
            }
        }

        if (!players.includes(player.name)) {
            if ((player.position == "Goalkeeper" && keeperCount == 0) || (player.position == "Defender" && defenderCount < 3) || (player.position == "Midfielder" && midfielderCount < 4) || (player.position == "Attacker" && attackerCount < 3)) {
                players.push(player)
                setSelectedPlayers(players)
                removePlayer(player)
                setSelectedPlayerLoading(true)
            }
        }

    }

    const removePlayer = (player) => {
        let arr = [];
        if (player.position == "Goalkeeper") {
            for (let i = 0; i < goalkeepersArr.length; i++) {
                arr = [...goalkeepersArr];
                if (player.name == arr[i].name) {
                    arr.splice(i, 1)
                    setGoalkeepersArr(arr)
                    setPlayerArr(arr)
                }
            }
        } else if (player.position == "Defender") {
            for (let i = 0; i < defendersArr.length; i++) {
                arr = [...defendersArr];
                if (player.name == arr[i].name) {
                    arr.splice(i, 1)
                    setDefendersArr(arr)
                    setPlayerArr(arr)
                }
            }

        } else if (player.position == "Midfielder") {
            for (let i = 0; i < midfieldersArr.length; i++) {
                arr = [...midfieldersArr];
                if (player.name == arr[i].name) {
                    arr.splice(i, 1)
                    setMidfieldersArr(arr)
                    setPlayerArr(arr)
                }
            }
        } else if (player.position == "Attacker") {
            for (let i = 0; i < attackersArr.length; i++) {
                arr = [...attackersArr];
                if (player.name == arr[i].name) {
                    arr.splice(i, 1)
                    setAttackersArr(arr)
                    setPlayerArr(arr)
                }
            }
        } 
    }

    const handleChangePlayer = (e) => {
        for (let i = 0; i < selectedPlayers.length; i++) {
            if (e.target.getAttribute("name") == selectedPlayers[i].name) {
                handleAddPlayer(selectedPlayers[i])
                selectedPlayers.splice(i, 1);
            }
        }
        console.log(e.target)
    }

    const handleAddPlayer = (player) => {
        let arr = [];
        if (player.position == "Goalkeeper") {
            arr = [...goalkeepersArr];
            arr.push(player)
            setGoalkeepersArr(arr)
            setPlayerArr(arr)
        } else if (player.position == "Defender") {
            arr = [...defendersArr];
            console.log(player)
            arr.push(player)
            setDefendersArr(arr)
            setPlayerArr(arr)
        } else if (player.position == "Midfielder") {
            arr = [...midfieldersArr];
            arr.push(player)
            setMidfieldersArr(arr)
            setPlayerArr(arr)
        } else if (player.position == "Attacker") {
            arr = [...attackersArr];
            arr.push(player)
            setAttackersArr(arr)
            setPlayerArr(arr)
        } 
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
            {showModal && <Modal playerArr={playerArr} toggleModal={toggleModal} selectPlayer={selectPlayer}/>}
            <Rota selectedPlayers={selectedPlayers} selectedPlayerLoading={selectedPlayerLoading} handleChangePlayer={handleChangePlayer}/>
        </div>
    )
}

export default FootballTeamOrganiser;
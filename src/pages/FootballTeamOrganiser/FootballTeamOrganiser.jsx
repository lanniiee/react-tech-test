import "./FootballTeamOrganiser.scss";
import PlayerCard from "../../components/PlayerCard/PlayerCard";
import footballersArr from "../../data/football-team.data copy.json";
import { useState } from "react";

const FootballTeamOrganiser = () => {
    const [goalkeepersArr, setGoalkeepersArr] = useState(footballersArr.filter(e => e.position == "Goalkeeper"));
    const [defendersArr, setDefendersArr] = useState(footballersArr.filter(e => e.position == "Defender"));
    const [midfieldersArr, setMidfieldersArr] = useState(footballersArr.filter(e => e.position == "Midfielder"));

    console.log(goalkeepersArr);
    console.log(defendersArr);
    console.log(midfieldersArr);

    return (
        <div className="football">
            <h1>Football</h1>
            <PlayerCard playerArr={midfieldersArr}/>
        </div>
    )
}

export default FootballTeamOrganiser;
import "./Rota.scss";
import PlayerRota from "../PlayerRota/PlayerRota";

const Rota = ({selectedPlayers, selectedPlayerLoading}) => {


    return (
        <div className="rota">
            <PlayerRota  selectedPlayers={selectedPlayers} selectedPlayerLoading={selectedPlayerLoading}/>
        </div>
    )
}

export default Rota;
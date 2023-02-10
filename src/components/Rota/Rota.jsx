import "./Rota.scss";
import PlayerRota from "../PlayerRota/PlayerRota";

const Rota = ({selectedPlayers,handleChangePlayer}) => {


    return (
        <div className="rota">
            <PlayerRota  selectedPlayers={selectedPlayers} handleChangePlayer={handleChangePlayer}/>
        </div>
    )
}

export default Rota;
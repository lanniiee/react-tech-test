import "./Rota.scss";
import PlayerRota from "../PlayerRota/PlayerRota";

const Rota = ({selectedPlayer, selectedPlayerLoading}) => {


    return (
        <div className="rota">
            <PlayerRota  selectedPlayer={selectedPlayer} selectedPlayerLoading={selectedPlayerLoading}/>
        </div>
    )
}

export default Rota;
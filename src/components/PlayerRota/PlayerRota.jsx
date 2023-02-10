import "./PlayerRota.scss";

const PlayerRota = ({selectedPlayer, selectedPlayerLoading}) => {


    return (
        <div className={`player-rota ${selectedPlayer.position}`}>
            {selectedPlayerLoading && <>
                <img src={selectedPlayer.imgUrl} alt="" className="player-rota__pic"/>
                <p className={`player-rota__name`}>{selectedPlayer.name}</p>
            </>}

        </div>
    )
}

export default PlayerRota;
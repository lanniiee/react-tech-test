import "./PlayerRota.scss";

const PlayerRota = ({selectedPlayers, handleChangePlayer}) => {

    const keepers = selectedPlayers.filter(player => player.position == "Goalkeeper");

    const defenders = selectedPlayers.filter(player => player.position == "Defender");

    const midfielders = selectedPlayers.filter(player => player.position == "Midfielder");
    
    const attackers = selectedPlayers.filter(player => player.position == "Attacker");

    const keeperDiv = keepers.map(player => { 
        return (
            <div key={player.id} className={`player-rota__container ${player.position}`}>
                <img src={player.imgUrl} alt="player" className="player-rota__pic" name={player.name} onClick={handleChangePlayer}/>
                <p className="player-rota__name">{player.name}</p>
            </div>
        )
    })

    const defenderDiv = defenders.map((player,i) => { 
        return (
            <div key={player.id} className={`player-rota__container ${player.position}--${i}`}>
                <img src={player.imgUrl} alt="player" className="player-rota__pic" name={player.name} onClick={handleChangePlayer}/>
                <p className="player-rota__name">{player.name}</p>
            </div>
        )
    })

    const midfielderDiv = midfielders.map((player, i) => { 
        return (
            <div key={player.id} className={`player-rota__container ${player.position}--${i}`}>
                <img src={player.imgUrl} alt="player" className="player-rota__pic" name={player.name} onClick={handleChangePlayer}/>
                <p className="player-rota__name">{player.name}</p>
            </div>
        )
    })

    const attackerDiv = attackers.map((player, i) => { 
        return (
            <div key={player.id} className={`player-rota__container ${player.position}--${i}`}>
                <img src={player.imgUrl} alt="player" className="player-rota__pic" name={player.name} onClick={handleChangePlayer}/>
                <p className="player-rota__name">{player.name}</p>
            </div>
        )
    })

    return (
        <div className={`player-rota`}>
            <div className="player-rota__keeper">
                {keeperDiv}
            </div>

            <div className="player-rota__defenders">
                {defenderDiv}
            </div>

            <div className="player-rota__midfielders">
                {midfielderDiv}
            </div>

            <div className="player-rota__attackers">
                {attackerDiv}
            </div>
        </div>
    )
}

export default PlayerRota;
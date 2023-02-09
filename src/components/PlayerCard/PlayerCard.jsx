import "./PlayerCard.scss";

const PlayerCard = ({playerArr}) => {

    console.log(playerArr)
    const players = playerArr.map(e => {
        return (
            <div key={e.id} className="player">
                <img src={e.imgUrl} alt={e.name} className="player__pic"/>
                <h1 className="player__name">{e.name}</h1>
                <h1 className="player__nationality">{e.nationality}</h1>
                <h1 className="player__position">{e.position}</h1>
            </div>
        )
    })


    return (
        <div className="player-card">
            {players}
        </div>
    )
}

export default PlayerCard;
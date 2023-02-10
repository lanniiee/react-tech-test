import "./PlayerCard.scss";

const PlayerCard = ({playerArr, handleSelectedPlayer}) => {


    const players = playerArr.map(e => {
        return (
            <div key={e.id} className="player" onClick={handleSelectedPlayer} name={e.name}>
                <img src={e.imgUrl} alt={e.name} className="player__pic" onClick={handleSelectedPlayer} name={e.name}/>
                <h1 className="player__name" onClick={handleSelectedPlayer} name={e.name}>{e.name}</h1>
                <h1 className="player__nationality" onClick={handleSelectedPlayer} name={e.name}>{e.nationality}</h1>
                <h1 className="player__position" onClick={handleSelectedPlayer} name={e.name}>{e.position}</h1>
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
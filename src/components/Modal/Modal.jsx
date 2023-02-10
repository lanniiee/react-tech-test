import "./Modal.scss";
import PlayerCard from "../PlayerCard/PlayerCard";

const Modal = ({playerArr, toggleModal, setSelectedKeeper, selectPlayer}) => {

    const handleSelectedPlayer = (e) => {
        for(let i = 0; i < playerArr.length; i++) {
            if (playerArr[i].name == e.target.getAttribute("name")) {
                selectPlayer(playerArr[i])
            }
        }
    }

    return (
        <div className="modal">
            <div className="modal__container">
                <span className="modal__exit" onClick={toggleModal}>x</span>
                <PlayerCard playerArr={playerArr} setSelectedKeeper={setSelectedKeeper} handleSelectedPlayer={handleSelectedPlayer}/>
            </div>
        </div>
    )

}

export default Modal;
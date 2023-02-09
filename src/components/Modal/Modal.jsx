import "./Modal.scss";
import PlayerCard from "../PlayerCard/PlayerCard";

const Modal = ({playerArr, toggleModal}) => {

    return (
        <div className="modal">
            <div className="modal__container">
                <span className="modal__exit" onClick={toggleModal}>x</span>
                <PlayerCard playerArr={playerArr}/>
            </div>
        </div>
    )

}

export default Modal;
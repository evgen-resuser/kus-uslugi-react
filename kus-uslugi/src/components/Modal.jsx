import PropTypes from "prop-types";
import "/src/styles/modal.css"
import ReactDOM from 'react-dom';
import Form from "./Form.jsx";
import CloseButton from "./CloseButton.jsx";

export default function Modal({isShown, showControl}) {

    return ReactDOM.createPortal(
        <div className={"modal-container"}>
            <div className={"modal-form".concat(!isShown ? " hidden" : "")}>
                <CloseButton func={showControl}/>
                <Form/>
            </div>
        </div>,
        document.getElementById("modal-root")
    );
}

Modal.propTypes = {
    children: PropTypes.object,
    isShown: PropTypes.bool,
    showControl: PropTypes.func,
}
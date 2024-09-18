import PropTypes from "prop-types";
import "/src/styles/close_button.css"

export default function CloseButton({func}) {
    return (
        <button onClick={func} className={"close-button"}>×</button>
    )
}

CloseButton.propTypes = {
    func: PropTypes.func,
}
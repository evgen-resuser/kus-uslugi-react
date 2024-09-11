import PropTypes from "prop-types";

export default function Commentary({header, content, img}) {
    return (
        <div>
            <h2>{header}</h2>
            <p>{content}</p>
        </div>
    );
}

Commentary.PropTypes = {
    header: PropTypes.string,
    content: PropTypes.string,
    img: PropTypes.any,
}
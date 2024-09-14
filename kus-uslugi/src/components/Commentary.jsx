import PropTypes from "prop-types";

import "/src/styles/commentary.css"

export default function Commentary({cat}) {

    return (
        <div className={"commentary-card"}>
            <h2 className={"commentary-name"}>{cat.name}</h2>
            <img src={cat.img} alt={"cat-pic"} className={"commentary-img"}/>
            <blockquote className={"commentary-comm"}>{cat?.commentary}</blockquote>
        </div>
    );
}

Commentary.propTypes = {
    cat: PropTypes.object,
}
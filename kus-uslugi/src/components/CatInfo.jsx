import PropTypes from "prop-types";

export default function CatInfo({name, job, img, desc}) {
    return (
        <article>
            <h3>{name}</h3>
            <span>{job}</span>
            <img src={img} alt={"pic"}/>
        </article>
    );
}

CatInfo.propTypes = {
    name: PropTypes.string,
    job: PropTypes.string,
    img: PropTypes.string,
    desc: PropTypes.string,
}
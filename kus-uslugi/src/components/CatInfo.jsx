import PropTypes from "prop-types";
import "/src/styles/cat_info.css"
import {isClass} from "eslint-plugin-react/lib/util/ast.js";

export default function CatInfo({name, job, img, desc, isClicked, onClick, id}) {

    return (
        <>
            <article className={"cat-card"}
                     onClick={() => onClick(id)}
            >
                <div className={"cat-name-job"}>
                    <span className={"cat-name"}>{name} {isClicked ? "v" : "x"}</span>
                    <span className={"cat-job"}>{job}</span>
                </div>
                <div className={"img-container"}>
                    <img src={img} alt={"pic"}/>
                </div>
            </article>
        </>

    );
}

CatInfo.propTypes = {
    name: PropTypes.string,
    job: PropTypes.string,
    img: PropTypes.string,
    desc: PropTypes.string,
    isClicked: PropTypes.bool,
    onClick: PropTypes.func,
    id: PropTypes.number,
}
import PropTypes from "prop-types";
import "/src/styles/cat_info.css"

export default function CatInfo({cat, closeTab}) {

    return (
        <article className={"cat-info".concat(cat ? "" : " hidden")}>
            <div className={"cat-info-container"}>
                <button className={"cat-info-close-button"} onClick={closeTab}>×</button>
                <div className={"cat-info-header"}>
                    <h3 className={"cat-info-name"}>{cat?.name}</h3>
                    <h4 className={"cat-info-job"}>{cat?.job}</h4>
                </div>
                <div className={"cat-info-img-container"}>
                    <img src={cat?.img} alt={"cat-img"}/>
                </div>
                <p className={"cat-info-desc"}>{cat?.desc}</p>
            </div>
        </article>
    );
}

CatInfo.propTypes = {
    cat: PropTypes.object,
    closeTab: PropTypes.func,
}
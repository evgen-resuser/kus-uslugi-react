import PropTypes from "prop-types";
import "/src/styles/cat_card.css"


export default function CatCard({name, job, img, onClick, id}) {

    return (
        <>
            <article className={"cat-card"}
                     onClick={() => onClick(id)}>
                <div className={"cat-name-job"}>
                    <span className={"cat-name"}>{name}</span>
                    <span className={"cat-job"}>{job}</span>
                </div>
                <div className={"img-container"}>
                    <img src={img} alt={"pic"}/>
                </div>
            </article>
        </>

    );
}

CatCard.propTypes = {
    name: PropTypes.string,
    job: PropTypes.string,
    img: PropTypes.string,
    onClick: PropTypes.func,
    id: PropTypes.number,
}
import "/src/styles/cat_list.css"

import CatInfo from "./CatInfo.jsx";
import CatCard from "./CatCard.jsx";
import {useContext, useRef, useState} from "react";
import {Context} from "../Context.js";


export default function CatsList() {

    const [clicked, setClicked] = useState(null);

    const cats = useContext(Context).catsFile;

    const listRef = useRef(null);

    const catsList = cats.map((cat, index) => (
        <CatCard name={cat.name}
                 job={cat.job}
                 desc={cat.desc}
                 img={cat.img}
                 key={cat.id}
                 id={cat.id}
                 onClick={() => click(index)}
        />)
    );

    function click(id) {
        setClicked(cats[id]);
    }

    function slideRight() {

        let slider = listRef.current;
        let width = slider.scrollWidth;
        let card = width / slider.children.length;

        if (slider.scrollLeft < width) {
            slider.scrollLeft += card;
        } else {
            slider.scrollLeft = width;
        }

    }

    function slideLeft() {

        let slider = listRef.current;
        let width = slider.scrollWidth;
        let card = width / slider.children.length;

        if (slider.scrollLeft >= card) {
            slider.scrollLeft -= card;
        } else {
            slider.scrollLeft = 0;
        }
    }

    return (
        <div className={"list-container"}>

            <button className={"control-button"} onClick={slideLeft}>⏴
            </button>
            <ul id={"cat-slider"} className={"cats-ul"} ref={listRef}>{catsList}</ul>
            <button className={"control-button"} onClick={slideRight}>⏵
            </button>
            <CatInfo cat={clicked} closeTab={() => setClicked(null)}/>
        </div>
    );
}
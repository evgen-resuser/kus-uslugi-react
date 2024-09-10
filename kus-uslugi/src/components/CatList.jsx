import "/src/styles/cat_list.css"
import {cats} from "/test_data.js"
import CatInfo from "./CatInfo.jsx";
import {useState} from "react";


export default function CatsList() {

    const [clicked, setClicked] = useState(null);

    function click(id) {
        console.log(id + " clicked")
        setClicked(id);
    }

    const catsList = cats.map((cat) => (
        <CatInfo name={cat.name}
                 job={cat.job}
                 desc={cat.desc}
                 img={cat.img}
                 key={cat.id}
                 id={cat.id}
                 onClick={click}
                 isClicked={clicked === cat.id}
        />)
    );

    function slideRight() {
        let slider = document.getElementById("cat-slider");
        let card = slider.firstChild.offsetWidth;
        let width = slider.offsetWidth;
        if (slider.scrollLeft < width) {
            slider.scrollLeft += card;
        } else {
            slider.scrollLeft = width - card;
        }
    }

    function slideLeft() {
        let slider = document.getElementById("cat-slider");
        let card = slider.firstChild.offsetWidth;
        if (slider.scrollLeft <= card) {
            slider.scrollLeft -= card;
        } else {
            slider.scrollLeft = 0;
        }
    }

    return (
        <div className={"list-container"}>

            <button className={"control-button"} onClick={slideLeft}>⏴
            </button>
            <ul id={"cat-slider"} className={"cats-ul"}>{catsList}</ul>
            <button className={"control-button"} onClick={slideRight}>⏵
            </button>

        </div>
    );
}
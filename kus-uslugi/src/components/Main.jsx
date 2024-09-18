import "/src/styles/main.css"
import Greetings from "./Greetings.jsx";
import CatsList from "./CatList.jsx";
import Commentary from "./Commentary.jsx";
import VideoBlock from "./VideoBlock.jsx";
import JumpToStart from "./JumpToStart.jsx";
import {useContext, useState} from "react";
import {Context} from "../Context.js";
import Modal from "./Modal.jsx";

export default function Main() {
    const cats = useContext(Context).catsFile;

    const [isFormShown, setFormShown] = useState(false);
    function handleFormClick() {
        setFormShown(!isFormShown);
    }

    return (
        <main>
            <Modal isShown={!!isFormShown} showControl={handleFormClick}/>
            <Greetings showForm={handleFormClick}/>
            <div className={"main-body"}>
                <VideoBlock/>
                <h2 className={"header2"}>Познакомьтесь с нашими клиентами!</h2>
                <CatsList/>
                <h2 className={"header2"}>А что говорят наши кисики?</h2>
                <Commentary cat={cats[0]} />
                <Commentary cat={cats[1]} />
                <JumpToStart/>
            </div>
        </main>
    );
}
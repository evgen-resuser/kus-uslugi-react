import "/src/styles/main.css"
import Greetings from "./Greetings.jsx";
import CatsList from "./CatList.jsx";
import {useContext} from "react";
import {ThemeContext} from "../Context.js";

export default function Main() {
    return (
        <main>
            <Greetings/>
            <p>Current theme: {useContext(ThemeContext)}</p>
            <div className={"main-body"}>
                <h2 className={"header2"}>Познакомьтесь с нашими клиентами!</h2>
                <CatsList/>
            </div>
        </main>
    );
}
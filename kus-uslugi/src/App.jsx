import './App.css'
import "./Context.js"

import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

import {Context, ContextSetter} from "./Context.js";
import {cats} from "/test_data.js"
import {useState} from "react";

function App() {
    const [context, setContext] = useState({
        "theme": "light",
        "lang": "ru",
        "catsFile": cats
    });


    return (
        <>
            <Context.Provider value={context}>
                <ContextSetter.Provider value={setContext}>
                    <Header isVisible={false}/>
                    <Main/>
                    <Footer/>
                </ContextSetter.Provider>
            </Context.Provider>
        </>

    )
}

export default App

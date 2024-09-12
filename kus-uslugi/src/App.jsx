import './App.css'
import "./Context.js"
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import {ThemeContext} from "./Context.js";
import {useState} from "react";

function App() {
    const [theme, setTheme] = useState("light");

    return (
        <>
            <ThemeContext.Provider value={theme}>
                <Header isVisible={false} themeSetter={setTheme}/>
                <Main/>
                <Footer/>
            </ThemeContext.Provider>
        </>

    )
}

export default App

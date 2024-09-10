import "/src/styles/header.css"
import logo from "/logo-cat.svg"
import PropTypes from "prop-types";
import TextLogo from "./TextLogo.jsx";
import {useEffect, useState} from "react";
import ThemeSwitcher from "./ThemeSwitcher.jsx";

export default function Header({themeSetter}) {

    let [vis, setVis] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const scrollHeight = window.scrollY;

            scrollHeight > windowHeight ? setVis(true) : setVis(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={vis ? "header" : "header-hidden"}>
            <div className='title-div'>
                <img src={logo} alt={'logo'} className='logo-img'/>
                <TextLogo/>
                <ThemeSwitcher/>
            </div>
        </header>
    );
}

Header.propTypes = {
    themeSetter: PropTypes.func,
}

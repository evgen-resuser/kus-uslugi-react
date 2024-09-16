import "/src/styles/header.css"
import logo from "/logo-cat.svg"
import logo_small from "/logo1.svg"
import PropTypes from "prop-types";
import TextLogo from "./TextLogo.jsx";
import {useEffect, useState} from "react";

export default function Header() {

    const [vis, setVis] = useState(false);

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
        <header className={(vis ? "header" : "header-hidden")}>
            <div className='title-div'>
                <img src={logo} alt={'logo'} className='logo-img'/>
                <img src={logo_small} alt={'logo'} className='logo-img-small'/>
                <TextLogo/>
            </div>
            <div className={"header-button-container"}>

            </div>
        </header>
    );
}

Header.propTypes = {
    themeSetter: PropTypes.func,
}

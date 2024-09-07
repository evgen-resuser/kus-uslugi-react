import "/src/styles/header.css"
import logo from "/logo.svg"
import PropTypes from "prop-types";
import TextLogo from "./TextLogo.jsx";
import {useEffect, useState} from "react";
// import Switcher from "./Switcher.jsx";

export default function Header(props) {

    let [vis, setVis] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const scrollHeight = window.scrollY;

            if (scrollHeight > windowHeight) {
                setVis(true);
            } else {
                setVis(false);
            }
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
            </div>
            {/*<Switcher />*/}
        </header>
    );
}

Header.propTypes = {
}

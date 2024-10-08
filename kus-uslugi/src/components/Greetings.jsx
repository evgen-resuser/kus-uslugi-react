import "/src/styles/greetings.css"
import logo from "/wl.svg"
import FormButton from "./FormButton.jsx";


export default function Greetings({showForm}) {

    return (
        <div className={"greetings-container"} id={"page-start"}>
            <div className={"big-logo-container"}>
                <img src={logo} alt={"logo"} className={"white-logo"}/>
            </div>
            <article className={"quote"}>Мы помогаем кисикам, которые не оправдываются наличием лапок, найти свое
                призвание!
            </article>
            <FormButton onClick={showForm}/>

            <ul className={"particles-container"}>
                <li className={"particle"}></li>
                <li className={"particle"}></li>
                <li className={"particle"}></li>
                <li className={"particle"}></li>
            </ul>
        </div>
    );
}
import "/src/styles/main.css"
import Greetings from "./Greetings.jsx";
import CatsList from "./CatList.jsx";
import Commentary from "./Commentary.jsx";
import VideoBlock from "./VideoBlock.jsx";
import JumpToStart from "./JumpToStart.jsx";

export default function Main() {
    return (
        <main>
            <Greetings/>
            <div className={"main-body"}>
                <VideoBlock/>
                <h2 className={"header2"}>Познакомьтесь с нашими клиентами!</h2>
                <CatsList/>
                <Commentary/>
                <Commentary/>
                <JumpToStart/>
            </div>
        </main>
    );
}
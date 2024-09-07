import "/src/styles/greetings.css"
import TextLogo from "./TextLogo.jsx";
import FormButton from "./FormButton.jsx";

export default function Greetings() {
    return (
        <div className={"greetings-container"}>
            <div className={"big-text-logo"}>
                <TextLogo/>
            </div>
            <article className={"quote"}>Мы помогаем кисикам, которые не оправдываются наличием лапок, найти свое призвание!</article>
            <FormButton />
        </div>
    );
}
import SocialButton from "./SocialButton.jsx";
import "/src/styles/footer.css"

export default function Footer() {
    return (
        <footer>
            <div className={"name-block"}>Сыроежкин Евгений. 2024.</div>
            <div className={"socials-block"}>
                <SocialButton name={"telegram"}/>
                <SocialButton name={"github"}/>
            </div>
        </footer>
    )
}
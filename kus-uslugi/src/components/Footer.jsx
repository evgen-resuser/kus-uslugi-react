import SocialButton from "./SocialButton.jsx";
import "/src/styles/footer.css"
import tg_logo from "/tg-icon.svg"
import gh_logo from "/gh-icon.svg"

export default function Footer() {
    return (
        <footer>
            <div className={"footer-text-block"}>
                <div className={"name-block"}>2024 Сыроежкин Евгений</div>
                <span className={"copyright"}> Сайт является пародией на портал <a href={"https://gosuslugi.ru"}>Госуслуги</a></span>
            </div>
            <div className={"socials-block"}>
                <SocialButton icon={tg_logo}
                              name={"telegram"}
                              link={"https://t.me/resuserr"}
                />
                <SocialButton icon={gh_logo}
                              name={"github"}
                              link={"https://github.com/evgen-resuser/kus-uslugi-react"}
                />
            </div>
        </footer>
    )
}
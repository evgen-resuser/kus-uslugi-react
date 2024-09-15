import "/src/styles/jump_to_start.css"

export default function JumpToStart() {

    return (
        <div className={"jump-container"}>
            <h2>Ну что, кисик, хочешь сам зарабатывать на рыбов?</h2>
            <div>Заполняй анкету и мы поможем тебе выбрать профессию мечты.</div>
            <a className={"jump-to-start"} href={"#page-start"}>
                Заполнить!
            </a>
        </div>
    );
}
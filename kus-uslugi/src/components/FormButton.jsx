import "/src/styles/form_button.css"

export default function FormButton({onClick}) {
    return (
        <button className={"form-button"} onClick={onClick}>Заполнить заявку!</button>
    )
}
import "/src/styles/form.css"
import PlaceSearchBar from "./PlaceSearch.jsx";

export default function Form() {
    return (
        <section className={"form-section"}>
            <h2>Заявка</h2>
            <fieldset className={"form-fieldset-two"}>
                <legend>Персональные данные</legend>
                <label>
                    Имя
                    <input type={"text"} className={"form-input-text"}/>
                </label>
                <label>
                    Пол
                    <select>
                        <option>Самец</option>
                        <option>Самка</option>
                    </select>
                </label>
                <label htmlFor={"city-searchbar"}>
                    Город проживания вашего двуногого
                </label>
                <PlaceSearchBar id={"city-searchbar"}/>
                <label>
                    Возраст
                    <input type={"number"} min={0} max={30} defaultValue={0} className={"form-input-number"}/>
                </label>
                <div style={{alignSelf: 'center', width: "100%"}}>
                    <input id={"checkbox"} type={"checkbox"} className={"form-input-checkbox"}/>
                    <label htmlFor={"checkbox"}>
                        Есть опыт работы
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <legend>Умения и предпочтения</legend>
                Опиши, что тебе нравится и чем бы ты хотел заняться.
                <textarea className={"form-text-area"}/>
            </fieldset>
            <button className={"submit-button"} type="submit">Отправить</button>
        </section>
    );
}
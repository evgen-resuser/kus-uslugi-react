import {Context, ContextSetter} from "../Context.js";
import {useContext} from "react";

export default function ThemeSwitcher() {

    const context = useContext(Context);
    const setContext = useContext(ContextSetter);

    function handleChange(option) {
        if (!setContext) return;
        setContext({...context, "theme": option.target.value})
    }

    return (
        <div>
            <select value={"light"} onChange={handleChange}>
                <option value={"light"}>light</option>
                <option value={"dark"}>dark</option>
            </select>
        </div>
    );
}
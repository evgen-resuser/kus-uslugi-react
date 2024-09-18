import "/src/styles/place-search.css"

import places_test from "../../places_test.js";
import {useState} from "react";

export default function PlaceSearchBar() {

    const [showDropdown, setShowDropdown] = useState(false);
    const [input, setInput] = useState("");

    let results = [... places_test];

    const wrapPlaces = (places) => {
        return (
            showDropdown &&
            <ul className={"results"}
                onBlur={() => setShowDropdown(false)}
            >
                {places.filter(item => item.toLowerCase().includes(input.toLowerCase())).map((p, index) => (
                    <li
                        className={"result"}
                        key={index}
                        onClick={() => handleSelect(p)}
                    >
                        {p}
                    </li>
                ))}
            </ul>
        );
    };

    const handleInputChange = (value) => {
        setInput(value);
        setShowDropdown(true);
    };

    const handleSelect = (value) => {
        setInput(value);
        setShowDropdown(false);
    };

    return (
        <div className={"search-container"}>
            <input
                type="search"
                id="header-search"
                name="s"
                className={"search-bar"}
                value={input}
                placeholder={"начните набирать город..."}
                onChange={e => handleInputChange(e.target.value)}
            />
            {wrapPlaces(results)}
        </div>
    );
}
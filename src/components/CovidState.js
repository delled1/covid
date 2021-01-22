import React, { useState, useEffect } from "react";
import './CovidCard.css'
import CovidInfo from "./CovidInfo"
export default function CovidState(props) {

    console.log(props.state)
    const stateCovid = props.state;
    var result = Object.keys(stateCovid).map(key => ({ key, value: stateCovid[key] }));


    console.log(stateCovid)
    console.log(result)

    const [searchTerm, setSearchTerm] = useState("");
    const [state, setState] = useState(result)
    console.log(state)

    useEffect(() => {
        const results = result.filter((search) => {
            return search.key.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setState(results);
    }, [searchTerm]);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="App">
            <form>
                {/* We apply two-way data binding to the input field, which basically takes the value from the user and saves it into the state. */}
                {/* Two-way binding just means that:
          When properties in the state get updated, so does the UI.
          When UI elements get updated, the changes get propagated back to the state. */}
                <label htmlFor="name">Search:</label>
                <input
                    id="name"
                    type="text"
                    name="textfield"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleChange}
                />
            </form>
            <div>
                {/* {Object.keys(stateCovid).map((keyName, i) => (
                    <li className="travelcompany-input" key={i}>
                        {state[keyName]}
                        {state[keyName]}
                        {console.log(state[keyName])}

                    </li>
                ))} */}
                <ul>
                    {Object.entries(state).map(([key, value]) => (<li key={key}>
                        {value.key}
                        <br />
                        Confirmed: {value.value.confirmed}
                        <br />
                        Recovered: {value.value.recovered}
                        <br />
                        Deaths: {value.value.deaths}
                        {/* {console.log(key)} */}
                        {/* {console.log(key)} */}

                    </li>))}
                </ul>
                {/* {Object.keys(stateCovid).map(key => ({ key, value: stateCovid[key] }))} */}
                {/* var result = Object.keys(stateCovid).map(key => ({ key, value: stateCovid[key].confirmed }));
    console.log(result) */}
            </div>
        </div >
    )
}
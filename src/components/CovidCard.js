import React, { useState, useEffect } from "react";
import CovidState from "./CovidState"



export default function CovidCard(props) {


    const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Minor Outlying Islands', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'U.S. Virgin Islands', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']


    const stateFilter = states.filter(state => {
        return state.includes('Washington')
    })


    // console.log(covidKeysMap)

    // console.log(covidKeysValuesMap)
    // console.log(covidKeysMap[0], covidKeysValuesMap[0])
    // console.log(covidKeysMap[1], covidKeysValuesMap[1])

    return (

        <div>
            <h2>COVID</h2>
            <CovidState state={props.covid} />

            {/* Confirmed: {covidKeysValues[1].confirmed}
        //     <br/>
        //     Recovered: {covidKeysValues[1].recovered}
        //     <br/>
        //     Deaths: {covidKeysValues[1].deaths} */}
        </div>

    )
}

// function CovidDetails(props) {
//     const {}
// }
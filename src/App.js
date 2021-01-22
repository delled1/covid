import logo from './logo.svg';
import './App.css';
import CovidCard from "./components/CovidCard"
import { Route, Switch, Link } from "react-router-dom"
import Home from "./components/Home"
import axios from "axios"
import { useEffect, useState } from 'react';

function App() {

  const [covidInfo, setCovidInfo] = useState([]);

  useEffect(() => {
    const getCovidInfo = () => {
      axios
        .get('https://cors-anywhere.herokuapp.com/https://covid-api.mmediagroup.fr/v1/cases?country=US')
        .then(response => {
          // console.log(response)
          // console.log(response.data)
          setCovidInfo(response.data)

        })
        .catch(error => {
          console.error('Server Error', error)
        })
    }
    getCovidInfo();
  }, []);
  return (

    <Switch>
      {/* <Route exact path="/" component={Home} /> */}
      
      <Route exact path="/" component={CovidCard}>
        
        <CovidCard covid={covidInfo} />
      </Route>


    </Switch>

  );
}

export default App;

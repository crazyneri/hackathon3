import "./App.css";
import { useEffect, useState } from "react";
import Flights from "./Flights";
import { DateTime } from "luxon";
import Destination from "./Components/Destination";
import Origin from "./Components/Origin";
import Flights from "./components/Flights";

function App() {
  const [flights, setFlights] = useState([]);

  const [flyfrom, setFlyfrom] = useState("");
  const [flyto, setFlyto] = useState("");
  const [datefrom, setDatefrom] = useState(""); //05 / 11 / 2021; format
  const [dateto, setDateto] = useState(""); //05 / 11 / 2021;

  const url = `https://api.skypicker.com/flights?fly_from=${flyfrom}&fly_to=${flyto}&&date_from=${datefrom}&date_to=${dateto}&partner=data4youcbp202106`;

  async function fetchData() {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result.data);
    setFlights(result.data);
  }

  /* {
    code: 'VLC',
    name: 'Valencia'
  } */

  useEffect(() => {
    fetchData();
  }, []);

  console.log(flights);

  // select destination
  const [filteredDestination, setFilteredDestination] = useState("");
  const destinationFilterHandler = (destinationCountry) => {
    console.log("App.js - destination");
    setFilteredDestination(destinationCountry);
  };

  // select origin
  const [filteredOrigin, setFilteredOrigin] = useState("");
  const originFilterHandler = (originCountry) => {
    console.log("App.js - origin");
    setFilteredOrigin(originCountry);
  };

  return (
    <div className="App">
      <Destination
        selected={filteredDestination}
        onSelectDestination={destinationFilterHandler}
      />
      <Origin value={filteredOrigin} onSelectOrigin={originFilterHandler} />
      <Flights flights={flights} />
    </div>

    /* 2 ul lists of countries from classes: Valencia, Barcelona, Madrit... an destinations from classes too */
    /* onClick change the selected FROM and selected destinations */

    /* each of list element will be the component with properties */
  );
}

export default App;

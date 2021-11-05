import "./App.css";
import { useEffect, useState } from "react";
import { DateTime } from "luxon";
import Flights from "./Flights";
import Destination from "./Components/Destination";
import Origin from "./Components/Origin";

function App() {
  const [flights, setFlights] = useState([]);
  const url =
    "https://api.skypicker.com/flights?fly_from=PRG&fly_to=VLC&&date_from=05/11/2021&date_to=05/11/2021&partner=data4youcbp202106";

  async function fetchData() {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result.data);
    setFlights(result.data);
  }

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
  );
}

export default App;

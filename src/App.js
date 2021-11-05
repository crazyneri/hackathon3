import "./App.css";
import { useEffect, useState } from "react";
import { DateTime } from "luxon";
import Flights from "./Flights";

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
  return (
    <div className="App">
      <Flights flights={flights} />
    </div>
  );
}

export default App;

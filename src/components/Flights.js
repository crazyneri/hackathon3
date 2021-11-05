import { DateTime } from "luxon";

function Flights(props) {
  return (
    <div>
      {props.flights.map((flight, i) => (
        <div key={i}>
          <p>
            Flight from: <strong>{flight.cityFrom}</strong> - Flight to:{" "}
            <strong>{flight.cityTo}</strong>
          </p>

          <p>
            Time of departure:
            {DateTime.fromMillis(flight.duration.departure * 1000).toFormat(
              "hh:mm"
            )}
          </p>

          <p>Price: {flight.conversion.EUR} EUR</p>
        </div>
      ))}
    </div>
  );
}

export default Flights;

function Destination(props) {
  const dropdownChangeHandler = (e) => {
    props.onSelectDestination(e.target.value);
  };

  return (
    <div className="drop-down">
      <label>Destination: </label>

      {/* listen to changes on select */}
      <select
        value={props.selected}
        onChange={dropdownChangeHandler}
        id="destination"
      >
        <option className="select-placeholder" value="">
          Select destination
        </option>
        <option value="Valencia">Valencia</option>
        <option value="Barcelona">Barcelona</option>
        <option value="Madrid">Madrid</option>
        <option value="Milano">Milano</option>
        <option value="Athens">Athens</option>
      </select>
    </div>
  );
}

export default Destination;

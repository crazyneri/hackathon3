function Origin(props) {
  const dropdownOriginHandler = (e) => {
    props.onSelectOrigin(e.target.value);
  };
  return (
    <div className="drop-down">
      <label>Origin: </label>
      <select onChange={dropdownOriginHandler} id="origin">
        <option className="select-placeholder" value="">
          Select departure
        </option>
        <option value="Prague">Prague</option>
        <option value="Berlin">Berlin</option>
        <option value="Warsaw">Warsaw</option>
        <option value="Pardubice">Pardubice</option>
      </select>
    </div>
  );
}

export default Origin;

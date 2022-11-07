import useFetchApi from "../useFetchApi";

function List() {
  const [isLoading, isError, temperature, condition, inputCity, setInputCity] =
    useFetchApi("");

  return (
    <>
      {isLoading && <div style={{ textAlign: "center" }}>LOADING</div>}
      {isError && <div style={{ textAlign: "center" }}>ERROR</div>}
      <div className="App">
        {temperature && condition && (
          <>
            <header className="location-box">
              <div className="location">{inputCity}</div>
            </header>
            <div className="weather-box">
              <div className="temp"> {temperature}°C </div>
              <div className="weather">{condition}</div>
            </div>
          </>
        )}

        <div className="weather-box">
          <input
            className="search-bar"
            placeholder="Введіть місто..."
            type={"text"}
            value={inputCity}
            onChange={(event) => {
              setInputCity(event.target.value);
            }}
          />
          {/* <button type="button" onClick={setInputCity}>
            Показати погоду
          </button> */}
        </div>
      </div>
    </>
  );
}

export default List;

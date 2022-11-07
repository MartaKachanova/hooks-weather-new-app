import { useEffect, useState } from "react";

export default function useFetchApi() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [inputCity, setInputCity] = useState();
  const [temperature, setTemperature] = useState("");
  const [condition, setCondition] = useState("");

  useEffect(() => {
    fetch(
      "https://api.weatherapi.com/v1/current.json?key=0fad4c06c1af4409aef200446220611&q=" +
        inputCity +
        "&aqi=no"
    )
      .then((el) => el.json())
      .then((data) => {
        setIsLoading(false);
        setTemperature(data?.current?.temp_c);
        setCondition(data?.current?.condition.text);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [inputCity]);

  return [isLoading, isError, temperature, condition, inputCity, setInputCity];
}
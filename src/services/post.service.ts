import axios from "axios";
import { Post, Weather } from "../types";

export function fetchAllPosts() {
  return axios
    .get<Post[]>("https://grandcircusco.github.io/demo-apis/quotes.json")
    .then((response) => response);
}

export function fetchWeather() {
  return axios
    .get<Weather[]>("https://api.weather.gov/gridpoints/DTX/65,33/forecast")
    .then((response) => response);
}

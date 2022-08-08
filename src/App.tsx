import "./App.css";
import { Posts } from "./component/posts";
import { WeatherFore } from "./component/WeatherForecast";

function App() {
  return (
    <div className="App">
      <WeatherFore />
      <Posts />
    </div>
  );
}

export default App;

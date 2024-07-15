import "./App.css";
import { CounterThis } from "components/CounterThis";
import { CounterAsyncLinkToElement } from "components/CounterAsyncLinkToElement";
import { CounterStateUpd } from "components/CounterStateUpd";
import { CounterStateDefProps } from "components/CounterStateDefProps";

function App() {
  return (
    <div className="App">
      <CounterThis step={1} />

      <CounterAsyncLinkToElement step={2} />

      <CounterStateUpd step={3} />

      <CounterStateDefProps />
    </div>
  );
}

export default App;

import "./App.css";
// import CounterThis from "components/Counter/CounterThis";
// import CounterAsyncLinkToElement from "components/Counter/CounterAsyncLinkToElement";
// import CounterStateUpd from "components/Counter/CounterStateUpd";

// import CounterStateDefProps from "components/Counter/"; // через реекспорт from index.js

import Dropdown from "components/DropdownMenu";

function App() {
  return (
    <div className="App">
      {/* <CounterThis step={1} />

      <CounterAsyncLinkToElement step={2} />

      <CounterStateUpd step={3} />

      <CounterStateDefProps step={3} /> */}

      <Dropdown />
    </div>
  );
}

export default App;

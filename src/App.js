import "./App.css";
// import CounterThis from "components/Counter/CounterThis";
// import CounterAsyncLinkToElement from "components/Counter/CounterAsyncLinkToElement";
// import CounterStateUpd from "components/Counter/CounterStateUpd";

// import CounterStateDefProps from "components/Counter/"; // через реекспорт from index.js

// import Dropdown from "components/DropdownMenu";

import colors from "dataBase/colors";
import ColorPicker from "components/ColorPicker";

function App() {
  return (
    <div className="App">
      {/* Counter */}
      {/* <CounterThis step={1} />
      <CounterAsyncLinkToElement step={2} />
      <CounterStateUpd step={3} />
      <CounterStateDefProps step={3} /> */}

      {/* Dropdown */}
      {/* <Dropdown /> */}

      {/* Color Picker */}
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;

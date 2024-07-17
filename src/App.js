import React, { Component } from "react";

import "./App.css";
// import CounterThis from "components/Counter/CounterThis";
// import CounterAsyncLinkToElement from "components/Counter/CounterAsyncLinkToElement";
// import CounterStateUpd from "components/Counter/CounterStateUpd";

// import CounterStateDefProps from "components/Counter/"; // через реекспорт from index.js

// import Dropdown from "components/DropdownMenu";

// import colors from "dataBase/colors";
// import ColorPicker from "components/ColorPicker";

import TodoList from "components/TodoList";
import initialTodos from "components/TodoList/todos.json";

// function App() {
//   return (
//     <div className="App">
//       {/* Counter */}
//       {/* <CounterThis step={1} />
//       <CounterAsyncLinkToElement step={2} />
//       <CounterStateUpd step={3} />
//       <CounterStateDefProps step={3} /> */}

//       {/* Dropdown */}
//       {/* <Dropdown /> */}

//       {/* Color Picker */}
//       <ColorPicker colors={colors} />
//     </div>
//   );
// }

class App extends Component {
  state = {
    todos: initialTodos,
  };

  onDeleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
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
        {/* <ColorPicker colors={colors} /> */}

        {/* Todo List */}
        <TodoList todos={todos} deleteTodo={this.onDeleteTodo} />
      </div>
    );
  }
}

export default App;

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

  onReadyTodos = () => this.state.todos.filter(todo => todo.completed === true);

  render() {
    const { todos } = this.state;
    const completedTodosCountV1 = todos.filter(todo => todo.completed === true);
    const completedTodosCountV2 = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0,
    );

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

        <p>Всього завдань: {todos.length}</p>
        <p>Виконаних завдань: {completedTodosCountV1.length}</p>
        <p>Виконаних завдань V2: {completedTodosCountV2}</p>
        <TodoList todos={todos} onDeleteTodo={this.onDeleteTodo} />
      </div>
    );
  }
}

export default App;

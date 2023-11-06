import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1 className="text-2xl md:text-3xl font-semibold">
        Learn about redux toolkit
      </h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;

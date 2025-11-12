import Primer1 from "./components/Primer1";
import Primer2 from "./components/Primer2";
import Primer3 from "./components/Primer3";
import Primer4 from "./components/Primer4";
import Primer5 from "./components/Primer5";
import Primer6 from "./components/Primer6";
import Primer7 from "./components/Primer7";
import CurrencyInput from "./components/CurrencyInput";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <h1>Примеры формул</h1>
      <ol>
        <Primer1 />
        <Primer2 />
        <Primer3 />
        <Primer4 />
        <Primer5 />
        <Primer6 />
        <Primer7 />
      </ol>
      <h2>Бонусное задание</h2>
      <CurrencyInput />
      <h2>Основное задание — TodoList</h2>
      <TodoList />
    </div>
  );
};

export default App;
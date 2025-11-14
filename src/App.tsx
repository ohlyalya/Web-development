import Primer1 from "./components/Primer1";
import Primer2 from "./components/Primer2";
import Primer3 from "./components/Primer3";
import Primer4 from "./components/Primer4";
import Primer5 from "./components/Primer5";
import Primer6 from "./components/Primer6";
import Primer7 from "./components/Primer7";
import CurrencyInput from "./components/CurrencyInput";
import TodoList from "./components/TodoList";
import ImageSlider from "./components/ImageSlider";
import "./App.css";

const App = () => {
  const images = [
    "https://i.pinimg.com/736x/b8/10/e0/b810e07b9ac613921e3fab6c228bd4a2.jpg",
    "https://i.pinimg.com/1200x/a6/91/ea/a691ea7232b9a6423edaf6b679c1cfe7.jpg",
    "https://i.pinimg.com/736x/2e/c8/a9/2ec8a948511a6053e76b027b88168c3d.jpg",
  ];
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
      <h2>Слайдер картинок</h2>
      <ImageSlider images={images} />
    </div>
  );
};

export default App;
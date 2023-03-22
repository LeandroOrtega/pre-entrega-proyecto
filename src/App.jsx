import "./App.css";
import Navbar from "../src/components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />

      <h1>La Casa De River Plate</h1>

      <ItemListContainer prop="ItemList" />
    </>
  );
}

export default App;

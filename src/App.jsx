import Contact from "child2/Contact";
import Urun from "kodman/Urun";
import "./App.css";
import MyButton from "./components/Button";
import DrawerExample from "./components/SideBar";

function App() {
  return (
    <>
      <DrawerExample />
      <MyButton />
      <Urun />
      <Contact />
    </>
  );
}

export default App;

import Contact from "child2/Contact";
import Urun from "kodman/Urun";
import MyButton from "../components/Button";
import DrawerExample from "../components/SideBar";

function Home() {
  return (
    <>
      <DrawerExample />
      <MyButton />
      <Urun />
      <Contact />
    </>
  );
}

export default Home;

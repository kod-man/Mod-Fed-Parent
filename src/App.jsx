import { Flex } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DrawerExample from "./components/SideBar";
import Home from "./pages/Home";

function App() {
  return (
    <Flex>
      <DrawerExample />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="urun" element={<h1>Urun</h1>} />
        <Route path="contact" element={<h1>Contact</h1>} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Flex>
  );
}

export default App;

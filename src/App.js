import { Routes, Route } from "react-router-dom";
import MakeMyProfile from "./components/MakeMyProfile";
import Home from "./components/Home";
import { Flex } from "@chakra-ui/react";
import Edit from "./components/Edit";

function App() {
  return (
    <Flex align="center" justify="center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/make-my-profile" element={<MakeMyProfile />} />
        <Route path="edit" element={<Edit />} />
      </Routes>
    </Flex>
  );
}

export default App;

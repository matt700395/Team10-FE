import { Routes, Route } from "react-router-dom";
import MakeMyProfile from "./pages/MakeMyProfile";
import Home from "./pages/Home";
import { Flex } from "@chakra-ui/react";
import Edit from "./pages/Edit";
import Search from "./pages/Search";

function App() {
  return (
    <Flex align="center" justify="center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/make-my-profile" element={<MakeMyProfile />} />
        <Route path="edit" element={<Edit />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </Flex>
  );
}

export default App;

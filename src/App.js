import { Routes, Route } from "react-router-dom";
import MakeMyProfile from "./pages/MakeMyProfile";
import Home from "./pages/Home";
import { Flex } from "@chakra-ui/react";
import Edit from "./pages/Edit";
import Search from "./pages/Search";
import GlobalStyle from "./styles/GlobalStyle";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import MyCard from "./components/MyCard";

function App() {
  return (
    <Flex align="center" justify="center">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/make-my-profile" element={<MakeMyProfile />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/search" element={<Search />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/MyCard" element={<MyCard />} />
      </Routes>
    </Flex>
  );
}

export default App;

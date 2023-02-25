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

  // var Airtable = require('airtable');
  // var base = new Airtable({apiKey: 
  //   'patrpSuf3uWydUhzB.e73259ec2fdb46c86877db7c20a94322ca15cd163ea2742d6fe6556983007281'}).base('appHtUVZtkAMqH1TT');

  return (
    <Flex align="center" justify="center">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/make-my-profile" element={<MakeMyProfile />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Flex>
  );
}

export default App;

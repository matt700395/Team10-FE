import React from "react";
import { Text, Flex, Button, ButtonGroup } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Flex justify="center" align="center" pt="100px" direction="column">
      <Text fontSize="3xl" textAlign="center">
        Make My
        <br />
        Profile
      </Text>
      <ButtonGroup mt="150px" gap="2">
        <Link to="/">
          <Button colorScheme="yellow">get other's</Button>
        </Link>
        <Link to="/make-my-profile">
          <Button colorScheme="yellow">make my own</Button>
        </Link>
        <Link to="/edit"></Link>
      </ButtonGroup>
    </Flex>
  );
};

export default Home;

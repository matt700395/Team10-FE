import React from "react";
import { Text, Flex, Button, ButtonGroup } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Flex justify="center" align="center" pt="100px" direction="column">
      <Text fontSize="5xl" textAlign="center">
        <Text color="#90DC61CC">Make My</Text>
        <Text color="#FEB2B2">Profile</Text>
      </Text>
      <ButtonGroup mt="20px">
        <Flex direction="column" alignItems="center">
          <Link to="/make-my-profile">
            <Button color="white" backgroundColor="#FEB2B2" mb="10px" w="280px">
              make my own
            </Button>
          </Link>
          <Link to="/">
            <Button color="white" backgroundColor="#90DC61CC" w="280px">
              get other's
            </Button>
          </Link>
        </Flex>
      </ButtonGroup>
    </Flex>
  );
};

export default Home;

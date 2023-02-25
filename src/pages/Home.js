import React from "react";
import { Text, Flex, Button, ButtonGroup, Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Flex
      direction="column"
      bgGradient="linear(to-b, #FFFCD7, #FFFFFF)"
      w="100%"
      h="100%"
      justify="center"
      align="center"
      pt="150px"
    >
      <Container fontSize="8xl" textAlign="center" lineHeight="6rem">
        <Text color="#90DC61CC">만반</Text>
        <Text color="#FEB2B2">잘부</Text>
      </Container>
      <ButtonGroup mt="50px">
        <Flex direction="column" alignItems="center">
          <Link to="/make-my-profile">
            <Button
              color="white"
              backgroundColor="#FEB2B2"
              mb="10px"
              w="280px"
              size="lg"
              fontWeight="light"
              fontSize="2xl"
              borderRadius="20px"
            >
              make my own
            </Button>
          </Link>
          <Link to="/">
            <Button
              color="white"
              backgroundColor="#90DC61CC"
              w="280px"
              fontWeight="light"
              size="lg"
              fontSize="2xl"
              borderRadius="20px"
            >
              get other's
            </Button>
          </Link>
        </Flex>
      </ButtonGroup>
    </Flex>
  );
};

export default Home;

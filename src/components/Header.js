import React from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  Text,
  Flex,
  Image,
  Spacer,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Header = ({ title }) => {
  return (
    <Flex
      backgroundColor="#FFDA0059"
      width="100%"
      mb="50px"
      justify="center"
      align="center"
    >
      <Spacer />
      <Text fontSize="2xl" pl="45px" pt="8px" pb="5px" color="#AACB73">
        {title}
      </Text>
      <Spacer />
      <Menu>
        <MenuButton
          as={IconButton}
          color="white"
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="none"
          float="right"
          fontSize="4xl"
          mr="10px"
        />
        <MenuList backgroundColor="#FDEE92" width="50%">
          <Link to="/">
            <MenuItem
              fontSize="sm"
              backgroundColor="#FDEE92"
              display="block"
              mt="10px"
            >
              <Image
                src={require("./../assets/my_page_icon.png")}
                margin="0 auto"
              ></Image>
              <Text textAlign="center">my page</Text>
            </MenuItem>
          </Link>
          <Link to="/search">
            <MenuItem fontSize="sm" backgroundColor="#FDEE92" display="block">
              <Image
                src={require("./../assets/search_icon.png")}
                margin="0 auto"
              ></Image>
              <Text textAlign="center">search</Text>
            </MenuItem>
          </Link>
          <Link to="/">
            <MenuItem
              fontSize="sm"
              backgroundColor="#FDEE92"
              display="block"
              mb="10px"
            >
              <Image
                src={require("./../assets/my_friends_icon.png")}
                margin="0 auto"
              ></Image>
              <Text textAlign="center">my friends</Text>
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Header;

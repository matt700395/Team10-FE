import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import {
  Input,
  IconButton,
  Flex,
  Container,
  Center,
  Image,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import FriendsCard from "../components/FriendsCard";
import axios from "axios";

const Search = () => {
  // my profile image
  const [profileImage, setProfileImage] = useState(
    require("../assets/profile.png")
  );

  const [friends, setFriends] = useState([
    { name: "유빈", profileImage: require("../assets/profile_2.jpg") },
    { name: "상우", profileImage: require("../assets/profile_1.png") },
    { name: "지현", profileImage: require("../assets/profile.png") },
  ]);

  const [keyword, setKeyword] = useState("");

  // 친구들 목록 가져오기
  useEffect(() => {
    // axios.get("/friends").then((response) => setFriends(response));
  }, []);

  // search input event listener
  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  // search button click
  const onClick = () => {
    // axios
    //   .get(`/friends?search=${keyword}`)
    //   .then((response) => setFriends(response));
  };

  return (
    <Container
      centerContent
      bgGradient="linear(to-b, #FFFCD7, #FFFFFF)"
      maxW="100%"
      w="100%"
      h="100%"
      m="0"
      p="0"
    >
      <Header title="Make My Profile" />

      <Flex mt="20px" mb="30px">
        <Input
          placeholder="find your friend"
          mr="5px"
          onChange={onChange}
          backgroundColor="white"
        />
        <IconButton
          colorScheme="blue"
          aria-label="Search database"
          icon={<SearchIcon />}
          backgroundColor="#AACB73"
          onClick={onClick}
        />
      </Flex>

      {/* 프로필 이미지 */}
      <Container>
        <Center>
          <Image
            borderRadius="full"
            fit="cover"
            boxSize="150px"
            src={profileImage}
            alt="Profile Image"
          />
        </Center>
      </Container>
      <Text textAlign="center">Username</Text>

      {/* 친구 목록 카드 */}
      <Container
        maxW="100%"
        p="0"
        mt="30px"
        // backgroundImage={require("../assets/search_background.png")}
        // backgroundPosition="center"
        // backgroundSize="cover"
      >
        <Text textAlign="center" mb="20px">
          Friends
        </Text>
        <Container>
          <FriendsCard friends={friends} />
        </Container>
      </Container>
    </Container>
  );
};

export default Search;

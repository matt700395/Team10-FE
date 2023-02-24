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
import FriednsCard from "../components/FriednsCard";
import axios from "axios";

const Search = () => {
  // my profile image
  const [profileImage, setProfileImage] = useState(
    "https://bit.ly/dan-abramov"
  );

  const [friends, setFriends] = useState();

  const [keyword, setKeyword] = useState("");

  // 친구들 목록 가져오기
  useEffect(() => {
    axios.get("/friends").then((response) => setFriends(response.data));
  }, []);

  // search input event listener
  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  // search button click
  const onClick = () => {
    axios
      .get(`/friends?search=${keyword}`)
      .then((response) => setFriends(response.data));
  };

  return (
    <div>
      <Header title="Make My Profile" />
      <Flex>
        <Input placeholder="Basic usage" mr="5px" onChange={onChange} />
        <IconButton
          colorScheme="blue"
          aria-label="Search database"
          icon={<SearchIcon />}
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
      <Container maxW="md" overflow-x="auto">
        <Text textAlign="center">Friends</Text>
        <FriednsCard friends={friends} />
      </Container>
    </div>
  );
};

export default Search;

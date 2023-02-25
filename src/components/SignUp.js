import { Button, Input, Stack, Container } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // 이메일, 비밀번호, 이름, 전화번호를 사용하여 회원가입 처리
  };

  return (
    <Container
      centerContent
      bgGradient="linear(to-b, #FFFCD7, #FFFFFF)"
      maxW="100%"
      width="100%"
      h="100%"
      m="0"
      p="0"
    >
      <Header title="Sign Up" />
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <br />
          <label>
            이메일
            <Input
              placeholder="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              focusBorderColor="pink.400"
            />
          </label>
          <label>
            비밀번호
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              focusBorderColor="lime"
            />
          </label>
          <label>
            이름
            <Input
              placeholder="Name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              focusBorderColor="pink.400"
            />
          </label>
          <label>
            전화번호
            <Input
              placeholder="PhoneNumber"
              type="text"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              focusBorderColor="lime"
            />
          </label>
          <Link to="/Login">
            <Button backgroundColor={"#AACB73"} size="lg">
              Create My Profile!
            </Button>
          </Link>
        </Stack>
      </form>
    </Container>
  );
}

export default SignUp;

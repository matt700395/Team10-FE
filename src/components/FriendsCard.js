import React from "react";
import { Card, CardBody, Text, Center, Image, Flex } from "@chakra-ui/react";

const FriendsCard = ({ friends }) => {
  const friendsCard =
    friends &&
    friends.map((friend) => (
      <>
        <Card
          flex="0 0 auto"
          align="center"
          direction="row"
          justify="start"
          width="180px"
          height="260px"
          backgroundColor="#FFFCD7"
          rounded="50px"
          border="6px solid #D9D9D9"
          mr="8px"
        >
          <CardBody>
            <Text textAlign="center" key={friend.name}>
              {friend.name}
            </Text>

            <Center>
              <Image
                borderRadius="full"
                fit="cover"
                boxSize="125px"
                src={friend.profileImage}
                alt="Profile Image"
                mt="20px"
                //   onClick={}
              />
            </Center>
          </CardBody>
        </Card>
      </>
    ));
  return <Flex wrap="no-wrap">{friendsCard}</Flex>;
};

export default FriendsCard;

import React from "react";
import { Card, CardBody, Text, Center, Image, Flex } from "@chakra-ui/react";

const FriednsCard = ({ friends }) => {
  const friendsCard =
    friends &&
    friends.map((friend) => (
      <Flex wrap="nowrap">
        <Card
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
            <Text textAlign="center">{friends.name}</Text>

            <Center>
              <Image
                borderRadius="full"
                fit="cover"
                boxSize="125px"
                src="{friends.profileImage}"
                alt="Profile Image"
                mt="20px"
                //   onClick={}
              />
            </Center>
          </CardBody>
        </Card>

        {/* 카드 여러개 생기면 카드 사이즈가 줄어드는 이슈 있음 */}
      </Flex>
    ));
  return { friendsCard };
};

export default FriednsCard;

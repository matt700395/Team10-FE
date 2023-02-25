import React, { useState, useRef } from "react";
import Header from "../components/Header";
import {
  Button,
  Container,
  Image,
  Center,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Text,
  Flex,
  ModalFooter,
  FormControl,
} from "@chakra-ui/react";
import CategoryBlock from "../components/CategoryBlock";
import axios from "axios";

const MakeMyProfile = () => {
  const {
    isOpen: isOpenAddModal,
    onOpen: onOpenAddModal,
    onClose: onCloseAddModal,
  } = useDisclosure();

  const {
    isOpen: isOpenSaveModal,
    onOpen: onOpenSaveModal,
    onClose: onCloseSaveModal,
  } = useDisclosure();

  const [info, setInfo] = useState([
    {
      category: "name",
      content: "이름",
    },
  ]);

  const addInfoCategory = (category) => {
    setInfo([...info, { category: category, content: "" }]);
  };

  const addInfo = (category, content) => {
    let index = info.findIndex((obj) => obj.category === category);
    info[index].content = content;
  };

  const onRemove = (category) => {
    setInfo(info.filter((info) => info.category !== category));
  };

  const saveMyProfile = () => {
    // 프로필 저장 로직 (저장하면 어떤 화면으로 넘어가는지?)

    // request 구성
    const name = info.find((info) => info.category === "name");

    const tag = [];
    for (let i = 1; i < info.length; i++) {
      tag.push({ tagName: info[i].category, tagContent: info[i].content });
    }

    const request = {
      name: name.content,
      tag: tag,
      profileImage: profileImage,
    };

    console.log(request);

    // axios.post("url", { request }).then((response) => {
    //   console.log(response);
    // });
  };

  const [profileImage, setProfileImage] = useState(
    require("../assets/upload_image.png")
  );
  const fileInput = useRef(null);

  const onImgChange = (e) => {
    if (e.target.files[0]) {
      setProfileImage(e.target.files[0]);
    } else {
      setProfileImage(profileImage);
      return;
    }

    // 화면에 프로필 사진 표시
    const reader = new FileReader();
    reader.onload = () => {
      setProfileImage(reader.result || null);
    };
    reader.readAsDataURL(e.target.files[0]);
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
      <Header title="만반잘부" />

      {/* 프로필 이미지 업로드 */}
      <Container>
        <input
          type="file"
          style={{ display: "none" }}
          accept="image/*"
          name="profile_img"
          onChange={onImgChange}
          ref={fileInput}
        />

        <Center>
          <Image
            borderRadius="full"
            fit="cover"
            boxSize="150px"
            src={profileImage}
            alt="Profile Image"
            onClick={() => fileInput.current.click()}
          />
        </Center>
      </Container>

      {/* my block */}
      <Container mt="40px" w="80%" p="0px">
        <FormControl onSubmit={saveMyProfile}>
          <CategoryBlock
            info={info}
            onRemove={onRemove}
            addInfo={addInfo}
            profile={null}
          />
        </FormControl>
      </Container>

      {/* add block 버튼 */}
      <Button
        display="flex"
        onClick={onOpenAddModal}
        mt="20px"
        w="80%"
        backgroundColor="#AACB73"
        borderRadius="10px"
        fontSize="1xl"
      >
        <Image
          src={require("../assets/plus_icon.png")}
          display="inline"
          w="25px"
          ml="10px"
          mr="20px"
        />
        <Text
          display="inline"
          mr="auto"
          olor="white"
          fontWeight="light"
          pt="2px"
        >
          Add Block
        </Text>
      </Button>

      {/* add block button modal */}
      <Modal isOpen={isOpenAddModal} onClose={onCloseAddModal} isCentered>
        <ModalOverlay />
        <ModalContent width="80%" pt="20px">
          <ModalCloseButton onClick={onCloseAddModal} />
          <ModalBody m="0 auto" mb="20px">
            <Container>
              <Text>기본정보</Text>
              <Flex wrap="wrap" justify="space-between" mt="5px">
                <Button
                  width="30%"
                  onClick={(category) => {
                    addInfoCategory("MBTI");
                    onCloseAddModal();
                  }}
                >
                  MBTI
                </Button>
                <Button
                  width="30%"
                  onClick={(category) => {
                    addInfoCategory("B-day");
                    onCloseAddModal();
                  }}
                >
                  B-day
                </Button>
                <Button
                  width="30%"
                  onClick={(category) => {
                    addInfoCategory("f.color");
                    onCloseAddModal();
                  }}
                >
                  f.color
                </Button>
                <Button
                  width="30%"
                  mt="10px"
                  onClick={(category) => {
                    addInfoCategory("PET");
                    onCloseAddModal();
                  }}
                >
                  PET
                </Button>
                <Button
                  width="30%"
                  mt="10px"
                  onClick={(category) => {
                    addInfoCategory("School");
                    onCloseAddModal();
                  }}
                >
                  School
                </Button>
                <Button
                  width="30%"
                  mt="10px"
                  onClick={(category) => {
                    addInfoCategory("Hobby");
                    onCloseAddModal();
                  }}
                >
                  Hobby
                </Button>
              </Flex>
            </Container>
            <Container mt="25px">
              <Text>TMI</Text>
              <Flex wrap="wrap" justify="space-between" mt="5px">
                <Button width="30%">TMI 1</Button>
                <Button width="30%">TMI 2</Button>
                <Button width="30%">TMI 3</Button>
              </Flex>
            </Container>
            <Container mt="25px">
              <Text>커스텀</Text>
              <Button width="30%" mt="5px">
                <Image src={require("../assets/plus_icon.png")} w="20px" />
              </Button>
            </Container>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* save 버튼 */}
      <Button
        display="block"
        onClick={onOpenSaveModal}
        mt="50px"
        backgroundColor="white"
        _hover="none"
        _active="none"
      >
        <Image
          src={require("../assets/save_button.png")}
          boxSize="60px"
        ></Image>
      </Button>

      {/* 저장 확인 모달 */}
      <Modal isOpen={isOpenSaveModal} onClose={onCloseSaveModal} isCentered>
        <ModalOverlay />
        <ModalContent width="250px">
          <ModalCloseButton />
          <ModalBody mt="50px" mb="30px">
            <Text align="center">Want to save profile?</Text>
          </ModalBody>
          <ModalFooter m="0 auto" mb="20px">
            <Button
              onClick={() => {
                onCloseSaveModal();
                saveMyProfile();
              }}
              mr="20px"
              size="lg"
              type="submit"
            >
              YES
            </Button>
            <Button onClick={onCloseSaveModal} size="lg">
              NO
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default MakeMyProfile;

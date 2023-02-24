import React, { useState, useRef, useEffect } from "react";
import Header from "./Header";
import {
  Button,
  Container,
  Image,
  Center,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  Flex,
  ModalFooter,
  FormControl,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import CategoryBlock from "./CategoryBlock";
import axios from "axios";
import dummy from "../test.json";

const Edit = () => {
  const [profile, setProfile] = useState();
  const [info, setInfo] = useState();

  // Edit 페이지 렌더링 시 user 정보 가져오기
  useEffect(() => {
    // axios.get("/mypage").then((response) => setProfile(response.data));

    setInfo(temp);
  }, []);

  /* 프로필 json 구성 변경 (서버와 연동 후 dummy->profile로 수정) */

  const temp = [
    {
      category: "name",
      content: dummy.name,
    },
    {
      category: "classname",
      content: dummy.classname,
    },
  ];

  // tag가 존재한다면
  if (dummy.tag) {
    const length = Object.keys(dummy.tag).length;
    const keys = Object.keys(dummy.tag);
    for (let i = 0; i < length; i++) {
      temp.push({
        category: keys[i],
        content: dummy.tag[keys[i]],
      });
    }
  }

  /* 프로필 json 구성 변경 */

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

    const tag = {};
    for (let i = 1; i < info.length; i++) {
      tag[info[i].category] = info[i].content;
    }

    const request = {
      name: name.content,
      tag: tag,
      profileImage: profileImage,
    };

    console.log(request);

    // axios.patch("/update", { request }).then((response) => {
    //   console.log(response);
    // });
  };

  const [profileImage, setProfileImage] = useState(
    "https://bit.ly/dan-abramov"
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
    <Container centerContent>
      <Header title="EDIT" />

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
      <Container mt="20px">
        <FormControl onSubmit={saveMyProfile}>
          <CategoryBlock
            info={info}
            onRemove={onRemove}
            addInfo={addInfo}
            profile={profile}
          />
        </FormControl>
      </Container>

      {/* add block 버튼 */}
      <Button
        display="block"
        leftIcon={<AddIcon />}
        onClick={onOpenAddModal}
        mt="20px"
      >
        add block
      </Button>

      {/* add block button modal */}
      <Modal isOpen={isOpenAddModal} onClose={onCloseAddModal} isCentered>
        <ModalOverlay />
        <ModalContent width="400px">
          <ModalHeader>add block</ModalHeader>
          <ModalCloseButton onClick={onCloseAddModal} />
          <ModalBody width="95%" m="0 auto" mb="20px">
            <Container>
              <Text>about my self</Text>
              <Flex wrap="wrap" justify="space-between" mt="10px">
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
            <Container mt="20px">
              <Text>what to add</Text>
              <Flex wrap="wrap" justify="space-between" mt="10px">
                <Button width="30%">random</Button>
                <Button width="30%">random</Button>
                <Button width="30%">random</Button>
              </Flex>
            </Container>
            <Container mt="20px">
              <Text>create my own</Text>
              <Button width="30%" leftIcon={<AddIcon />} mt="10px">
                create
              </Button>
            </Container>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* save 버튼 */}
      <Button display="block" onClick={onOpenSaveModal} mt="20px">
        save
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

export default Edit;

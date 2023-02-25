import React from "react";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { MinusIcon } from "@chakra-ui/icons";

const CategoryBlock = ({ info, onRemove, addInfo, profile }) => {
  // edit 페이지라면 기존 정보 가져오기
  if (profile !== null) {
    const profileInfo =
      info &&
      info.map((info) => (
        <InputGroup key={info.category} size="sm">
          <InputLeftAddon
            width="34%"
            children={info.category}
            border="2px solid #FFDDDD"
            backgroundColor="#FFDDDD"
            pl="10px"
          />
          <Input
            pl="10px"
            border="2px solid #FFDDDD"
            type="text"
            name={info.category}
            defaultValue={info.content}
            onChange={(e) => {
              addInfo(info.category, e.target.value);
            }}
          />

          {/* name 외의 블록에만 delete 버튼 활성화 */}
          {info.category !== "name" && (
            <InputRightElement width="4.5rem">
              <Button
                h="1.5rem"
                size="lg"
                ml="30px"
                backgroundColor="transparent"
                color="#CDE990"
                onClick={() => onRemove(info.category)}
              >
                <MinusIcon />
              </Button>
            </InputRightElement>
          )}
        </InputGroup>
      ));

    return <Stack spacing={4}>{profileInfo}</Stack>;
  } else {
    const infoList =
      info &&
      info.map((info) => (
        <InputGroup key={info.category} size="sm">
          <InputLeftAddon
            pl="10px"
            width="34%"
            children={info.category}
            border="2px solid #CDE990"
            backgroundColor="#CDE990"
          />

          <Input
            pl="10px"
            border="2px solid #CDE990"
            type="text"
            name={info.category}
            placeholder={info.category}
            onChange={(e) => {
              addInfo(info.category, e.target.value);
            }}
          />

          {/* name 외의 블록에만 delete 버튼 활성화 */}
          {info.category !== "name" && (
            <InputRightElement width="4.5rem">
              <Button
                h="1.5rem"
                size="lg"
                ml="30px"
                backgroundColor="transparent"
                color="#CDE990"
                onClick={() => onRemove(info.category)}
              >
                <MinusIcon />
              </Button>
            </InputRightElement>
          )}
        </InputGroup>
      ));

    return <Stack spacing={4}>{infoList}</Stack>;
  }
};

export default CategoryBlock;

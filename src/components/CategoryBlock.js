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
        <InputGroup key={info.category}>
          <InputLeftAddon width="30%" children={info.category} />
          <Input
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
                h="1.75rem"
                size="sm"
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
        <InputGroup key={info.category}>
          <InputLeftAddon width="20%" children={info.category} />

          <Input
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
                h="1.75rem"
                size="sm"
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

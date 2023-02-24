import React, { useState } from "react";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { MinusIcon } from "@chakra-ui/icons";

const CategoryBlock = ({ info, onRemove, addInfo }) => {
  const [value, setValue] = useState("");

  const infoList = info.map((info) => (
    <InputGroup key={info.category}>
      <InputLeftAddon width="20%" children={info.category} />

      {/* 생일만 date로 하려다가 일단 보류
       {info.category === "B-day" ? (
        <Input type="date" name={info.category} placeholder={info.category} />
      ) : (
        <Input type="text" name={info.category} placeholder={info.category} />
      )} */}

      <Input
        type="text"
        name={info.category}
        placeholder={info.category}
        onChange={(e) => {
          setValue(e.target.value);
          addInfo(info.category, value);
        }}
      />

      {/* name 외의 블록에만 delete 버튼 활성화 */}
      {info.category !== "name" && (
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={() => onRemove(info.category)}>
            <MinusIcon />
          </Button>
        </InputRightElement>
      )}
    </InputGroup>
  ));

  return <Stack spacing={4}>{infoList}</Stack>;
};

export default CategoryBlock;

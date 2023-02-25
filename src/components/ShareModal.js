import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

//공유링크 복사하는 모달
function ShareModal(props) {
  const [copied, setCopied] = useState(false);
  const currentUrl = window.location.href;
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <CopyToClipboard text={currentUrl} onCopy={handleCopy}>
        <Button backgroundColor={"#AACB73"} onClick={onOpen}>
          Share
        </Button>
      </CopyToClipboard>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Complete Copy Link!</ModalHeader>
          <ModalCloseButton />
          <ModalFooter>
            <Button backgroundColor={"#AACB73"} mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ShareModal;

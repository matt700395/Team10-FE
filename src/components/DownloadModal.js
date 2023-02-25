import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import React from "react";

//사진으로 카드 다운로드하는 모달
function DownloadModal(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button backgroundColor={"#FFD4D4"} onClick={onOpen}>
        Download
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Complete Download!</ModalHeader>
          <ModalCloseButton />
          <ModalFooter>
            <Button backgroundColor={"#FFD4D4"} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default DownloadModal;

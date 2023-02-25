import { Card, Image, Stack, Button, Container, Text } from "@chakra-ui/react";
import ReactCardFlip from "react-card-flip";
import React from "react";
import { Box, Typography } from "@material-ui/core";
import ShareModal from "./ShareModal";
import DownloadModal from "./DownloadModal";
import Header from "./Header";

class MyCard extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
      modalOpen: false,
      isDOpen: false,
      isSOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  openSModal = () => {
    this.setState({ modalSOpen: true });
  };
  closeSModal = () => {
    this.setState({ modalSOpen: false });
  };
  openDModal = () => {
    this.setState({ modalDOpen: true });
  };
  closeDModal = () => {
    this.setState({ modalDOpen: false });
  };

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }
  render() {
    const { name } = this.props;
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
        <div style={{ width: "100%" }}>
          <Header title="My page" />
          <Card maxW="sm" display="flex" justify="center" alignItems="center">
            <ReactCardFlip
              isFlipped={this.state.isFlipped}
              flipDirection="vertical"
            >
              <div className="frontCard">
                <Box
                  style={{
                    paddingTop: "15px",
                    width: "300px",
                    height: "400px",
                  }}
                >
                  <div>
                    <Text>jihyeon</Text>
                  </div>
                  <Image
                    src="https://bit.ly/dan-abramov"
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                </Box>
              </div>
              <div className="backCard">
                <Box style={{ width: "300px", height: "400px" }}>
                  <Typography variant="h5">name :</Typography>
                </Box>
              </div>
            </ReactCardFlip>
          </Card>

          <Stack
            direction="row"
            spacing={3}
            justifyContent="center"
            align="center"
            paddingTop={"10px"}
          >
            <Button
              backgroundColor={"#FFD4D4"}
              className="Flip"
              onClick={this.handleClick}
            >
              FLIP
            </Button>
            <ShareModal isOpen={this.openSModal} onClose={this.closeSModal} />
            <DownloadModal
              isOpen={this.openDModal}
              onClose={this.closeDModal}
            />
          </Stack>
        </div>
      </Container>
    );
  }
}

export default MyCard;

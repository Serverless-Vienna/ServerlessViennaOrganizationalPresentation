// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";


// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../assets/serverless.css");

const images = {
  stockwerk: require("../assets/stockwerk.png"),
  techtalk: require("../assets/techtalk.png")
}

preloader(images);

const theme = createTheme({
  primary: "#665d60",
  textColor: "white",
  headingColor: "white"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>

          <Slide transition={["slide"]}>
            <Heading size={1} fit caps lineHeight={1} textColor="headingColor">
              Serverless-Vienna
            </Heading>
            <Heading size={1} fit caps lineHeight={1} textColor="headingColor">
              Welcome!
            </Heading>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              Sponsors
            </Heading>
                <Image src={images.stockwerk.replace("/", "")} width="100%" />
                Awesome co-working space
            </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              Sponsors
            </Heading>
              <Image src={images.techtalk.replace("/", "")} width="100%" bgColor={"white"}/>
              Delivering Software with Impact
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              Talks
            </Heading>
            <List>
              <ListItem>No More Server or Just A Little Less Ops - László</ListItem>
              <ListItem>Serverless by Example - Gerald</ListItem>
              <ListItem>15 minutes break</ListItem>
              <ListItem>Introduction to the Serverless Framework - Nik</ListItem>
            </List>
          </Slide>
          
        </Deck>
      </Spectacle>
    );
  }
}

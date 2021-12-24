import React, { useContext } from "react";
import Brand from "assets/media/icon/logo.svg";
import { Header, Logo, List, Item, Box } from "./index.header.style";
import { ButtonInLink } from "components/atoms/button/component.button";
import { Container } from "components/orgamis/flexboxgrid/index.flexboxgrid";

const HeaderComponent = () => {
  return (
    <Header>
      <Container>
        <Box>
          <Logo to="/">
            <Brand />
          </Logo>
          <List>
            <Item>ok</Item>
          </List>
          <ButtonInLink href="/">Wycena online</ButtonInLink>
        </Box>
      </Container>
    </Header>
  );
};

// export new component
export default HeaderComponent;

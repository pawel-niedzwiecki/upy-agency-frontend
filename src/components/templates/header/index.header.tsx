import React, { useState } from "react";
import Brand from "assets/media/icon/logo.svg";
import { ButtonInLink } from "components/atoms/button/component.button";
import { Container } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { Header, Logo, List, Item, Box, MobileMenuButton, BreakBoxHeader } from "./index.header.style";

const HeaderComponent = () => {
  const [powerMenu, setPowerMenu] = useState(false);
  return (
    <>
      <Header>
        <Container>
          <Box powerMenu={powerMenu}>
            <Logo to="/">
              <Brand />
            </Logo>
            <MobileMenuButton powerMenu={powerMenu} onClick={() => setPowerMenu(!powerMenu)}>
              <span></span>
              <span></span>
              <span></span>
            </MobileMenuButton>
            <List>
              <Item>
                <ButtonInLink href="/e">Realizacje</ButtonInLink>
              </Item>
              <Item>
                <ButtonInLink href="/s">Usługi</ButtonInLink>
              </Item>
              <Item>
                <ButtonInLink href="/about">O nas</ButtonInLink>
              </Item>
              <Item>
                <ButtonInLink href="/contact">Kontakt</ButtonInLink>
              </Item>
            </List>
            <ButtonInLink className="onlineValuationLink" href="/">
              Wycena online
            </ButtonInLink>
          </Box>
        </Container>
      </Header>
      <BreakBoxHeader />
    </>
  );
};

// export new component
export default HeaderComponent;

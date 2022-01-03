import { Link } from "gatsby";
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
                <Link to="/e">Realizacje</Link>
              </Item>
              <Item>
                <Link to="/s">Usługi</Link>
              </Item>
              <Item>
                <Link to="/about">O nas</Link>
              </Item>
              <Item>
                <Link to="/contact">Kontakt</Link>
              </Item>
            </List>
            <Link className="onlineValuationLink" to="/">
              Wycena online
            </Link>
          </Box>
        </Container>
      </Header>
      <BreakBoxHeader />
    </>
  );
};

// export new component
export default HeaderComponent;

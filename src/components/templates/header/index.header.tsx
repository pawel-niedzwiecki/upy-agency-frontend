import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import Brand from "assets/media/icon/logo.svg";
import useWindowData from "hooks/hooks.windowData";
import { ButtonInLink } from "components/atoms/button/component.button";
import { Container } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { Header, Logo, List, Item, Box, MobileMenuButton, BreakBoxHeader } from "./index.header.style";

const HeaderComponent = () => {
  const { pageScrollY } = useWindowData();
  const [mobileMenuSwitch, setMobileMenuSwitch] = useState(false);

  return (
    <>
      <Header activemenu={pageScrollY < 120 ? false : true}>
        <Container>
          <Box activemenu={pageScrollY < 120 ? false : true} mobileMenuSwitch={mobileMenuSwitch}>
            <Logo activemenu={pageScrollY < 120 ? false : true} to="/">
              <Brand />
              UPY
            </Logo>
            <MobileMenuButton mobileMenuSwitch={mobileMenuSwitch} onClick={() => setMobileMenuSwitch(!mobileMenuSwitch)}>
              <span></span>
              <span></span>
              <span></span>
            </MobileMenuButton>
            <List>
              <Item>
                <Link to="/e/c">Realizacje</Link>
              </Item>
              <Item>
                <Link to="/s/c">Usługi</Link>
              </Item>
              <Item>
                <Link to="/b">Blog</Link>
              </Item>
              <Item>
                <Link to="/a">O nas</Link>
              </Item>
              <Item>
                <Link to="/c">Kontakt</Link>
              </Item>
            </List>
            <Link className="onlineValuationLink" title="wycena online" to="/quotation">
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

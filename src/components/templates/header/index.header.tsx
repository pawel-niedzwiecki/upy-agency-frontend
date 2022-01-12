import { Link } from "gatsby";
import Brand from "assets/media/icon/logo.svg";
import React, { useEffect, useState } from "react";

import { ButtonInLink } from "components/atoms/button/component.button";
import { Container } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { Header, Logo, List, Item, Box, MobileMenuButton, BreakBoxHeader } from "./index.header.style";

const HeaderComponent = () => {
  const [activeMenu, setActivemenu] = useState(false);
  const [mobileMenuSwitch, setMobileMenuSwitch] = useState(false);

  const setScroll = () => {
    if (window.pageYOffset < 120 && activeMenu) return setActivemenu(false);
    else if (window.pageYOffset > 120 && !activeMenu) return setActivemenu(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => setScroll(), false);

    return () => {
      window.removeEventListener("scroll", () => setScroll(), false);
    };
  }, [activeMenu]);

  return (
    <>
      <Header activemenu={activeMenu}>
        <Container>
          <Box activemenu={activeMenu} mobileMenuSwitch={mobileMenuSwitch}>
            <Logo activemenu={activeMenu} to="/">
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

import React, { useContext } from "react";
import Brand from "assets/media/icon/logo.svg";
import Arrow from "assets/media/icon/arrow.svg";
import { useStaticQuery, graphql } from "gatsby";
import { Header, Logo, List, Item, Box } from "./index.header.style";
import { ButtonInLink } from "components/atoms/button/component.button";
import { Container } from "components/orgamis/flexboxgrid/index.flexboxgrid";

const HeaderComponent = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      strapiExecutionCategories {
        data {
          id
          attributes {
            title
          }
        }
      }
    }
  `);
  const { strapiExecutionCategories } = data;
  console.log(strapiExecutionCategories);

  return (
    <Header>
      <Container>
        <Box>
          <Logo to="/">
            <Brand />
          </Logo>
          <List>
            <Item>
              <ButtonInLink href="/">
                Realizacje <Arrow />
              </ButtonInLink>
            </Item>
            <Item>
              <ButtonInLink href="/">
                Usługi <Arrow />
              </ButtonInLink>
            </Item>
            <Item>
              <ButtonInLink href="/">O nas</ButtonInLink>
            </Item>
            <Item>
              <ButtonInLink href="/">Kontakt</ButtonInLink>
            </Item>
          </List>
          <ButtonInLink className="onlineValuationLink" href="/">
            Wycena online
          </ButtonInLink>
        </Box>
      </Container>
    </Header>
  );
};

// export new component
export default HeaderComponent;

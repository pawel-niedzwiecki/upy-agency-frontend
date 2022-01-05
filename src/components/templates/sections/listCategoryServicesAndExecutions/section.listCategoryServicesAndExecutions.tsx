import lodash from "lodash";
import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useContext, useState, useEffect } from "react";
import { Button, ButtonOutLink } from "components/atoms/button/component.button";
import { SquareConent } from "components/atoms/animation/index.comonent.animation";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import {
  Section,
  SelectBox,
  List,
  Item,
  Header,
  FlipBox,
  FlipBoxInner,
  FlipBoxFront,
  FlipBoxBack,
  FlipBoxHeader,
  FlipBoxList,
  FlipBoxListItem,
  FlipBoxButton,
} from "./section.listCategoryServicesAndExecutions.style";

const PortfolioSectionComponent = ({ categories, active }: any) => {
  const [sendRequest, setSendRequest] = useState(false);
  const [filtrPortfolio, setFiltrPortfolio] = useState(active);
  const [activeMobileSticky, setActiveMobileSticky] = useState(false);

  const { circle } = useStaticQuery(
    graphql`
      query {
        circle: file(name: { eq: "circle" }) {
          id
          name
          publicURL
        }
      }
    `
  );

  return (
    <Section id="portfolio" style={{ backgroundImage: `url(${circle.publicURL})` }}>
      <Container>
        <Row>
          <Col xs={12} md={4} lg={3}>
            <SelectBox className={activeMobileSticky ? "sticky" : null}>
              <Header>
                Relizacje <span>:</span>
              </Header>
              <List>
                <Item active={filtrPortfolio === "all" ? true : false} key={"all"}>
                  <Link to="/e/c">Wszystko</Link>
                </Item>
                {categories.map((categorie: any) => {
                  return (
                    <Item active={filtrPortfolio === categorie.title ? true : false} key={categorie.id}>
                      <Link to={`/e/c/${lodash.kebabCase(lodash.deburr(categorie.title))}`}>{categorie.title}</Link>
                    </Item>
                  );
                })}
              </List>
            </SelectBox>
          </Col>
          <Col xs={12} md={8} lg={9} style={{ zIndex: 1 }}>
            <Row>
              <Col xs={12} md={6} lg={4} className="col">
                <FlipBox>
                  <FlipBoxInner>
                    <FlipBoxFront>
                      <Header>UXU</Header>
                    </FlipBoxFront>
                    <FlipBoxBack>
                      <FlipBoxHeader>technologie</FlipBoxHeader>
                      <FlipBoxList>
                        <FlipBoxListItem>
                          <span>#</span>
                          css
                        </FlipBoxListItem>
                        <FlipBoxListItem>
                          <span>#</span>
                          html
                        </FlipBoxListItem>
                        <FlipBoxListItem>
                          <span>#</span>
                          psd
                        </FlipBoxListItem>
                        <FlipBoxListItem>
                          <span>#</span>
                          css
                        </FlipBoxListItem>
                      </FlipBoxList>

                      <FlipBoxButton>
                        <ButtonOutLink href="">Online</ButtonOutLink>
                        <ButtonOutLink href="">GitHub</ButtonOutLink>
                      </FlipBoxButton>
                    </FlipBoxBack>
                  </FlipBoxInner>
                </FlipBox>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

// export component
export default PortfolioSectionComponent;

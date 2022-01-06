import lodash from "lodash";
import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useContext, useState, useEffect } from "react";
import { Button, ButtonInLink } from "components/atoms/button/component.button";
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
  FlipBoxFrontHeader,
  FlipBoxBack,
  FlipBoxHeader,
  FlipBoxList,
  FlipBoxListItem,
  FlipBoxButton,
} from "./section.listCategoryServicesAndExecutions.style";

const SectionListCategoryServicesAndExecutionsComponent = ({ categories, active, type, tiles }: any) => {
  const [sendRequest, setSendRequest] = useState(false);
  const [filtrPortfolio, setFiltrPortfolio] = useState(active);
  const [activeMobileSticky, setActiveMobileSticky] = useState(false);

  const { circle, executions } = useStaticQuery(
    graphql`
      query {
        circle: file(name: { eq: "circle" }) {
          id
          name
          publicURL
        }
        executions: allStrapiExecutions(filter: { execution_category: { title: { eq: "Pozycjonowanie" } } }) {
          nodes {
            id
            title
            technologies {
              id
              title
            }
          }
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
                  <Link to={type === "execution" ? "/e/c" : "/s/c"}>Wszystko</Link>
                </Item>
                {categories.map((categorie: any) => {
                  return (
                    <Item active={filtrPortfolio === categorie.title ? true : false} key={categorie.id}>
                      <Link to={`${type === "execution" ? "/e/c" : "/s/c"}/${lodash.kebabCase(lodash.deburr(categorie.title))}`}>{categorie.title}</Link>
                    </Item>
                  );
                })}
              </List>
            </SelectBox>
          </Col>
          <Col xs={12} md={8} lg={9} style={{ zIndex: 1 }}>
            <Row>
              {tiles.map((execution: any) => {
                return (
                  <Col xs={12} md={6} lg={4} className="col" key={execution.id}>
                    <FlipBox>
                      <FlipBoxInner>
                        <FlipBoxFront>
                          <FlipBoxFrontHeader>{execution.title}</FlipBoxFrontHeader>
                        </FlipBoxFront>
                        <FlipBoxBack>
                          {execution.technologies && (
                            <>
                              <FlipBoxHeader>Użyte technologie</FlipBoxHeader>
                              <FlipBoxList>
                                {execution.technologies.map((technologie: any) => {
                                  return (
                                    <FlipBoxListItem key={technologie.id}>
                                      <span>#</span>
                                      {technologie.title}
                                    </FlipBoxListItem>
                                  );
                                })}
                              </FlipBoxList>
                            </>
                          )}
                          <FlipBoxButton style={{ justifyContent: !execution.technologies && "center" }}>
                            <ButtonInLink href={`${type === "execution" ? "/e" : "/s"}/${lodash.kebabCase(lodash.deburr(execution.title))}`}>Więcej</ButtonInLink>
                          </FlipBoxButton>
                        </FlipBoxBack>
                      </FlipBoxInner>
                    </FlipBox>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

// export component
export default SectionListCategoryServicesAndExecutionsComponent;

import lodash from "lodash";
import { Link } from "gatsby";
import React, { useContext, useState, useEffect } from "react";
import { Button, ButtonInLink } from "components/atoms/button/component.button";
import { SquareConent } from "components/atoms/animation/index.comonent.animation";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { Section, SelectBox, List, Item, Header } from "./section.listCategoryServicesAndExecutions.style";

const SectionListCategoryServicesAndExecutionsComponent = ({ categories, active, type, tiles }: any) => {
  const [sendRequest, setSendRequest] = useState(false);
  const [filtrPortfolio, setFiltrPortfolio] = useState(active);
  const [activeMobileSticky, setActiveMobileSticky] = useState(false);

  return (
    <Section id="portfolio">
      <Container>
        <Row>
          <Col xs={12} md={4} lg={3}>
            <SelectBox className={activeMobileSticky ? "sticky" : null}>
              <Header>{type === "execution" ? "Realizacje" : "Usługi"}</Header>
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
                    <Link to={`${type === "execution" ? "/e" : "/s"}/${lodash.kebabCase(lodash.deburr(execution.title))}`}>{execution.title}</Link>
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

import React from "react";
import Brand from "assets/media/icon/logo.svg";
import ArrowBig from "assets/media/icon/arrowBig.svg";
import { graphql, useStaticQuery, Link } from "gatsby";
import { ButtonInLink } from "components/atoms/button/component.button";
import { SectionInfoComponentPropsTypes } from "./section.andHowWeOperate.types";
import { MovingElement } from "components/atoms/animation/index.comonent.animation";
import { Row, Col, Container } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { Section, Title } from "./section.andHowWeOperate.style";

const SectionAndHowWeOperateComponent = () => {
  return (
    <Section>
      <Container>
        <Row>
          <Col xs={12} style={{ display: "flex", flexDirection: "column" }}>
            <Title>I jak działamy ?</Title>
            <ButtonInLink href="/lead" style={{ maxWidth: "max-content", marginBottom: "2rem" }} title="wyceń projekt">
              WYCEŃ PROJEKT <ArrowBig />
            </ButtonInLink>
            <Link to="/c" title="wyceń projekt">
              Napisz do nas
            </Link>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default SectionAndHowWeOperateComponent;

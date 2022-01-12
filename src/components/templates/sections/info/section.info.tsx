import React from "react";
import Brand from "assets/media/icon/logo.svg";
import { graphql, useStaticQuery } from "gatsby";
import { SectionInfoComponentPropsTypes } from "./section.info.types";
import { MovingElement } from "components/atoms/animation/index.comonent.animation";
import { Row, Col, Container } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { Section, Title, Description } from "./section.info.style";

const SectionInfoComponent = ({ data: { id, title, description } }: SectionInfoComponentPropsTypes) => {
  return (
    <Section key={id}>
      <Container>
        <Row>
          <Col xs={12} md={3} lg={4}></Col>
          <Col xs={12} md={6} lg={4}>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </Col>
          <Col xs={12} md={3} lg={4}></Col>
        </Row>
      </Container>
    </Section>
  );
};

export default SectionInfoComponent;

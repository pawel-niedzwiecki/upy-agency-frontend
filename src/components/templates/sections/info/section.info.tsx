import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Brand from "assets/media/icon/logotyp.svg";
import { SectionInfoComponentPropsTypes } from "./section.info.types";
import { MovingElement } from "components/atoms/animation/index.comonent.animation";
import { Row, Col, Container } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { Section, Title, Description, MovingElementBox, SharpCircle, AnimationLogo, SharpTriangle } from "./section.info.style";

const SectionInfoComponent = ({ data: { id, title, description } }: SectionInfoComponentPropsTypes) => {
  const { cube, noise } = useStaticQuery(
    graphql`
      query {
        cube: file(name: { eq: "cube" }) {
          id
          name
          publicURL
        }
        noise: file(name: { eq: "noise" }) {
          id
          name
          publicURL
        }
      }
    `
  );

  return (
    <Section key={id} style={{ backgroundImage: `url(${cube.publicURL})` }}>
      <MovingElementBox>
        <MovingElement>
          <SharpCircle bg={noise.publicURL} className="movieEL">
            <div className="isolate">
              <div className="ball-shadow"></div>
              <div className="ball-light"></div>
            </div>
          </SharpCircle>
          <AnimationLogo className="movieEL">
            <Brand />
          </AnimationLogo>
          <SharpTriangle bg={noise.publicURL} className="movieEL">
            <div className="isolate">
              <div className="ball-shadow"></div>
              <div className="ball-light"></div>
            </div>
          </SharpTriangle>
        </MovingElement>
      </MovingElementBox>
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

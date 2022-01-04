import React from "react";
import Brand from "assets/media/icon/logo.svg";
import ArrowBig from "assets/media/icon/arrowBig.svg";
import { graphql, useStaticQuery, Link } from "gatsby";
import { ButtonInLink } from "components/atoms/button/component.button";
import { SectionInfoComponentPropsTypes } from "./section.andHowWeOperate.types";
import { MovingElement } from "components/atoms/animation/index.comonent.animation";
import { Row, Col, Container } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { Section, Title, MovingElementBox, SharpCircle, SharpSquare, AnimationLogo, SharpTriangle } from "./section.andHowWeOperate.style";

const SectionAndHowWeOperateComponent = () => {
  const { square, noise } = useStaticQuery(
    graphql`
      query {
        square: file(name: { eq: "square" }) {
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
    <Section style={{ backgroundImage: `url(${square.publicURL})` }}>
      <MovingElementBox>
        <MovingElement>
          <SharpCircle bg={noise.publicURL} className="movieEL">
            <div className="isolate">
              <div className="ball-shadow"></div>
              <div className="ball-light"></div>
            </div>
          </SharpCircle>
          <SharpSquare bg={noise.publicURL} className="movieEL">
            <div className="isolate">
              <div className="square-shadow"></div>
              <div className="square-light"></div>
            </div>
          </SharpSquare>
          <AnimationLogo>
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
          <Col xs={12} lg={12} xl={6} style={{ display: "flex", flexDirection: "column" }}>
            <Title>I jak działamy ?</Title>
            <ButtonInLink href="/" style={{ maxWidth: "max-content", marginBottom: "2rem" }}>
              WYCEŃ PROJEKT <ArrowBig />
            </ButtonInLink>
            <Link to="/c">Napisz do nas</Link>
          </Col>
          <Col xs={12} lg={12} xl={6}></Col>
        </Row>
      </Container>
    </Section>
  );
};

export default SectionAndHowWeOperateComponent;

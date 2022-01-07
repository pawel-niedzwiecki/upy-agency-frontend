import ReactMarkdown from "react-markdown";
import { graphql, useStaticQuery } from "gatsby";
import Brand from "assets/media/icon/logotyp.svg";
import React, { useContext, useState } from "react";
import { MovingElement } from "components/atoms/animation/index.comonent.animation";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import {
  Section,
  BoxSticky,
  Header,
  List,
  Item,
  ScrolTo,
  Description,
  ClientBox,
  ClientBoxHeader,
  ClientBoxHeaderName,
  ListTechnology,
  TechnologyItem,
  MovingElementBox,
  SharpCircle,
  AnimationLogo,
  SharpTriangle,
} from "./section.execution.styled";

const SectionExecutionComponent = ({ data }: any) => {
  const { id, title, start, purposeandprocess, technologies } = data;

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
    <Section style={{ backgroundImage: `url(${cube.publicURL})` }}>
      <Container>
        <Row>
          <Col xs={3}>
            <BoxSticky>
              <Header>Sekcje</Header>
              <List>
                <Item>
                  <ScrolTo className="active">START</ScrolTo>
                </Item>
                <Item>
                  <ScrolTo>CEL & PROCES</ScrolTo>
                </Item>
                <Item>
                  <ScrolTo>TECHNOLOGIE</ScrolTo>
                </Item>
              </List>
            </BoxSticky>
          </Col>
          <Col xs={6} style={{ marginTop: "2rem" }}>
            <Header>Start</Header>
            <Description>
              <ReactMarkdown>{start}</ReactMarkdown>
            </Description>
            <Header>CEL & PROCES</Header>
            <Description>
              <ReactMarkdown>{purposeandprocess}</ReactMarkdown>
            </Description>
          </Col>
          <Col xs={3}>
            <BoxSticky background>
              <ClientBox>
                <ClientBoxHeader>Klient</ClientBoxHeader>
                <ClientBoxHeaderName>ANHOL</ClientBoxHeaderName>
                <ClientBoxHeader>Technologie</ClientBoxHeader>
                <ListTechnology>
                  {technologies.map((technology: any) => {
                    return (
                      <TechnologyItem key={technology.id}>
                        <span>#</span>
                        {technology.title}
                      </TechnologyItem>
                    );
                  })}
                </ListTechnology>
              </ClientBox>
            </BoxSticky>
          </Col>
        </Row>
      </Container>
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
    </Section>
  );
};

export default SectionExecutionComponent;

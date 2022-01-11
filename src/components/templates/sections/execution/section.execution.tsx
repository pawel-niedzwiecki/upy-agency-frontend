import ReactMarkdown from "react-markdown";
import { graphql, useStaticQuery } from "gatsby";
import Brand from "assets/media/icon/logotyp.svg";
import React, { useContext, useState, useRef, useEffect } from "react";
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
  const elRef: { current: any[] } = useRef([]);
  const [activeSection, setActiveSection] = useState(0);
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

  useEffect(() => {
    let lastScroll: any = null;
    let allActiveBox: any[] = [];
    document.addEventListener(
      "scroll",
      () => {
        allActiveBox = [];
        if (!!elRef.current.length) {
          clearTimeout(lastScroll);
          lastScroll = setTimeout(() => {
            elRef.current.forEach((_: any, i: number) => {
              if (elRef.current[i].getBoundingClientRect().top + 100 < 0) return null;
              allActiveBox.push(i);
            });
            setActiveSection(elRef.current.length - allActiveBox.length);
          }, 10);
        }
      },
      false
    );

    return () => {
      document.removeEventListener("scroll", () => {
        allActiveBox = [];
        if (!!elRef.current.length) {
          clearTimeout(lastScroll);
          lastScroll = setTimeout(() => {
            elRef.current.forEach((_: any, i: number) => {
              if (elRef.current[i].getBoundingClientRect().top + 100 < 0) return null;
              allActiveBox.push(i);
            });
            setActiveSection(elRef.current.length - allActiveBox.length);
          }, 10);
        }
      });
    };
  }, [elRef]);

  return (
    <Section style={{ backgroundImage: `url(${cube.publicURL})` }}>
      <Container>
        <Row>
          <Col xs={12} lg={3} className="menu" style={{ bottom: `${activeSection === 2 ? "-10rem" : "0"}` }}>
            <BoxSticky>
              <Header>Sekcje</Header>
              <List>
                <Item>
                  <ScrolTo
                    className={activeSection === 0 ? "active" : ""}
                    onClick={() =>
                      window.scrollTo({
                        top: document.getElementById("start").getBoundingClientRect().top + window.pageYOffset + -79,
                        behavior: "smooth",
                      })
                    }
                  >
                    START
                  </ScrolTo>
                </Item>
                <Item>
                  <ScrolTo
                    className={activeSection === 1 ? "active" : ""}
                    onClick={() =>
                      window.scrollTo({
                        top: document.getElementById("CEL&PROCES").getBoundingClientRect().top + window.pageYOffset + -79,
                        behavior: "smooth",
                      })
                    }
                  >
                    CEL & PROCES
                  </ScrolTo>
                </Item>
              </List>
            </BoxSticky>
          </Col>
          <Col xs={12} md={8} lg={6} style={{ marginTop: "2rem" }} className="description">
            <Header ref={(el: any) => (elRef.current[0] = el)} id="start">
              Start
            </Header>
            <Description>
              <ReactMarkdown>{start}</ReactMarkdown>
            </Description>
            <Header ref={(el: any) => (elRef.current[1] = el)} id="CEL&PROCES">
              CEL & PROCES
            </Header>
            <Description>
              <ReactMarkdown>{purposeandprocess}</ReactMarkdown>
            </Description>
          </Col>
          <Col xs={12} md={4} lg={3} className="client">
            <BoxSticky background>
              <ClientBox>
                <ClientBoxHeader>Klient</ClientBoxHeader>
                <ClientBoxHeaderName>{title}</ClientBoxHeaderName>
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

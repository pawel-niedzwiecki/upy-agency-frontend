import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Section, Title } from "./component.wroteAboutUses.style";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import { Row, Col, Container } from "components/orgamis/flexboxgrid/index.flexboxgrid";

const wroteAboutUses = () => {
  return (
    <Section>
      <Container>
        <Row>
          <Col xs={2}>
            <Title>Pisali o nas</Title>
          </Col>
          <Col xs={10}>
            <Splide
              options={{
                type: "loop",
                perPage: 3,
                perMove: 1,
                arrows: false,
                pagination: false,
              }}
            >
              <SplideSlide>ok</SplideSlide>
              <SplideSlide>ok</SplideSlide>
              <SplideSlide>ok</SplideSlide>
              <SplideSlide>ok</SplideSlide>
              <SplideSlide>ok</SplideSlide>
              <SplideSlide>ok</SplideSlide>
              <SplideSlide>ok</SplideSlide>
              <SplideSlide>ok</SplideSlide>
            </Splide>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default wroteAboutUses;

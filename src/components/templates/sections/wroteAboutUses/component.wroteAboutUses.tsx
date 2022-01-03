import React from "react";

import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import { Section, Title } from "./component.wroteAboutUses.style";
import { Row, Col, Container } from "components/orgamis/flexboxgrid/index.flexboxgrid";

const wroteAboutUses = () => {
  const { wroteAboutUses } = useStaticQuery(
    graphql`
      query {
        wroteAboutUses: allStrapiWroteAboutUses {
          nodes {
            id
            url
            brand {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    `
  );

  console.log(wroteAboutUses);

  return (
    <Section>
      <Container>
        <Row>
          <Col xs={4} sm={4} md={3} lg={2} style={{ display: "flex", alignItems: "center" }}>
            <Title>Pisali o nas</Title>
          </Col>
          <Col xs={8} sm={8} md={9} lg={10}>
            <Splide
              options={{
                perPage: 4,
                breakpoints: {
                  1024: {
                    perPage: 3,
                  },
                  768: {
                    perPage: 2,
                  },
                  520: {
                    perPage: 1,
                  },
                },
                perMove: 1,
                type: "slide",
                arrows: false,
                autoplay: true,
                interval: 3000,
                pagination: false,
              }}
            >
              {wroteAboutUses.nodes.map(
                (
                  logo: {
                    id: string;
                    url: string;
                    brand: { localFile: { childImageSharp: { gatsbyImageData: any } } };
                  },
                  index: number
                ) => {
                  const img = logo.brand.localFile.childImageSharp.gatsbyImageData;
                  return (
                    <SplideSlide key={logo.id} className="slide">
                      <GatsbyImage alt={logo.id} image={img} />
                    </SplideSlide>
                  );
                }
              )}
            </Splide>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default wroteAboutUses;

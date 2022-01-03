import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Section, Title } from "./section.wroteAboutUses.style";
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
                      <a href={logo.url} target="_blank" title={logo.id}>
                        <GatsbyImage alt={logo.id} image={img} />
                      </a>
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

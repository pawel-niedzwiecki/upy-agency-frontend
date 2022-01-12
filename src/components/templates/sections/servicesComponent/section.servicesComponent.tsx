import React from "react";
import lodash from "lodash";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery, Link } from "gatsby";
import { ButtonInLink } from "components/atoms/button/component.button";
import { Row, Col, Container } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { Section, BoxServices, ImgBox, Title, Excerpt, ListOptions } from "./section.servicesComponent.style";

const SectionfeaturedServicesComponent = () => {
  const { home } = useStaticQuery(
    graphql`
      query {
        home: strapiHome {
          services {
            id
            title
            excerpt
            cover {
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
          {home.services.map((service: any, index: number) => {
            return (
              <Col xs={12} key={service.id}>
                <BoxServices>
                  <Row>
                    <Col xs={12} md={4} lg={4}>
                      <ImgBox>
                        <GatsbyImage alt={service.title} image={service.cover.localFile.childImageSharp.gatsbyImageData} />
                      </ImgBox>
                    </Col>
                    <Col xs={12} md={6} lg={5} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                      <Title>{service.title}</Title>
                      <Excerpt>{service.excerpt}</Excerpt>
                      <ListOptions>
                        <ButtonInLink href={`s/${lodash.kebabCase(lodash.deburr(service.title))}`} title="więcej">
                          WIĘCEJ
                        </ButtonInLink>
                        <Link to="/quotation" title="wycena online">
                          WYCENA ONLINE
                        </Link>
                      </ListOptions>
                    </Col>
                  </Row>
                </BoxServices>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Section>
  );
};

export default SectionfeaturedServicesComponent;

import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Section, Title } from "./section.logoCarusel.style";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import { Row, Col, Container } from "components/orgamis/flexboxgrid/index.flexboxgrid";

const SectionLogoCaruselComponent = ({ title, brands }: { title: string; brands: { id: string; title: string; brand: any; url?: string }[] }) => {
  return (
    <Section>
      <Container>
        <Row>
          <Col xs={4} sm={4} md={3} lg={2} style={{ display: "flex", alignItems: "center" }}>
            <Title>{title}</Title>
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
              {brands.map((brand: any) => {
                const img = brand.brand.localFile.childImageSharp.gatsbyImageData;
                if (!!brand.url)
                  return (
                    <SplideSlide key={brand.id} className="slide">
                      <a href={brand.url} target="_blank" title={brand.title}>
                        <GatsbyImage alt={brand.title} image={img} />
                      </a>
                    </SplideSlide>
                  );

                return (
                  <SplideSlide key={brand.id} className="slide">
                    <GatsbyImage alt={brand.id} image={img} />
                  </SplideSlide>
                );
              })}
            </Splide>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default SectionLogoCaruselComponent;

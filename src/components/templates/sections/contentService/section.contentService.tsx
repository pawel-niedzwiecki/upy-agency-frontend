import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { ButtonSubmit } from "components/atoms/button/component.button";
import { emailRegex, telRegex, nameRegex } from "assets/regex/index.regex";
import { Input, CheckBox, TextArea } from "components/molecules/form/index.form";
import { Row, Col, Container } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { Section, Title, BoxContent, Description, ListOptions, Option, BoxImg } from "./section.contentService.style";

const SectionContentServiceComponent = ({
  data: { id, site, title, description, image, options },
}: {
  data: { id: string; site: boolean; title: string; description: string; image: any; options: { id: string; title: string }[] };
}) => {
  const { checked } = useStaticQuery(
    graphql`
      query {
        checked: file(name: { eq: "checked" }) {
          id
          name
          publicURL
        }
      }
    `
  );

  return (
    <Section site={site}>
      <Container>
        <Row>
          <Col xs={12} lg={6} className="description">
            <BoxContent>
              <Title>{title}</Title>
              <Description>{description}</Description>
              <ListOptions>
                {options &&
                  options.map((option) => {
                    return (
                      <Option checkedIcon={checked.publicURL} key={option.id}>
                        {option.title}
                      </Option>
                    );
                  })}
              </ListOptions>
            </BoxContent>
          </Col>
          <Col xs={12} lg={6} className="img">
            <BoxImg>
              <img src={image.url} alt={image.alternativeText} />
            </BoxImg>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default SectionContentServiceComponent;

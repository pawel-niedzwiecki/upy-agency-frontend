import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { graphql, useStaticQuery } from "gatsby";
import { ButtonSubmit } from "components/atoms/button/component.button";
import { emailRegex, telRegex, nameRegex } from "assets/regex/index.regex";
import { Input, CheckBox, TextArea } from "components/molecules/form/index.form";
import { Row, Col, Container } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { Section, Title, BoxContent, Description } from "./section.aboutUsStart.style";

const SectionAboutUsStartComponent = ({ data: { title, description } }: { data: { title: string; description: string } }) => {
  const { logo } = useStaticQuery(
    graphql`
      query {
        logo: file(name: { eq: "logo" }) {
          id
          name
          publicURL
        }
      }
    `
  );

  return (
    <Section>
      <Container>
        <Row>
          <Col xs={12}>
            <Title>{title}</Title>
          </Col>
          <Col xs={12}>
            <BoxContent additionalBg={logo.publicURL}>
              <Row>
                <Col xs={12} md={6}>
                  <Description>{description}</Description>
                </Col>
              </Row>
            </BoxContent>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default SectionAboutUsStartComponent;

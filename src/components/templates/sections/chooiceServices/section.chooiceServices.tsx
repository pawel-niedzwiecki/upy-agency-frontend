import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { graphql, useStaticQuery } from "gatsby";
import ArrowBig from "assets/media/icon/arrowBig.svg";
import { ButtonSubmit } from "components/atoms/button/component.button";
import { Input, CheckBoxService, TextArea } from "components/molecules/form/index.form";
import { Row, Col, Container } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { Section, Title, Form } from "./section.chooiceServices.style";

const SectionChooiceServicesComponent = () => {
  const [send, setSend] = useState(false);
  const [param, setParam] = useState("");

  useEffect(() => {
    setParam(new URLSearchParams(window.location.search).get("chooiceService"));
  }, []);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Section>
      <Container>
        <Row>
          <Col xs={12}>
            <Form
              onSubmit={handleSubmit((d) => {
                console.log(d);
              })}
            >
              <Row>
                <Col xs={12}>
                  <Title>Więc co robimy?</Title>
                </Col>
                <Col xs={12} md={6} lg={4}>
                  <CheckBoxService id="website1" param={param} error={errors.website1} label="strone www" register={register} required />
                </Col>
                <Col xs={12} md={6} lg={4}>
                  <CheckBoxService id="website2" param={param} error={errors.website2} label="sklep internetowy" register={register} required />
                </Col>
                <Col xs={12} md={6} lg={4}>
                  <CheckBoxService id="website3" param={param} error={errors.website3} label="pozycjonowanie" register={register} required />
                </Col>
                <Col xs={12} md={6} lg={4}>
                  <CheckBoxService id="website4" param={param} error={errors.website4} label="Analityka" register={register} required />
                </Col>
                <Col xs={12} md={6} lg={4}>
                  <CheckBoxService id="website5" param={param} error={errors.website5} label="aplikacja na telefon" register={register} required />
                </Col>
                <Col xs={12} md={6} lg={4}>
                  <CheckBoxService id="website6" param={param} error={errors.website6} label="Strona internetowa" register={register} required />
                </Col>
                <Col xs={12} md={6} lg={4}>
                  <CheckBoxService id="website7" param={param} error={errors.website7} label="Strona internetowa" register={register} required />
                </Col>
                <Col xs={12} md={6} lg={4}>
                  <CheckBoxService id="website8" param={param} error={errors.website8} label="Strona internetowa" register={register} required />
                </Col>
                <Col xs={12} md={6} lg={4}>
                  <CheckBoxService id="website9" param={param} error={errors.website9} label="Strona internetowa" register={register} required />
                </Col>
                <Col xs={12} className="nav">
                  <ButtonSubmit>
                    DALEJ <ArrowBig />
                  </ButtonSubmit>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default SectionChooiceServicesComponent;

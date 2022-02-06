import React, { useEffect, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { navigate } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import ArrowBig from "assets/media/icon/arrowBig.svg";
import { LeadsContext } from "providers/provider.leads";
import { ButtonSubmit } from "components/atoms/button/component.button";
import { Input, CheckBoxService, TextArea } from "components/molecules/form/index.form";
import { Row, Col, Container } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { Section, Title, Form } from "./section.chooiceServices.style";

const SectionChooiceServicesComponent = () => {
  const [send, setSend] = useState(false);
  const { chosenServices, setServices } = useContext(LeadsContext);

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
              onSubmit={handleSubmit((dataForm: { website: boolean; onlineshoop: boolean; seo: boolean; analitycs: boolean; app: boolean; sxo: boolean }) => {
                if (!Object.entries(dataForm).filter((key) => key[1]).length) return alert("Hej! Ustalmy co robimy :)");
                setServices(dataForm);
                navigate("/lead/data");
              })}
            >
              <Row>
                <Col xs={12}>
                  <Title>Więc co robimy?</Title>
                </Col>
                <Col xs={12} md={6} lg={4}>
                  <CheckBoxService id="website" value={chosenServices.website} error={errors.website} label="strone www" register={register} />
                </Col>
                <Col xs={12} md={6} lg={4}>
                  <CheckBoxService id="onlineshoop" value={chosenServices.onlineshoop} error={errors.onlineshoop} label="sklep internetowy" register={register} />
                </Col>
                <Col xs={12} md={6} lg={4}>
                  <CheckBoxService id="seo" value={chosenServices.seo} error={errors.seo} label="seo" register={register} />
                </Col>
                <Col xs={12} md={6} lg={4}>
                  <CheckBoxService id="analitycs" value={chosenServices.analitycs} error={errors.analitycs} label="Analityka" register={register} />
                </Col>
                <Col xs={12} md={6} lg={4}>
                  <CheckBoxService id="app" value={chosenServices.app} error={errors.app} label="aplikacja na telefon" register={register} />
                </Col>
                <Col xs={12} md={6} lg={4}>
                  <CheckBoxService id="sxo" value={chosenServices.sxo} error={errors.sxo} label="sxo" register={register} />
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

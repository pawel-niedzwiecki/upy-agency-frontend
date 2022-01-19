import React, { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import ArrowBig from "assets/media/icon/arrowBig.svg";
import { LeadsContext } from "providers/provider.leads";
import { graphql, useStaticQuery, navigate } from "gatsby";
import { ButtonSubmit, Button } from "components/atoms/button/component.button";
import { emailRegex, telRegex, nameRegex } from "assets/regex/index.regex";
import { Input, CheckBox, TextArea } from "components/molecules/form/index.form";
import { Row, Col, Container } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { Section, Title, BoxContent, Description, ListOptions, Option, TitleForm, Form } from "./section.dataLead.style";

const SectionDataLeadComponent = ({ data: { id, title, description } }: { data: { id: string; title: string; description: string } }) => {
  const [send, setSend] = useState(false);
  const { chosenServices, setServices } = useContext(LeadsContext);
  if (!Object.entries(chosenServices).filter((key) => key[1]).length) navigate("/lead/chooice-services");

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

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const url = "https://comunicatorforclient.herokuapp.com/api/v1/email";
  const settings = { method: "PUT" };

  type SendEmailAPIProps = {
    url: string;
    settings: {
      method: string;
    };
    data: any;
  };

  const sendEmailAPI = async ({ url, settings = { method: "GET" }, data }: SendEmailAPIProps) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    const urlencoded = new URLSearchParams();

    for (const property in data) {
      urlencoded.append(property, data[property]);
    }

    type requestOptionsProps = {
      method: string;
      headers: any;
      body: any;
    };

    const requestOptions: requestOptionsProps = {
      method: settings.method,
      headers: myHeaders,
      body: urlencoded,
    };

    await fetch(url, requestOptions)
      .then((res) => {
        if (!(res.status < 200 || res.status >= 300)) return res.json();
      })
      .then((result) => {
        if (!(result.status < 200 || result.status >= 300)) {
          alert(`Hej ${JSON.parse(data.message).nameContact}! w ciągu 24h spodziewaj sie kontaktu z nami ! :)`);
          setSend(false);
          return reset();
        }
      })
      .catch((error) => {
        alert("Ups... coś poszło nie tak :( Napisz do nas bezpośrednio na ,,hello@upy.pl'' aby dłuzej nie czekać na naprawę błędu...");
        return reset();
      });
  };

  return (
    <Section>
      <Form
        onSubmit={handleSubmit((d) => {
          setSend(true);
          sendEmailAPI({
            url,
            settings,
            data: {
              domian: "upy.pl",
              emailTo: "hello@upy.pl",
              emailFrom: d.emailContact,
              message: JSON.stringify(d),
            },
          });
        })}
      >
        <Container>
          <Row>
            <Col xs={12} lg={6} className="description">
              <BoxContent>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <ListOptions>
                  {Object.entries(chosenServices).map((el: any) => {
                    if (!el[1]) return null;

                    let name = "";
                    switch (el[0]) {
                      case "website":
                        name = "strona www";
                        break;
                      case "onlineshoop":
                        name = "sklep internetowy";
                        break;
                      case "seo":
                        name = "seo";
                        break;
                      case "analitycs":
                        name = "Analityka";
                        break;
                      case "app":
                        name = "Aplikacja na telefon";
                        break;
                      case "sxo":
                        name = "sxo";
                        break;
                    }
                    console.log(el);
                    return (
                      <Option checkedIcon={checked.publicURL} key={el[0]}>
                        {name}
                      </Option>
                    );
                  })}
                </ListOptions>
              </BoxContent>
            </Col>
            <Col xs={12} lg={6} className="form">
              <Input id="nameContact" type="text" pattern={nameRegex} error={errors.nameContact} label="imię" register={register} required />
              <Input id="emailContact" type="email" pattern={emailRegex} error={errors.emailContact} label="email" register={register} required />
              <Input id="telContact" type="tel" pattern={telRegex} error={errors.telContact} label="telefon" register={register} required />
              <CheckBox
                id="privacyPolicyContact"
                pattern={emailRegex}
                error={errors.privacyPolicyContact}
                label="wyrażam zgodę na przetwarzanie przez UPY moich danych osobowych, zawartych w formularzu kontaktowym, w celu udzielenia odpowiedzi na przesłane przeze mnie zapytanie."
                register={register}
                required
              />
            </Col>
            <Col xs={12} lg={6} className="back">
              <Button onClick={() => navigate("/lead/chooice-services")}>
                <ArrowBig />
                Wstecz
              </Button>
            </Col>
            <Col xs={12} lg={6} className="next">
              <ButtonSubmit>
                Wyślij <ArrowBig />
              </ButtonSubmit>
            </Col>
          </Row>
        </Container>
      </Form>
    </Section>
  );
};

export default SectionDataLeadComponent;

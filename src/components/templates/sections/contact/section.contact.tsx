import { Link } from "gatsby";
import { useForm } from "react-hook-form";
import { graphql, useStaticQuery } from "gatsby";
import React, { useContext, useState } from "react";
import { SquareConent, MovingElement } from "components/atoms/animation/index.comonent.animation";
import { emailRegex, telRegex, nameRegex } from "assets/regex/index.regex";
import { Input, CheckBox, TextArea } from "components/molecules/form/index.form";
import { ButtonOutLink, ButtonSubmit } from "components/atoms/button/component.button";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { Section, SelectBox, List, Header, BoxContact, Title, Form } from "./section.contact.styled";

import GitHub from "assets/media/icon/github.svg";
import Linkedin from "assets/media/icon/linkedin.svg";
import Instagram from "assets/media/icon/instagram.svg";
import Square from "assets/media/icon/square.svg";

const ContactSectionComponent = () => {
  const [send, setSend] = useState(false);

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
          alert(`Hej ${JSON.parse(data.message).nameContact}! w ci??gu 24h spodziewaj sie kontaktu z nami ! :)`);
          setSend(false);
          return reset();
        }
      })
      .catch((error) => {
        alert("Ups... co?? posz??o nie tak :( Napisz do mnie bezpo??rednio na ,,hello@uxu.pl'' aby d??uzej nie czeka?? na napraw?? b????du...");
        return reset();
      });
  };

  return (
    <Section id="contact">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={4}>
            <SelectBox>
              <Header style={{ paddingBottom: "2rem" }}>UPY</Header>
              <List>
                <li>ul. Serwituty 25</li>
                <li>02-233 Warszawa</li>
                <li>Polska</li>
                <li style={{ paddingTop: "3rem", fontWeight: "bold" }}>VAT-ID</li>
                <li>5223077290</li>
                <li style={{ paddingTop: "3rem", fontWeight: "bold" }}>REGON</li>
                <li>365979030</li>
                <li style={{ paddingTop: "3rem", fontWeight: "bold" }}>KRS</li>
                <li>0000649985</li>
              </List>

              <List style={{ paddingTop: "4rem" }}>
                <li>
                  <Link to="tel:+48888881441">+48 888 881 441</Link>
                </li>
                <li>
                  <Link to="mailto:hello@upy.pl">hello@upy.pl</Link>
                </li>
                <li>
                  <List typ="level">
                    <li>
                      <a href="/" title="GitHub">
                        <GitHub />
                      </a>
                    </li>
                    <li>
                      <a href="/" title="Instagram">
                        <Instagram />
                      </a>
                    </li>
                    <li>
                      <a href="/" title="LinkedIn">
                        <Linkedin />
                      </a>
                    </li>
                  </List>
                </li>
              </List>
            </SelectBox>
          </Col>

          <Col xs={12} md={6} lg={8} style={{ zIndex: 1 }}>
            <BoxContact>
              <Title>Kontakt</Title>
              {send ? (
                <>
                  <SquareConent height={4} />
                  <SquareConent height={4} />
                  <SquareConent height={4} />
                  <SquareConent height={8} />
                  <SquareConent height={4} />
                </>
              ) : (
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
                  <Input id="nameContact" type="text" pattern={nameRegex} error={errors.nameContact} label="imi??" register={register} required />
                  <Input id="emailContact" type="email" pattern={emailRegex} error={errors.emailContact} label="email" register={register} required />
                  <Input id="telContact" type="tel" pattern={telRegex} error={errors.telContact} label="telefon" register={register} required />
                  <TextArea id="descriptionContact" pattern={nameRegex} error={errors.descriptionContact} label="wiadomo????" register={register} required />
                  <CheckBox
                    id="privacyPolicyContact"
                    pattern={emailRegex}
                    error={errors.privacyPolicyContact}
                    label="wyra??am zgod?? na przetwarzanie przez UPY moich danych osobowych, zawartych w formularzu kontaktowym, w celu udzielenia odpowiedzi na przes??ane przeze mnie zapytanie."
                    register={register}
                    required
                  />
                  <ButtonSubmit style={{ marginTop: "3rem" }}>Wy??lij</ButtonSubmit>
                </Form>
              )}
            </BoxContact>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default ContactSectionComponent;

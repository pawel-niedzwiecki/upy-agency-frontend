import { Link } from "gatsby";
import { useForm } from "react-hook-form";
import React, { useContext, useState } from "react";
import { SquareConent, MovingElement } from "components/atoms/animation/index.comonent.animation";
import { emailRegex, telRegex, nameRegex } from "assets/regex/index.regex";
import { Input, CheckBox, TextArea } from "components/molecules/form/index.form";
import { ButtonOutLink, ButtonSubmit } from "components/atoms/button/component.button";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { Section, SelectBox, List, Header, BoxContact, Title, Form, BoxAnimation, SharpCircle, SharpSquare, SharpTriangle } from "./section.contact.styled";

import noise from "assets/media/icon/noise.svg";
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
          alert(`Hej ${JSON.parse(data.message).nameContact}! w ciągu 24h spodziewaj sie kontaktu z nami ! :)`);
          setSend(false);
          return reset();
        }
      })
      .catch((error) => {
        alert("Ups... coś poszło nie tak :( Napisz do mnie bezpośrednio na ,,hello@uxu.pl'' aby dłuzej nie czekać na naprawę błędu...");
        return reset();
      });
  };

  return (
    <Section id="contact">
      <Container>
        <Row>
          <Col xs={12} md={4} lg={3}>
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
                      <Link to="https://github.com/pawel-niedzwiecki" title="GitHub">
                        <GitHub />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.instagram.com/uxupl/" title="Instagram">
                        <Instagram />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.linkedin.com/in/pawel-niedzwiecki/" title="LinkedIn">
                        <Linkedin />
                      </Link>
                    </li>
                  </List>
                </li>
              </List>
            </SelectBox>
          </Col>

          <Col xs={12} md={8} lg={5} style={{ zIndex: 1 }}>
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
                  <Input id="nameContact" type="text" pattern={nameRegex} error={errors.nameContact} label="imię" register={register} required />
                  <Input id="emailContact" type="email" pattern={emailRegex} error={errors.emailContact} label="email" register={register} required />
                  <Input id="telContact" type="tel" pattern={telRegex} error={errors.telContact} label="telefon" register={register} required />
                  <TextArea id="descriptionContact" pattern={nameRegex} error={errors.descriptionContact} label="wiadomość" register={register} required />
                  <CheckBox
                    id="privacyPolicyContact"
                    pattern={emailRegex}
                    error={errors.privacyPolicyContact}
                    label="wyrażam zgodę na przetwarzanie przez UPY moich danych osobowych, zawartych w formularzu kontaktowym, w celu udzielenia odpowiedzi na przesłane przeze mnie zapytanie."
                    register={register}
                    required
                  />
                  <ButtonSubmit style={{ marginTop: "3rem" }}>Wyślij</ButtonSubmit>
                </Form>
              )}
            </BoxContact>
          </Col>
        </Row>
        <BoxAnimation>
          <MovingElement>
            <SharpCircle bg={noise} className="movieEL">
              <div className="isolate">
                <div className="ball-shadow"></div>
                <div className="ball-light"></div>
              </div>
            </SharpCircle>
            <SharpSquare bg={noise} className="movieEL">
              <div className="isolate">
                <div className="ball-shadow"></div>
                <div className="ball-light"></div>
              </div>
            </SharpSquare>
            <SharpTriangle bg={noise} className="movieEL">
              <div className="isolate">
                <div className="ball-shadow"></div>
                <div className="ball-light"></div>
              </div>
            </SharpTriangle>

            <Square style={{ width: "30rem" }} />
            <Square style={{ width: "30rem", marginLeft: "4.2rem", top: "-2px", position: "relative" }} />
          </MovingElement>
        </BoxAnimation>
      </Container>
    </Section>
  );
};

export default ContactSectionComponent;

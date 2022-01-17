import React, { useState, useEffect, useContext } from "react";
import Typewriter from "typewriter-effect";
import Brand from "assets/media/icon/logo.svg";
import { graphql, useStaticQuery } from "gatsby";
import ArrowBig from "assets/media/icon/arrowBig.svg";
import Chat from "components/atoms/chat/component.chat";
import { InputSelect } from "components/molecules/form/index.form";
import { ButtonSubmit } from "components/atoms/button/component.button";
import { Section, BoxContent, Form } from "./section.start.style";

const StartSectionComponent = () => {
  const [startAnimation, useStartAnimation] = useState(false);

  const { noise } = useStaticQuery(
    graphql`
      query {
        noise: file(name: { eq: "noise" }) {
          id
          name
          publicURL
        }
      }
    `
  );

  useEffect(() => {
    const start = setTimeout(() => {
      useStartAnimation(true);
    }, 300);

    return () => {
      clearTimeout(start);
    };
  }, []);

  return (
    <Section>
      {startAnimation && (
        <>
          <BoxContent>
            <Typewriter
              options={{
                delay: 60,
                loop: false,
                autoStart: true,
                strings: "Hej! Co dziś robimy?",
              }}
            />
            <Form action="/lead/chooice-services" method="get">
              <InputSelect id="chooice-services" name="chooiceService" options={["strone www", "pozycjonowanie", "aplikacja na telefon"]} />
              <ButtonSubmit>
                DALEJ <ArrowBig />
              </ButtonSubmit>
            </Form>
          </BoxContent>
          <Chat />
        </>
      )}
    </Section>
  );
};

export default StartSectionComponent;

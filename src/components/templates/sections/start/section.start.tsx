import React, { useState, useEffect, useContext } from "react";
import Typewriter from "typewriter-effect";
import { graphql, useStaticQuery } from "gatsby";
import ArrowBig from "assets/media/icon/arrowBig.svg";
import { Section, BoxContent, Form } from "./section.start.style";
import { InputSelect } from "components/molecules/form/index.form";
import { ButtonSubmit } from "components/atoms/button/component.button";

const StartSectionComponent = () => {
  const [startAnimation, useStartAnimation] = useState(false);

  const { wheel } = useStaticQuery(
    graphql`
      query {
        wheel: file(name: { eq: "wheel" }) {
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
    <Section style={{ backgroundImage: `url(${wheel.publicURL})` }}>
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
            <Form>
              <InputSelect options={["strone www", "pozycjonowanie", "aplikacja na telefon"]} />
              <ButtonSubmit>
                DALEJ <ArrowBig />
              </ButtonSubmit>
            </Form>
          </BoxContent>
        </>
      )}
    </Section>
  );
};

export default StartSectionComponent;

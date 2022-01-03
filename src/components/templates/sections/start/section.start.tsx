import React, { useState, useEffect, useContext } from "react";
import Typewriter from "typewriter-effect";
import Brand from "assets/media/icon/logotyp.svg";
import { graphql, useStaticQuery } from "gatsby";
import ArrowBig from "assets/media/icon/arrowBig.svg";
import Chat from "components/atoms/chat/component.chat";
import { InputSelect } from "components/molecules/form/index.form";
import { ButtonSubmit } from "components/atoms/button/component.button";
import { MovingElement } from "components/atoms/animation/index.comonent.animation";
import { Section, BoxContent, Form, MovingElementBox, SharpCircle, AnimationLogo, SharpTriangle } from "./section.start.style";

const StartSectionComponent = () => {
  const [startAnimation, useStartAnimation] = useState(false);

  const { wheel, noise, filip } = useStaticQuery(
    graphql`
      query {
        wheel: file(name: { eq: "wheel" }) {
          id
          name
          publicURL
        }
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
          <Chat />
          <MovingElementBox>
            <MovingElement>
              <SharpCircle bg={noise.publicURL} className="movieEL">
                <div className="isolate">
                  <div className="ball-shadow"></div>
                  <div className="ball-light"></div>
                </div>
              </SharpCircle>
              <AnimationLogo className="movieEL">
                <Brand />
              </AnimationLogo>
              <SharpTriangle bg={noise.publicURL} className="movieEL">
                <div className="isolate">
                  <div className="ball-shadow"></div>
                  <div className="ball-light"></div>
                </div>
              </SharpTriangle>
            </MovingElement>
          </MovingElementBox>
        </>
      )}
    </Section>
  );
};

export default StartSectionComponent;

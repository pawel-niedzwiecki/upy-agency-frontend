import React, { useState, useEffect, useContext } from "react";
import Typewriter from "typewriter-effect";
import Brand from "assets/media/icon/logotyp.svg";
import { graphql, useStaticQuery } from "gatsby";
import ArrowBig from "assets/media/icon/arrowBig.svg";
import {
  Section,
  BoxContent,
  Form,
  MovingElementBox,
  SharpCircle,
  AnimationLogo,
  SharpTriangle,
} from "./section.start.style";
import { InputSelect } from "components/molecules/form/index.form";
import { ButtonSubmit } from "components/atoms/button/component.button";
import { MovingElement } from "components/atoms/animation/index.comonent.animation";

const tawkToPropertyId = "https://embed.tawk.to/61cdfc14c82c976b71c428f2/1fo6a1c22";

declare global {
  interface Window {
    Tawk_API: any;
    Tawk_LoadStart: any;
  }
}

const tawkToLoadScripts = async () => {
  await (function () {
    var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/61cdfc14c82c976b71c428f2/1fo6a1c22";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
  })();
};

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
        filip: file(name: { eq: "filip" }) {
          id
          name
          publicURL
        }
      }
    `
  );

  console.log(filip);
  useEffect(() => {
    const start = setTimeout(() => {
      useStartAnimation(true);
    }, 300);

    return () => {
      clearTimeout(start);
    };
  }, []);

  useEffect(() => {
    tawkToLoadScripts();
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    window.Tawk_API.onLoad = function () {
      window.Tawk_API.hideWidget();
      console.log("chat loaded");
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

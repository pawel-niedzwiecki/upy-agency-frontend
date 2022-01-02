import React, { useState, useEffect, useContext } from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { ChatFaceBox, ChatFaceBoxText } from "./component.chat.style";

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

const ChatComponent = () => {
  const [infoChat, useInfoChat] = useState(true);
  const [powerChat, usePowerChat] = useState(false);

  const { filip } = useStaticQuery(
    graphql`
      query {
        filip: file(name: { eq: "filip" }) {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  useEffect(() => {
    tawkToLoadScripts();
    window.Tawk_LoadStart = new Date();
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_API.onLoad = () => window.Tawk_API.hideWidget();
    window.Tawk_API.onStatusChange = (status: string) => status === "online" && usePowerChat(true);
  }, []);

  useEffect(() => {
    powerChat &&
      window.addEventListener("scroll", () => {
        const scrollToEdgeStart = window.pageYOffset;
        if (scrollToEdgeStart > 200 && infoChat) useInfoChat(false);
        else if (scrollToEdgeStart < 200 && !infoChat) useInfoChat(true);
      });

    return () => {
      powerChat &&
        window.removeEventListener("scroll", () => {
          const scrollToEdgeStart = window.pageYOffset;
          if (scrollToEdgeStart > 200 && infoChat) useInfoChat(false);
          else if (scrollToEdgeStart < 200 && !infoChat) useInfoChat(true);
        });
    };
  }, [infoChat, powerChat]);

  return (
    <ChatFaceBox
      infoChat={infoChat}
      powerChat={powerChat}
      onClick={() => {
        window.Tawk_API.maximize();
      }}
    >
      <ChatFaceBoxText infoChat={infoChat} powerChat={powerChat}>
        Hej , może w czymś pomóc ?
      </ChatFaceBoxText>
      <BackgroundImage Tag="div" className="face" fluid={filip.childImageSharp.fluid} />
    </ChatFaceBox>
  );
};

export default ChatComponent;

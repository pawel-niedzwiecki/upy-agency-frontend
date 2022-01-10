import * as React from "react";
import Layout from "layout/index.layout";
import { graphql, useStaticQuery } from "gatsby";
import { Info, Start, ServicesComponent, LastArticleOnBlog, AndHowWeOperate, LogoCarusel } from "components/templates/sections/index.sections";

const IndexPage = () => {
  const { home, theyTrustedUses, wroteAboutUses } = useStaticQuery(
    graphql`
      query {
        home: strapiHome {
          info {
            id
            title
            description
          }
        }
        theyTrustedUses: allStrapiTheyTrustedUses {
          nodes {
            id
            url
            title
            brand {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
        wroteAboutUses: allStrapiWroteAboutUses {
          nodes {
            id
            url
            title
            brand {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    `
  );

  return (
    <Layout>
      <Start />
      <LogoCarusel title="Pisali o nas" brands={wroteAboutUses.nodes} />
      <ServicesComponent />
      <LogoCarusel title="Zaufali nam" brands={theyTrustedUses.nodes} />
      <Info data={{ ...home.info }} />
      <LastArticleOnBlog />
      <AndHowWeOperate />
    </Layout>
  );
};

export default IndexPage;

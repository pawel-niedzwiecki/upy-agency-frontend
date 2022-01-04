import * as React from "react";
import Layout from "layout/index.layout";
import { graphql, useStaticQuery } from "gatsby";
import { Info, Start, WroteAboutUses, ServicesComponent, TheyTrustedUses, LastArticleOnBlog } from "components/templates/sections/index.sections";

const IndexPage = () => {
  const { home } = useStaticQuery(
    graphql`
      query {
        home: strapiHome {
          info {
            id
            title
            description
          }
        }
      }
    `
  );

  return (
    <Layout>
      <Start />
      <WroteAboutUses />
      <ServicesComponent />
      <TheyTrustedUses />
      <Info data={{ ...home.info }} />
      <LastArticleOnBlog />
    </Layout>
  );
};

export default IndexPage;

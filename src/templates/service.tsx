import React from "react";
import lodash from "lodash";
import Layout from "layout/index.layout";
import { graphql, Link } from "gatsby";
import Breadcrumb from "components/templates/breadcrumb/index.breadcrumb";
import { Lead, LogoCarusel } from "components/templates/sections/index.sections";

const PageService = ({ data: { service }, pageContext: { title } }: any) => {
  const { id, header, description, options } = service;

  const paths: { title: string; path: string }[] = [
    { title: "home", path: "/" },
    { title: "wszystkie-usługi", path: "/s/c/" },
    { title: `${lodash.kebabCase(lodash.deburr(title))}`, path: `/s/${lodash.kebabCase(lodash.deburr(title))}` },
  ];

  return (
    <Layout>
      <Breadcrumb paths={paths} />
      <Lead data={{ id, title: header, description, options }} />
    </Layout>
  );
};

export const PageServiceQuery = graphql`
  query PageServiceQuery($title: String!) {
    service: strapiServices(title: { eq: $title }) {
      id
      title
      header
      description
      options
    }
  }
`;

export default PageService;

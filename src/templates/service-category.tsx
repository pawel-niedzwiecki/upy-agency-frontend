import React from "react";
import lodash from "lodash";
import Layout from "layout/index.layout";
import { graphql, useStaticQuery, Link } from "gatsby";
import Breadcrumb from "components/templates/breadcrumb/index.breadcrumb";
import { ListCategoryServicesAndExecutions } from "components/templates/sections/index.sections";

const PageServicesCategory = ({ data, pageContext: { title } }: any) => {
  const { categories, tiles } = data;
  const paths: { title: string; path: string }[] = [
    { title: "home", path: "/" },
    { title: "wszystkie-usługi", path: "/s/c" },
    { title: `${lodash.kebabCase(lodash.deburr(title))}`, path: `/s/c/${lodash.kebabCase(lodash.deburr(title))}` },
  ];

  return (
    <Layout>
      <Breadcrumb paths={paths} />
      <ListCategoryServicesAndExecutions categories={categories.nodes} tiles={tiles.nodes} type="services" active={title} />
    </Layout>
  );
};

export const blogListQuery = graphql`
  query PageServicesCategoryQuery($title: String!) {
    categories: allStrapiServiceCategories {
      nodes {
        id
        title
      }
    }
    tiles: allStrapiServices(filter: { service_category: { title: { eq: $title } } }) {
      nodes {
        id
        title
      }
    }
  }
`;

export default PageServicesCategory;

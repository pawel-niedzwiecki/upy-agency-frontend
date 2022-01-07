import React from "react";
import lodash from "lodash";
import Layout from "layout/index.layout";
import { graphql, useStaticQuery, Link } from "gatsby";
import Breadcrumb from "components/templates/breadcrumb/index.breadcrumb";
import { ListCategoryServicesAndExecutions } from "components/templates/sections/index.sections";

const PageExecutionsCategory = ({ data, pageContext: { title } }: any) => {
  const { categories, tiles } = data;
  const paths: { title: string; path: string }[] = [
    { title: "home", path: "/" },
    { title: "wszystkie-realizacje", path: "/e/c" },
    { title: `${lodash.kebabCase(lodash.deburr(title))}`, path: `/e/c/${lodash.kebabCase(lodash.deburr(title))}` },
  ];

  return (
    <Layout>
      <Breadcrumb paths={paths} />
      <ListCategoryServicesAndExecutions categories={categories.nodes} tiles={tiles.nodes} type="execution" active={title} />
    </Layout>
  );
};

export const PageExecutionsCategoryQuery = graphql`
  query PageExecutionsCategoryQuery($title: String!) {
    categories: allStrapiExecutionCategories {
      nodes {
        id
        title
      }
    }
    tiles: allStrapiExecutions(filter: { execution_category: { title: { eq: $title } } }) {
      nodes {
        id
        title
        technologies {
          id
          title
        }
      }
    }
  }
`;

export default PageExecutionsCategory;

import React from "react";
import Layout from "layout/index.layout";
import { graphql, useStaticQuery, Link } from "gatsby";
import Breadcrumb from "components/templates/breadcrumb/index.breadcrumb";
import { ListCategoryServicesAndExecutions } from "components/templates/sections/index.sections";

const PageExecutionsCategory = ({ pageContext: { title } }: any) => {
  const { categories } = useStaticQuery(
    graphql`
      query {
        categories: allStrapiExecutionCategories {
          nodes {
            id
            title
          }
        }
      }
    `
  );

  return (
    <Layout>
      <Breadcrumb />
      <ListCategoryServicesAndExecutions categories={categories.nodes} active={title} />
    </Layout>
  );
};

export default PageExecutionsCategory;

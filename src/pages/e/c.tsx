import * as React from "react";

import Layout from "layout/index.layout";
import { graphql, useStaticQuery, Link } from "gatsby";
import Breadcrumb from "components/templates/breadcrumb/index.breadcrumb";
import { ListCategoryServicesAndExecutions } from "components/templates/sections/index.sections";

const ExecutionsCategoryPage = () => {
  const paths = [
    { title: "home", path: "/" },
    { title: "wszystkie-realizacje", path: "/e/c" },
  ];

  const { categories, tiles } = useStaticQuery(
    graphql`
      query {
        categories: allStrapiExecutionCategories {
          nodes {
            id
            title
          }
        }
        tiles: allStrapiExecutions {
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
    `
  );

  return (
    <Layout>
      <Breadcrumb paths={paths} />
      <ListCategoryServicesAndExecutions categories={categories.nodes} tiles={tiles.nodes} type="execution" active="all" />
    </Layout>
  );
};

export default ExecutionsCategoryPage;

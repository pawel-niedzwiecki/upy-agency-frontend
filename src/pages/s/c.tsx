import React from "react";
import lodash from "lodash";
import Layout from "layout/index.layout";
import { graphql, useStaticQuery, Link } from "gatsby";
import Breadcrumb from "components/templates/breadcrumb/index.breadcrumb";
import { ListCategoryServicesAndExecutions } from "components/templates/sections/index.sections";

const ServiceCategoryPage = () => {
  const paths: { title: string; path: string }[] = [
    { title: "home", path: "/" },
    { title: "wszystkie-usługi", path: "/s/c" },
  ];

  const { categories, tiles } = useStaticQuery(
    graphql`
      query {
        categories: allStrapiServiceCategories {
          nodes {
            id
            title
          }
        }
        tiles: allStrapiServices {
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
      <Breadcrumb paths={paths} />
      <ListCategoryServicesAndExecutions categories={categories.nodes} tiles={tiles.nodes} type="services" active="all" />
    </Layout>
  );
};

export default ServiceCategoryPage;

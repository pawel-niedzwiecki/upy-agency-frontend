import React from "react";
import lodash from "lodash";
import Layout from "layout/index.layout";
import { graphql, Link } from "gatsby";
import Breadcrumb from "components/templates/breadcrumb/index.breadcrumb";
import { Execution, LogoCarusel } from "components/templates/sections/index.sections";

const PageExecution = ({ data, pageContext: { title } }: any) => {
  const { execution } = data;

  const paths: { title: string; path: string }[] = [
    { title: "home", path: "/" },
    { title: "wszystkie-realizacje", path: "/e/c" },
    { title: `${lodash.kebabCase(lodash.deburr(title))}`, path: `/e/${lodash.kebabCase(lodash.deburr(title))}` },
  ];

  return (
    <Layout>
      <Breadcrumb paths={paths} />
      <Execution data={execution} />
      <LogoCarusel title="Technologie" brands={execution.technologies} />
      <div style={{ height: "10rem" }}></div>
    </Layout>
  );
};

export const PageExecutionQuery = graphql`
  query PageExecutionQuery($title: String!) {
    execution: strapiExecutions(title: { eq: $title }) {
      id
      title
      start
      purposeandprocess
      technologies {
        id
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
`;

export default PageExecution;

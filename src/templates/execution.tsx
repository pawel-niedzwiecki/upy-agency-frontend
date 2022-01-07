import React from "react";
import lodash from "lodash";
import { graphql, Link } from "gatsby";
import Layout from "layout/index.layout";
import Breadcrumb from "components/templates/breadcrumb/index.breadcrumb";
import { Execution } from "components/templates/sections/index.sections";

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
      }
    }
  }
`;

export default PageExecution;

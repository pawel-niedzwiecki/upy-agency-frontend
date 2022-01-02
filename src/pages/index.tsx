import * as React from "react";
import Layout from "layout/index.layout";
import { Start, WroteAboutUses } from "components/templates/sections/index.sections";

const IndexPage = () => {
  return (
    <Layout>
      <Start />
      <WroteAboutUses />
    </Layout>
  );
};

export default IndexPage;

import * as React from "react";
import Layout from "layout/index.layout";
import { Start, WroteAboutUses, ServicesComponent } from "components/templates/sections/index.sections";

const IndexPage = () => {
  return (
    <Layout>
      <Start />
      <WroteAboutUses />
      <ServicesComponent />
    </Layout>
  );
};

export default IndexPage;

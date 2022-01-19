import React, { useContext, useEffect } from "react";
import Layout from "layout/index.layout";
import { ChooiceServices } from "components/templates/sections/index.sections";
import Breadcrumb from "components/templates/breadcrumb/index.breadcrumb";
import { LeadsContext } from "providers/provider.leads";

const ContactPage = ({ props }: any) => {
  const paths: { title: string; path: string }[] = [
    { title: "home", path: "/" },
    { title: "wybierz usługę", path: "/lead/chooice-services/" },
  ];
  return (
    <Layout>
      <Breadcrumb paths={paths} />
      <ChooiceServices />
    </Layout>
  );
};

export default ContactPage;

import * as React from "react";
import Layout from "layout/index.layout";
import { DataLead } from "components/templates/sections/index.sections";
import Breadcrumb from "components/templates/breadcrumb/index.breadcrumb";

const ContactPage = () => {
  const paths: { title: string; path: string }[] = [
    { title: "home", path: "/" },
    { title: "wybierz usługę", path: "/lead/chooice-services/" },
    { title: "wyślij zapytanie", path: "/lead/data/" },
  ];
  return (
    <Layout>
      <Breadcrumb paths={paths} />
      <DataLead
        data={{
          id: "sendQuestion",
          title: "Hej juz prawie wszystko!",
          description: "Abyśmy dobrze sie zrozumieli, uzupełnij poprawnie ten formularz w celu prawidłowej wyceny takich usług jak.",
        }}
      />
    </Layout>
  );
};

export default ContactPage;

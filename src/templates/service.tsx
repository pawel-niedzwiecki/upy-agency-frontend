import React, { useEffect } from "react";
import lodash from "lodash";
import { graphql, Link } from "gatsby";
import Layout from "layout/index.layout";
import Breadcrumb from "components/templates/breadcrumb/index.breadcrumb";
import { Lead, Info, LogoCarusel, ContentService, AndHowWeOperate } from "components/templates/sections/index.sections";

const PageService = ({ data: { service, wroteAboutUses, theyTrustedUses }, pageContext: { title } }: any) => {
  const { id, header, description, options, Content } = service;

  const paths: { title: string; path: string }[] = [
    { title: "home", path: "/" },
    { title: "wszystkie-usługi", path: "/s/c/" },
    { title: `${lodash.kebabCase(lodash.deburr(title))}`, path: `/s/${lodash.kebabCase(lodash.deburr(title))}` },
  ];

  const siteSet: any = [];
  Content.filter((el: any) => el.strapi_component === "content.service-content").forEach((item: any, i: number) => siteSet.push({ id: item.id, site: i % 2 === 0 ? true : false }));

  return (
    <Layout>
      <Breadcrumb paths={paths} />
      <Lead data={{ id, title: header, description, options }} />
      <LogoCarusel title="Pisali o nas" brands={wroteAboutUses.nodes} />
      {Content.map((content: any, i: number) => {
        console.log(content.image);
        switch (content.strapi_component) {
          case "content.service-content":
            return (
              <ContentService
                key={i}
                data={{
                  id: content.id,
                  title: content.title,
                  image: content.image,
                  options: content.options,
                  description: content.description,
                  site: false,
                }}
              />
            );
          case "content.service-info":
            return <Info data={{ id: content.id, title: content.title, description: content.description }} />;
          default:
            return <p key={i}>Nie rozpoznano</p>;
        }
      })}
      <LogoCarusel title="Zafali nam" brands={theyTrustedUses.nodes} />
      <AndHowWeOperate />
    </Layout>
  );
};

export const PageServiceQuery = graphql`
  query PageServiceQuery($title: String!) {
    service: strapiServices(title: { eq: $title }) {
      id
      title
      header
      Content
      options
      description
    }
    wroteAboutUses: allStrapiWroteAboutUses {
      nodes {
        id
        url
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
    theyTrustedUses: allStrapiTheyTrustedUses {
      nodes {
        id
        url
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

export default PageService;

import * as React from "react";
import Layout from "layout/index.layout";
import { graphql, useStaticQuery } from "gatsby";
import Breadcrumb from "components/templates/breadcrumb/index.breadcrumb";
import { AboutUsStart, ContentService, TeamList } from "components/templates/sections/index.sections";

const AboutPage = () => {
  const { about } = useStaticQuery(
    graphql`
      query {
        about: strapiAboutUs {
          id
          title
          description
          content {
            title
            description
            options {
              id
              title
            }
            image {
              url
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          titleTeam
          descriptionTeam
          users_permissions_users {
            id
            username
            competition
            avatar {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  const { id, title, description, content } = about;

  const paths: { title: string; path: string }[] = [
    { title: "home", path: "/" },
    { title: "o nas", path: "/a/" },
  ];

  return (
    <Layout>
      <Breadcrumb paths={paths} />
      <AboutUsStart data={{ title, description }} />
      <ContentService data={{ id, site: true, title: content.title, description: content.description, image: content.image, options: content.options }} />
      <TeamList data={{ teams: about.users_permissions_users }} />
    </Layout>
  );
};

export default AboutPage;

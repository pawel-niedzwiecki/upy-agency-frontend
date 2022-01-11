import * as React from "react";
import Layout from "layout/index.layout";
import { graphql, useStaticQuery } from "gatsby";
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

  return (
    <Layout>
      <AboutUsStart data={{ title, description }} />
      <ContentService data={{ id, site: true, title: content.title, description: content.description, image: content.image, options: content.options }} />
      <TeamList data={{ teams: about.users_permissions_users }} />
    </Layout>
  );
};

export default AboutPage;

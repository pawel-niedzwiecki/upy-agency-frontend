import lodash from "lodash";
import * as React from "react";
import { graphql } from "gatsby";
import Layout from "layout/index.layout";
import Breadcrumb from "components/templates/breadcrumb/index.breadcrumb";
import { Article } from "components/templates/sections/index.sections";

const PageArticle = ({ data, pageContext: { title } }: any) => {
  const { articles } = data;

  const paths: { title: string; path: string }[] = [
    { title: "home", path: "/" },
    { title: "blog", path: "/b" },
    { title: `${lodash.kebabCase(lodash.deburr(title))}`, path: `/b/a/${lodash.kebabCase(lodash.deburr(title))}` },
  ];

  return (
    <Layout>
      <Breadcrumb paths={paths} />
      <Article data={articles} />
    </Layout>
  );
};

export const PageArticleQuery = graphql`
  query PageArticleQuery($title: String!) {
    articles: strapiBlogs(title: { eq: $title }) {
      id
      title

      tags {
        id
        title
      }
      updatedAt
      cover {
        localFile {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
            gatsbyImageData
          }
        }
      }
      users_permissions_user {
        id
        username
        avatar {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      content
    }
  }
`;

export default PageArticle;

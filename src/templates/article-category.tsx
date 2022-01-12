import lodash from "lodash";
import * as React from "react";
import { graphql } from "gatsby";
import Layout from "layout/index.layout";
import Breadcrumb from "components/templates/breadcrumb/index.breadcrumb";
import { ArticleList } from "components/templates/sections/index.sections";

const PageArticleCategory = ({ data, pageContext: { title } }: any) => {
  const { articles } = data;

  const paths: { title: string; path: string }[] = [
    { title: "home", path: "/" },
    { title: "blog", path: "/b" },
    { title: `tag-${lodash.kebabCase(lodash.deburr(title))}`, path: `/b/t/${lodash.kebabCase(lodash.deburr(title))}` },
  ];

  return (
    <Layout>
      <Breadcrumb paths={paths} />
      <ArticleList articles={articles.nodes} active={title} />
    </Layout>
  );
};

export const PageArticleCategoryQuery = graphql`
  query PageArticleCategoryQuery($title: String!) {
    articles: allStrapiBlogs(filter: { tags: { elemMatch: { title: { eq: $title } } } }) {
      nodes {
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
      }
    }
  }
`;

export default PageArticleCategory;

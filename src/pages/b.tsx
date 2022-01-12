import * as React from "react";
import Layout from "layout/index.layout";
import { graphql, useStaticQuery } from "gatsby";
import Breadcrumb from "components/templates/breadcrumb/index.breadcrumb";
import { ArticleList } from "components/templates/sections/index.sections";

const BlogPage = () => {
  const paths: { title: string; path: string }[] = [
    { title: "home", path: "/" },
    { title: "blog", path: "/b/" },
  ];

  const { artcles } = useStaticQuery(
    graphql`
      query {
        artcles: allStrapiBlogs(sort: { fields: createdAt }) {
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
    `
  );

  return (
    <Layout>
      <Breadcrumb paths={paths} />
      <ArticleList articles={artcles.nodes} active="all" />
    </Layout>
  );
};

export default BlogPage;

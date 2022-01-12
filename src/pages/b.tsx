import * as React from "react";
import Layout from "layout/index.layout";
import { ArticleList } from "components/templates/sections/index.sections";

const BlogPage = () => {
  return (
    <Layout>
      <ArticleList />
    </Layout>
  );
};

export default BlogPage;

const lodash = require("lodash/string");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const queryResults = await graphql(`
    query createPageQuery {
      allStrapiExecutionCategories {
        nodes {
          id
          title
        }
      }
      allStrapiExecutions {
        nodes {
          id
          title
        }
      }
      allStrapiServiceCategories {
        nodes {
          id
          title
        }
      }
      allStrapiServices {
        nodes {
          id
          title
        }
      }
      allStrapiTags {
        nodes {
          id
          title
          blogs {
            id
          }
        }
      }
      allStrapiBlogs {
        nodes {
          id
          title
        }
      }
    }
  `);

  queryResults.data.allStrapiExecutionCategories.nodes.forEach((content, index) => {
    createPage({
      path: `e/c/${lodash.kebabCase(lodash.deburr(content.title))}`,
      component: require.resolve(`./src/templates/executions-category.tsx`),
      context: { title: content.title, id: content.id, content, index },
    });
  });

  queryResults.data.allStrapiExecutions.nodes.forEach((content, index) => {
    createPage({
      path: `e/${lodash.kebabCase(lodash.deburr(content.title))}`,
      component: require.resolve(`./src/templates/execution.tsx`),
      context: { title: content.title, id: content.id, content, index },
    });
  });

  queryResults.data.allStrapiServiceCategories.nodes.forEach((content, index) => {
    createPage({
      path: `s/c/${lodash.kebabCase(lodash.deburr(content.title))}`,
      component: require.resolve(`./src/templates/service-category.tsx`),
      context: { title: content.title, id: content.id, content, index },
    });
  });

  queryResults.data.allStrapiServices.nodes.forEach((content, index) => {
    createPage({
      path: `s/${lodash.kebabCase(lodash.deburr(content.title))}`,
      component: require.resolve(`./src/templates/service.tsx`),
      context: { title: content.title, id: content.id, content, index },
    });
  });

  queryResults.data.allStrapiTags.nodes.forEach((content, index) => {
    createPage({
      path: `b/t/${lodash.kebabCase(lodash.deburr(content.title))}`,
      component: require.resolve(`./src/templates/article-category.tsx`),
      context: { title: content.title, id: content.id, content, index },
    });
  });

  queryResults.data.allStrapiBlogs.nodes.forEach((content, index) => {
    createPage({
      path: `b/a/${lodash.kebabCase(lodash.deburr(content.title))}`,
      component: require.resolve(`./src/templates/article.tsx`),
      context: { title: content.title, id: content.id, content, index },
    });
  });
};

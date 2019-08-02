const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const page = path.resolve('./src/components/writer.js');

  return graphql(`
    {
      allFile(filter: {extension: {eq: "json"}}) {
        edges {
          node {
            dir
            name
            childDataJson {
              language
              title2
            }
          }
        }
      }
    }
    `)
    .then(({ data }) => {
      const dataFiles = data.allFile.edges.filter(({ node }) =>
        path.resolve(node.dir) === `${path.resolve(__dirname, 'src/data/')}`);
      const names = [...new Set(dataFiles.map(({ node }) => node.childDataJson.title2))];
      names.forEach((name) => {
        createPage({
          path: `/${name}`,
          component: page,
          context: {
            title: `${name}`,
          },
        });
      });
    });
};

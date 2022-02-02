/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: "app",
  browserBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: "build",
  devServerPort: 8002,
};

// can be an sync / async function or an object
exports.mdx = async (filename) => {
  const [rehypeHighlight] = await Promise.all([
    import("rehype-highlight").then((mod) => mod.default),
  ]);

  return {
    rehypePlugins: [rehypeHighlight],
  };
};

import fs from "fs";
import path from "path";
import { bundleMDX } from "mdx-bundler";
import mdxPrism from "mdx-prism";

export type MdxDoc = {
  title: string;
  description: string;
  code: string;
};

export default async function getDoc(
  section: string,
  slug: string,
): Promise<MdxDoc | undefined> {
  const docPath = path.resolve(`./docs/${section}/${slug}.mdx`);

  const docExists = fs.existsSync(docPath);

  if (!docExists) {
    return undefined;
  }

  const { default: remarkToc } = await import("remark-toc");
  const { default: rehypeSlug } = await import("rehype-slug");
  const { default: rehypeAutolinkHeadings } = await import(
    "rehype-autolink-headings"
  );

  const mdxResult = await bundleMDX({
    file: docPath,
    xdmOptions(options) {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.

      options.remarkPlugins = [
        [remarkToc, { tight: true }],
        ...(options.remarkPlugins ?? []),
      ];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        mdxPrism,
        rehypeSlug,
        rehypeAutolinkHeadings,
      ];

      return options;
    },
  });

  if (mdxResult.errors.length > 0) {
    for (const err in mdxResult.errors) {
      console.error(err);
    }
  }

  return {
    title: mdxResult.frontmatter.meta.title,
    description: mdxResult.frontmatter.meta.description,
    code: mdxResult.code,
  };
}

const textReplacements: Record<string, string> = {
  "ARCHITECTURE.md":
    "https://github.com/earthstar-project/earthstar/blob/squirrel/ARCHITECTURE.md",
  "README_SERVERS.md": "/docs/server-guide",
  "CONTRIBUTING.md": "/community/contribute",
  "# Earthstar\n": "# User Guide\n",
  "# Earthstar Servers\n": "# Server guide\n",
};

export async function getGithubDoc(repo: string, branch: string, path: string) {
  const res = await fetch(
    `https://raw.githubusercontent.com/earthstar-project/${repo}/${branch}/${path}`,
  );

  const text = await res.text();

  let moddedText = text;

  for (const link in textReplacements) {
    console.log(link);

    moddedText = moddedText.replaceAll(link, textReplacements[link]);
  }

  const { default: remarkToc } = await import("remark-toc");
  const { default: rehypeSlug } = await import("rehype-slug");
  const { default: rehypeAutolinkHeadings } = await import(
    "rehype-autolink-headings"
  );

  const mdxResult = await bundleMDX({
    source: moddedText,
    xdmOptions(options) {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.

      options.remarkPlugins = [
        [remarkToc, { tight: true }],
        ...(options.remarkPlugins ?? []),
      ];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        mdxPrism,
        rehypeSlug,
        rehypeAutolinkHeadings,
      ];

      return options;
    },
  });

  if (mdxResult.errors.length > 0) {
    for (const err in mdxResult.errors) {
      console.error(err);
    }
  }

  return {
    code: mdxResult.code,
  };
}

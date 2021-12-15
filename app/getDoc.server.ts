import fs from "fs";
import path from "path";
import { bundleMDX } from "mdx-bundler";

export type MdxDoc = {
  title: string;
  description: string;
  code: string;
};

export default async function getDoc(
  section: string,
  slug: string
): Promise<MdxDoc | undefined> {
  const docPath = path.resolve(`./docs/${section}/${slug}.mdx`);

  const docExists = fs.existsSync(docPath);
  
  console.log({docPath, docExists})

  if (!docExists) {
    return undefined;
  }

  const mdxResult = await bundleMDX({ file: docPath });

  return {
    title: mdxResult.frontmatter.meta.title,
    description: mdxResult.frontmatter.meta.description,
    code: mdxResult.code,
  };
}
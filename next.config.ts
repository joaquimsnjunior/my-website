/* eslint-disable */
import createMDX from '@next/mdx';
import type { NextConfig } from 'next';
import remarkGfm from 'remark-gfm';



const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  remarkPlugins: [remarkGfm],
  rehypePlugins: [],
});

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  typedRoutes: true,
  experimental: {
    viewTransition: true,
    reactCompiler: true,
  },
};

export default withMDX(nextConfig);
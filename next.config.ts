import type { NextConfig } from 'next';
import path from 'path';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  // @swc/helpers/esm/* files are resolved via the package's `exports` field,
  // which @vercel/nft (Next.js file tracer) doesn't follow. Without this,
  // the Lambda bundle ships the package root but omits the esm/ subdirectory,
  // causing a MODULE_NOT_FOUND crash at cold start.
  outputFileTracingIncludes: {
    '/**': ['./node_modules/@swc/helpers/**'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: '*.cloudfront.net',
      },
    ],
  },
};

export default withNextIntl(nextConfig);

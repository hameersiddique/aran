import type { NextConfig } from "next";
import { withNextVideo } from "next-video/process";

const nextConfig: NextConfig = {
  /* Image optimization configuration */
  images: {
    // Modern image formats for better compression
    formats: ["image/avif", "image/webp"],

    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],

    // Image sizes for different use cases
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Cache optimized images for 60 seconds
    minimumCacheTTL: 60,

    // Disable image optimization during development for faster builds
    // unoptimized: process.env.NODE_ENV === "development" ? false : false,
    unoptimized: false,

    // External image sources configuration
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
    ],
  },

  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Compiler options for better performance
  // compiler: {
  //   // Remove console logs in production
  //   removeConsole:
  //     process.env.NODE_ENV === "production"
  //       ? {
  //           exclude: ["error", "warn"],
  //         }
  //       : false,
  // },

  // Experimental features for better performance
  experimental: {
    // Optimize package imports
    optimizePackageImports: [
      "@mui/material",
      "@mui/icons-material",
      "lucide-react",
    ],
  },

  // Webpack configuration for video optimization
  webpack: (config, { isServer }) => {
    // Handle video files
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mov)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/videos/",
            outputPath: `${isServer ? "../" : ""}static/videos/`,
            name: "[name].[hash].[ext]",
          },
        },
      ],
    });

    return config;
  },
};

export default withNextVideo(nextConfig);

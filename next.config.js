// module.exports = async (phase, { defaultConfig }) => {
//   /**
//    * @type {import('next').NextConfig}
//    */
//   const nextConfig = {
//     eslint: {
//       ignoreDuringBuilds: true
//     },
//     images: {
//       // domains: ['res.cloudinary.com'],
//       unoptimized: true
//     }
//   }
//   return nextConfig
// }


module.exports = {
  future: {
    webpack5: true
  },
  webpack: (config) => {
    // load worker files as a urls with `file-loader`
    config.module.rules.unshift({
      test: /pdf\.worker\.(min\.)?js/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[contenthash].[ext]",
            publicPath: "_next/static/worker",
            outputPath: "static/worker"
          }
        }
      ]
    });

    return config;
  }
};
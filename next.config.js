const path = require('path')
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[name]__[local]___[hash:base64:5]",
  },
  target: 'serverless',

  webpack: (config, options) => {
    config.resolve.alias['Components'] = path.join(__dirname, 'components')
    config.resolve.alias['Src'] = path.join(__dirname)

    config.node = {
      fs: 'empty'
    }

    return config
  }
})

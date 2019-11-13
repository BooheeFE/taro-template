// eslint-disable-next-line
module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  weapp: {},
  h5: {
    devServer: {
      inline: true,
      hot: true,
      host: '0.0.0.0',
      historyApiFallback: true,
      open: 'Google Chrome',
      port: 1024
    }
  }
}

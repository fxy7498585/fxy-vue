module.exports = {
  //  区分打包环境与开发环境
  publicPath: process.env.NODE_ENV === 'production'
  ? 'http://www.fxy-done.cn'
  : 'http://localhost:8080',

  devServer: {
    proxy: {
      '/api': {
        target: process.env.NODE_ENV === 'production' ? 'https://www.fxy-top.top' : 'https://localhost:3000',
        ws: true,
        changeOrigin: true
      }
    }
  },
}
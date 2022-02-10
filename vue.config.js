const path = require('path')
module.exports = {
  // 打包文件输出的文件夹 默认是dist
  // outputDir: './build',
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       views: '@/views'
  //     }
  //   }
  // },
  configureWebpack: (config) => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src'),
      views: '@/views'
    }
  },
  devServer: {
    proxy: 'http://123.207.32.32'
  }
  // chainWebpack: (config) => {
  //   config.resolve.alias.set('@', path.resolve(__dirname, 'src')).set('views', '@/views')
  // }
}

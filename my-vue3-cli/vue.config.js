const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  // 部署应用包时的基本URL
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  
  // 开发服务器配置
  devServer: {
    port: 8000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  
  // webpack配置
  configureWebpack: {
    // 性能提示
    performance: {
      hints: false
    },
    // 优化配置
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 20000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        automaticNameDelimiter: '~',
        enforceSizeThreshold: 50000,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      }
    }
  },
  
  // 链式配置
  chainWebpack: config => {
    // 设置别名
    config.resolve.alias
      .set('@', require('path').resolve(__dirname, 'src'))
      .set('@components', require('path').resolve(__dirname, 'src/components'))
      .set('@assets', require('path').resolve(__dirname, 'src/assets'))
  }
}) 
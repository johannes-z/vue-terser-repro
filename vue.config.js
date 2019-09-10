module.exports = {
  runtimeCompiler: true,
  chainWebpack: config => {
    config.resolve.symlinks(false)
    config.externals({
      vue: 'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js'
    })
  }
}

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pages: {
    login: {
      // entry for the page
      entry: 'src/main.js',
      // the source template
      template: 'public/login.html',
      // output as dist/index.html
      filename: 'login.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Login',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'login']
    }
  }
}

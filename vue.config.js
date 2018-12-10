module.exports = {
  test: /\.scss$/,
  use: [
    'vue-style-loader',
    'css-loader'
    {
      loader: 'sass-loader',
      options: {
        indentedSyntax: true,
        data: `
          @import "@/assets/styles/sass/main.scss";
        `
      }
    }
  ]
};

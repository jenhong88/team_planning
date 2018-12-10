const path = require("path");

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
  ],
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./assets/styles/sass/main.scss")]
    }
  }
};

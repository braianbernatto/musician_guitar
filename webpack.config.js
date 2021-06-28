const path = require("path")

const postCSSPlugins = [require("postcss-simple-vars"), require("postcss-nested"), require("autoprefixer")]

module.exports = {
  entry: "./app/assets/scripts/app.js",
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "app")
  },
  mode: "development",
  watch: true,
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader?url=false",
          // Compiles Sass to CSS
          "sass-loader",
          { loader: "postcss-loader", options: { postcssOptions: { plugins: postCSSPlugins } } }
        ]
      }
    ]
  }
}
module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: { filename: 'bundle.js' },
  devServer: {
    hot: true,
    port: 3000
  },
  module: {
    rules: [
      { test: /\.ts/, use: 'ts-loader' },
      {
        test: /\.css|scss|sass$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { url: false } },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  }
}

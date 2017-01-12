module.exports = {
  entry: './src/app.jsx',
  output: {
    path:__dirname,
    filename: './public/bundle.js'
  },
  module: {
    loaders: [
      {
        loader:'babel-loader',
        query:{
          presets:['react', 'es2015']// cai dat de doc dc syntax JSX trong ReactJS, syntax es2015
        },
        test:/\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  }
}

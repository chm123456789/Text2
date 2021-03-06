const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = function(env,argv) {
    const isEnvDevelopment = argv.mode === 'development' || !argv.mode;
    const isEnvProduction = argv.mode === 'production';
    const webpack =require('webpack');

    return{
        mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',
        devtool: isEnvProduction ? 'source-map' : isEnvDevelopment && 'cheap-module-source-map',
        entry: './src/index.jsx',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    devServer:{
        contentBase: './dist',
        hot:true,
    },
    module:{
        rules:[{
            test: /\.jsx$/,
            exclude: /node_modules/,
            enforce: "pre",
            use: 'babel-loader'

        },
        {
        
       test: /\.css$/,
       use: [
      'style-loader',
       'css-loader'
       ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
        },
        {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
        loader: "url-loader",
        options: {
            limit: 10000
        }
        }
        

   
    ]
        
    },
    plugins: [
        new HtmlWebpackPlugin({
             template:"public/index.html"
            }),
        new webpack.NamedChunksPlugin(),
        new webpack.HotModuleReplacementPlugin()
        ]
    };
};
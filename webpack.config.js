const path = require('path')

module.exports = function(env,argv){
    const isEnvDevelopment = argv.mode === 'development' || !argv.mode;
    const isEnvProduction = argv.mode === 'production';

    return{
        mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',
        devtool: isEnvProduction ? 'source-map' : isEnvDevelopment && 'cheap-module-source-map',
        entry: './src/index.jsx',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    devSever:
    {
        contentBase: './dist',
    },
  plugins:[
      new HtmlWebpackPlugin(
          {
              template:"public/index.html"
          }
      )
  ]
};
}
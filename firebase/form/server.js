
import express from 'express';
import webpack from 'webpack';
import middleware from 'webpack-dev-middleware';
// import webpackHotMiddleware from 'webpack-hot-middleware';

const app = express();
import config from './webpack.config.babel.js';
const compiler = webpack(config);
// console.log('server env = ',process.env.npm_config_env);

const isDevelopment = process.env.npm_config_env === 'development';
if(isDevelopment){
    app.use(middleware(compiler,{
        publicPath : config.output.publicPath
    }));
    // app.use(webpackHotMiddleware(compiler))
}
else {
    app.use(express.static(__dirname + '/dist'));
}

//serve the files on port 5001
/* eslint-disable no-console */
app.listen(5001, () => {
    console.log('server started at port 5001');
});
/**
 * Created by Administrator on 2017/5/9.
 */
let path = require('path');
let webpack = require("webpack");
// 是否是开发环境
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, './../src');
var DIST_PATH = path.resolve(ROOT_PATH, './../dist');


module.exports = {
    entry:[
        `${APP_PATH}/App.jsx`
    ] ,
    output: {
        path: DIST_PATH,
        filename: 'js/main.js',
    },
    module:{
        loaders:[
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                loaders:['react-hot-loader','babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-1']
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
    },
    plugins:[new HtmlwebpackPlugin({
        title: 'Hello World app',
        template:'template/index.html'
    })],
    devtool:"#source-map"
};
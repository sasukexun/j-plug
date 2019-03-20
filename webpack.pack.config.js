var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin=require("html-webpack-plugin");
var autoprefixer = require('autoprefixer');
var WebpackDevServer = require("webpack-dev-server");
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var d = new Date();
var vYear = d.getFullYear();
var vMon = d.getMonth() + 1;
var vDay = d.getDate();
var h = d.getHours();
var m = d.getMinutes();
var se = d.getSeconds();
datestr = vYear + "-" + (vMon < 10 ? "0" + vMon : vMon) + "-" + (vDay < 10 ? "0" + vDay : vDay);


module.exports = {
    entry: {
        "all":"./dist/js/all",
        "jquery":"./dist/js/jquery",
        "stepBar":"./dist/js/stepBar",
        "spillover":"./dist/js/spillover",
        "share":"./dist/js/share",
        "slider":"./dist/js/slider"
    },
    output: {
        path:path.resolve(__dirname,"build/pack"),
        filename:"[name].js",
        publicPath:"./../build/pack/"
    },
    module: {
        rules:  [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
            {test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=800'}
        ]
    },
    plugins: [
        new webpack.BannerPlugin('This file is created by sasukexun'+datestr),
        new UglifyJsPlugin,
        new webpack.HotModuleReplacementPlugin()
    ]
};


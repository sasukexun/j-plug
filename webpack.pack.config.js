var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin=require("html-webpack-plugin");
var autoprefixer = require('autoprefixer');
var WebpackDevServer = require("webpack-dev-server");
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
    entry: {
        "jquery":"./dist/js/jquery",
        "stepBar":"./dist/js/stepBar",
        "spillover":"./dist/js/spillover"
    },
    output: {
        path:path.resolve(__dirname,"build/"),
        filename:"[name].js",
        publicPath:"../"
    },
    module: {
        rules:  [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
            {test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=40000'}
        ]
    },
    plugins:[
        // 每个成员代表一个插件
        new webpack.BannerPlugin('This file is created by sasukexun'),
        new UglifyJsPlugin
    ]
    // plugins: [
    //    new webpack.BannerPlugin('This file is created by sasukexun'),
    //     new webpack.HotModuleReplacementPlugin(),
    //     new HtmlWebpackPlugin({
    //         title: "测试页面",
    //         hash:true,
    //         minify: false,
    //         template: 'dist/page/stepBar.html',
    //         filename: './dest/stepBar.html',
    //         chunks:['jquery','stepBar'],
    //         //实现排序
    //         chunksSortMode:  function (chunk1, chunk2) {
    //             var order = ['jquery','stepBar'];
    //             var order1 = order.indexOf(chunk1.names[0]);
    //             var order2 = order.indexOf(chunk2.names[0]);
    //             return order1 - order2;
    //         }
    //     })
    // ],
    // devServer: {
    //     historyApiFallback: true,
    //     hot: true,
    //     open: true,
    //     inline: true,
    //     port: 8080,
    //     proxy: {
    //         '/list': {
    //             target: 'http://127.0.0.1:8080/json',
    //             pathRewrite: {'^/column' : '/column'},
    //             changeOrigin: true
    //         }
    //     }
    // }
};



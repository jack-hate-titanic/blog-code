/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2024-05-20 23:10:15
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2024-05-20 23:10:24
 * @FilePath: /blog-code/react/buildOwnReact/webpack.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
    mode: "development",
    // 入口
    entry: path.join(__dirname, "/src/index.js"),
    // 出口
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.[hash:8].js",
    },
    module: {
        rules: [
            {
            // 对以js结尾的文件进行es6转es5
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        // html生成插件
        new HtmlWebpackPlugin({
           // 生成html参考的模板
            template: "./src/index.html",
        }),
    ],
    // 服务器
    devServer: {
        static: path.join(__dirname, "/dist"),
        open: true,
    },
};

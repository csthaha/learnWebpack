// 引入 路径 模块
const path = require('path');

// npm i html-webpack-plugin 
// 指定 template 模板，将会在 output 目录下，生成html 文件，并引入打包后的 js 文件
const HtmlWebpackPlugin = require('html-webpack-plugin');

// npm i clean-webpack-plugin --save-dev
// 使用 clean-webpack-plugin 清除打包后生成的 dist 文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    // 多入口文件
    entry: {
        app: './src/app.js',
    },
    // 出口文件 (与文件名对应)
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash].js',
        //对文件进行缓存
        chunkFilename: '[name].[chunkhash].js'
    },
    //环境
    // mode: "development",
    // loader 配置
    module: {
        rules: [
            // 解析 es6 react
            {
                test: /.js$/,
                // 不匹配 node_modules
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ],
                        // 配置 插件
                        plugins: [
                            // antd 的按需引入
                            ["import", { "libraryName": "antd", "style": "css" }]
                        ]
                    }
                }
            },
            // 解析 css
            {
                test: /.css$/,
                // 如果引入 antd ，那么 需要讲 antd 的样式排除
                exclude: /node_modules/,
                // 顺序不能反，链式调用，从后往前
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            // 解析 less
            {
                test: /.less$/,
                exclude: /node_moudles/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            //  antd 样式处理，注意点，要将自己的样式 排除在外
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                        }
                    }
                ],
                exclude: /styles/
            },
            // 解析加载 图片
            {
                test: /\.(gif|png|jpg|svg|)$/,
                exclude: /node_moudles/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,   //限制打包图片的大小
                            publicPath: '/', 
                            name:'images/[name]-[hash:8].[ext]',    //images：图片打包的文件夹
                            //[hash:8]  加上hash 值的前八位作为图片名，可以避免重名
                        }
                    },
                ]
            }
        ]
    },
    // plugin
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/app.html')
        }),
        new CleanWebpackPlugin()
    ],
}
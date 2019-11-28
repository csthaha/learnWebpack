// npm i webpack-merge --save-dev，merge 合并配置文件
const merge = require('webpack-merge');

// 引入 公共配置
const common = require('./webpack.common');

module.exports = merge(common,{
    mode: "production",
})
## webpack 坑点记录
- entry 文件路口的路径
entry 中的路径就是工作区的路径，不要误以为文件的当前路径
所以 webpack.common.js 配置的 entry: './src/app.js'
- output 打包后文件的路径
指的是当前文件的运行文件
所以 webpack.common.js 中配置的 output: {path: path.resovle(__dirname, '../dist')}
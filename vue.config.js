// const myurl = 'http://172.168.20.193:8080'
// const myurl = 'https://t2.api.matefix.cn'
// const myurl = 'https://test.api.matefix.cn'
const myurl = "http://172.168.20.206:8080";
module.exports = {
  publicPath: "/", //基本路径
  outputDir: "dist", //构建时的输出目录
  assetsDir: "static", //防止静态资源的目录
  productionSourceMap: false,
  devServer: {
    open: false,
    // host: 'localhost',
    host: "0.0.0.0",
    port: 8010,
    https: false,
    hotOnly: false,
    disableHostCheck: true,
    proxy: {
      "/introduce": {
        target: myurl,
        ws: true,
        changOrigin: true,
        pathRewrite: {
          "^/introduce": "",
        },
      },
    },
  },
};

module.exports = {
  devServer: {
    proxy: {
      '/server': {
        target: 'http://api.biggodw.cn',
        ws: true,
        changeOrigin: true,
        pathRewrite:{
					'^/server':''  //通过该属性匹配对应请求使用的url
 				}
      }
  }
}}
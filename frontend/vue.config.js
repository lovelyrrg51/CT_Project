module.exports = {
    runtimeCompiler: true,
    productionSourceMap: false,

    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/',

    // devServer: {
    //     proxy: 'http://192.168.1.112:3808'
    // }
}
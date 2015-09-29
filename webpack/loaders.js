var path = require('path');
var pkg = require('../package.json');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var DEBUG = process.env.NODE_ENV === 'development';
var TEST = process.env.NODE_ENV === 'test';

var jsxLoader;
var sassLoader;
var lessLoader;
var cssLoader;
var fileLoader = 'file-loader?name=[path][name].[ext]';
var htmlLoader = [
    'file-loader?name=[path][name].[ext]',
    'template-html-loader?' + [
        'raw=true',
        'engine=lodash',
        'version=' + pkg.version,
        'title=' + pkg.name,
        'debug=' + DEBUG
    ].join('&')
].join('!');
var jsonLoader = ['json-loader'];

var sassParams = [
    'outputStyle=expanded',
    'includePaths[]=' + path.resolve(__dirname, '../app/scss'),
    'includePaths[]=' + path.resolve(__dirname, '../node_modules'),
    "includePaths[]=" + path.resolve(__dirname, "../app/semantic/dist/components")
];

if (DEBUG || TEST) {
    jsxLoader = [];
    if (!TEST) {
        jsxLoader.push('react-hot');
    }
    jsxLoader.push('babel-loader?optional[]=runtime&stage=0&plugins=rewire');
    sassParams.push('sourceMap', 'sourceMapContents=true');
    sassLoader = [
        'style-loader',
        'css-loader?sourceMap',
        // 'postcss-loader',
        // 'resolve-url',
        'sass-loader?' + sassParams.join('&')
    ].join('!');
    lessLoader = [
        'style-loader',
        'css-loader?sourceMap',
        // 'postcss-loader',
        // 'resolve-url',
        'less?source-map'
    ].join('!');
    cssLoader = [
        'style-loader',
        'css-loader?sourceMap',
        // 'postcss-loader',
        // 'resolve-url'
    ].join('!');
    console.log(lessLoader);
} else {
    jsxLoader = ['babel-loader?optional[]=runtime&stage=0&plugins=rewire'];
    sassLoader = ['style-loader',
        'css-loader',
        // 'postcss-loader',
        // 'resolve-url',
        'sass-loader?' + sassParams.join('&')
    ].join('!');
    lessLoader = ['style-loader',
        'css-loader?sourceMap',
        // 'postcss-loader',
        // 'resolve-url',
        'less'
    ].join('!');
    cssLoader = ['style-loader',
        'css-loader',
        // 'postcss-loader',
        // 'resolve-url'
    ].join('!');
}

var loaders = [{
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loaders: jsxLoader
}, {
    test: /\.css$/,
    loader: cssLoader
}, {
    test: /\.jpe?g$|\.gif$|\.png$|\.ico|\.svg$|\.woff$|\.ttf$/,
    loader: fileLoader
}, {
    test: /\.json$/,
    // exclude: /node_modules/,
    loaders: jsonLoader
}, {
    test: /\.html$/,
    loader: htmlLoader
}, {
    test: /\.scss$/,
    loader: sassLoader
}, {
    test: /\.less$/,
    loader: lessLoader
}, {
    test: /\.(png|eot|woff2|woff|ttf|svg)$/,
    loader: 'file'
}];

module.exports = loaders;

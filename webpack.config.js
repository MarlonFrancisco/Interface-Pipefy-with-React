const path = require("path");

module.exports = () => {
    const isProduction = process.env.NODE_ENV == 'production';

    return {
        mode: isProduction ? 'production' : 'development',
        entry: './lib/index.tsx',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        watchOptions: {
            poll: true
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js", ".scss"]
        },
        module: {
            rules: [
                {
                    test: /\.tsx$/,
                    use: 'babel-loader'
                }
            ]
        },
        devServer: {
            index: 'index.html',
            contentBase: path.resolve(__dirname, 'dist'),
            historyApiFallback: false
        }
    }
}
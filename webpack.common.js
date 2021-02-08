const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.[contentHash].js"
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        open: true,
        overlay: {
            warnings: true,
            errors: true
        }


    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            // title: 'mealzy',
            // myPageHeader: 'your meal assistant',
            template: "./src/index.html",
            filename: "index.html"
        })
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: [{
                        loader: "style-loader" //inject styles into dom
                    },
                    {
                        loader: "css-loader" //turns css into commonjs
                    }
                ]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            // {
            //     test: /\.(svg|png|jpg|jpeg|gif)$/,
            //     use: {
            //         loader: "file-loader",
            //         options: {
            //             name: "[name].[hash].[ext]",
            //             outputPath: "images"
            //         }
            //     }
            // },


            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ["@babel/preset-env"]
                }
            }
        ]
    },


};
const path = require("path");

module.exports = {
    module: {
        rules: [
            {
                test: [/\.stories\.js?$/,/\.scss$/, /\.(png|jpg|gif)$/],
                use: [{
                        loader: require.resolve('@storybook/addon-storysource/loader'),
                            options: {
                            prettierConfig: {
                                printWidth: 80,
                                singleQuote: false
                            }
                        }
                    },
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
                exclude: /node_modules/,
                include: path.resolve(__dirname, "../"),
                enforce: 'pre'
            }
        ]
    }
};
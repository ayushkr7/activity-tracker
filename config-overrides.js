// const webpack = require("webpack");
// module.exports = function override(config) {
//     const fallback = config.resolve.fallback || {};
//     Object.assign(fallback, {
//         crypto: require.resolve("crypto-browserify"),
//         stream: require.resolve("stream-browserify"),
//         assert: require.resolve("assert"),
//         http: require.resolve("stream-http"),
//         https: require.resolve("https-browserify"),
//         os: require.resolve("os-browserify"),
//         url: require.resolve("url"),
//     });
//     config.resolve.fallback = fallback;
//     config.plugins = (config.plugins || []).concat([
//         new webpack.ProvidePlugin({
//             process: "process/browser",
//             Buffer: ["buffer", "Buffer"],
//         }),
//     ]);
//     return config;
// };

// // "scripts": {
// //   "start": "react-scripts start",
// //   "build": "react-scripts build",
// //   "test": "react-scripts test",
// //   "eject": "react-scripts eject"
// // },

const webpack = require("webpack");

module.exports = function override(config) {
    const fallback = config.resolve.fallback || {};
    Object.assign(fallback, {
        crypto: false, // require.resolve("crypto-browserify") can be polyfilled here if needed
        stream: false, // require.resolve("stream-browserify") can be polyfilled here if needed
        assert: false, // require.resolve("assert") can be polyfilled here if needed
        http: false, // require.resolve("stream-http") can be polyfilled here if needed
        https: false, // require.resolve("https-browserify") can be polyfilled here if needed
        os: false, // require.resolve("os-browserify") can be polyfilled here if needed
        url: false, // require.resolve("url") can be polyfilled here if needed
        zlib: false, // require.resolve("browserify-zlib") can be polyfilled here if needed
    });
    config.resolve.fallback = fallback;
    config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
            process: "process/browser",
            Buffer: ["buffer", "Buffer"],
        }),
    ]);
    config.ignoreWarnings = [/Failed to parse source map/];
    config.module.rules.push({
        test: /\.(js|mjs|jsx)$/,
        enforce: "pre",
        loader: require.resolve("source-map-loader"),
        resolve: {
            fullySpecified: false,
        },
    });
    return config;
};
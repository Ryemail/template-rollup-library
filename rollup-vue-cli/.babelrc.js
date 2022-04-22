module.exports = {
    presets: [
        [
            '@babel/preset-typescript',
            '@babel/preset-env',
            {
                modules: false,
                targets: {
                    browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'not ie 11'],
                },
            },
        ],
    ],
    env: {
        umd: {
            plugins: [],
        },
        development: {
            plugins: [['@babel/plugin-transform-runtime', '@babel/plugin-transform-typescript']],
        },
        production: {
            plugins: [['@babel/plugin-transform-runtime', '@babel/plugin-transform-typescript']],
        },
    },
};

module.exports = {
    plugins: [
        require('postcss-cssnext')({
            warnForDuplicates: false,
            features: {
                rem: {
                    html: false
                },
                calc: false
            }
        }),
        require('postcss-animation')(),
        require('postcss-fixes')({ preset: 'safe' })
    ]
};

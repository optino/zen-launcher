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
        require('postcss-fixes')({ preset: 'safe' }),
        require('doiuse')({
            ignore: [
                'rem',              // ok
                'viewport-units',   // only vmax is not supported in ie11
                'transforms2d',     // ok
                'css-animation',    // ok
                'css-transitions',  // ok
                'border-radius',    // ok
                'css-boxshadow',    // ok
                'user-select-none', // mobile browsers have some issues with it, it's ok
                'pointer-events',   // ok
                'css-appearance',   // it does not matter
                'css-fixed',        // ok
                'outline',          // ie11 has only partial support of it
                'css-gradients',    // ok
                'will-change',      // some browsers are not support it, it's ok
                'css-textshadow',   // ok
                'css-resize',       // ?
                'object-fit',       // muilessium uses polyfill
                'calc'              // if browser doesn't support viewport units in calc, it's not very horrible
            ]
        })
    ]
};

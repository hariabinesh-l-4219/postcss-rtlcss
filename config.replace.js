module.exports = {
    files: 'index.d.ts',
    from: /declare namespace[^}]*\}[^}]*\};/g,
    to: '\nexport = postcssRTLCSS',
};
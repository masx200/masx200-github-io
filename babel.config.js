module.exports = {
    plugins: [
        [
            "styled-jsx/babel",
            { sourceMaps: true, plugins: ["styled-jsx-plugin-postcss"] },
        ],
    ],
};

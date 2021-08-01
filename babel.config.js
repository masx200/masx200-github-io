module.exports = function (api) {
    return {
        plugins: [
            [
                "styled-jsx/babel",
                {
                    sourceMaps: api.env("development"),
                    plugins: ["styled-jsx-plugin-postcss"],
                },
            ],
        ],
    };
};

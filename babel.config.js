module.exports = function (api) {
    return {
        presets: [],
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
//https://github.com/vercel/styled-jsx/issues/711#issuecomment-806852789

module.exports = {
    presets: ["@babel/env", ["@babel/typescript", { jsxPragma: "h" }], "next/babel", "linaria/babel"],
    plugins: [
        [
            "@babel/plugin-transform-react-jsx",
            {
                "runtime": "automatic",
                "importSource": "preact"
            }
        ]
    ],
};
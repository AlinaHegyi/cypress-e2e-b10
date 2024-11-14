// import globals from "globals";
// import pluginJs from "@eslint/js";

//eslint.config.js
export default [
  {
    rules: {
      indent: ["error", 2],
      "no-unused-vars": "error",
      semi: ["error"],
      quotes: ["error", "single"],
      "max-len": [
        "error",
        { code: 120, ignoreComments: true, ignoreStrings: true },
      ],
    },
  },
];

// module.exports = [
//   {
//       rules: {
//         indent: ["error" 2],
//           semi: "error",
//           "prefer-const": "error"
//       }
//   }
// ];

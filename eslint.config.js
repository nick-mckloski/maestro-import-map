// @ts-check
import eslint from "@eslint/js";
import tsEslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";

export default tsEslint.config(
    globalIgnores([
        "**/generated_docs/**",
        "**/public/**",
        "**/dist/**",
    ]),
    eslint.configs.recommended,
    tsEslint.configs.recommended,
    {
        files: ["**/*.config.ts"],
        rules: {
            "@typescript-eslint/triple-slash-reference": "off",
        },
    },
);

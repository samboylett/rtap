import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import excludeDependenciesFromBundle from "rollup-plugin-exclude-dependencies-from-bundle";
import packageJson from "./package.json" assert { type: 'json' };

const config = [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript(),
      excludeDependenciesFromBundle({
        peerDependencies: true,
        dependencies: true,
      }),
    ],
  },
];

export default config;

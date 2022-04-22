import path from "path";

// rollup babel转换
import babel from "@rollup/plugin-babel";

// 在node 模块中查找第三方依赖项
import resolve from "@rollup/plugin-node-resolve";

// 代码优化，如压缩、混淆
import { terser } from "rollup-plugin-terser";

// 注册环境变量
import replace from "@rollup/plugin-replace";

// 获取环境;
const NODE_ENV = process.env.NODE_ENV;

//  判断是否是开发环境
const isProd = function () {
    return NODE_ENV === "umd";
};

const plugins = [
    replace({
        "process.env.NODE_ENV": NODE_ENV,
        preventAssignment: true,
    }),
    isProd() && terser({ compress: { drop_console: true } }),
];

export default {
    input: "./src/index.js",
    output: {
        file: "dist/index.js",
        format: "umd", // umd
        exports: "named",
        name: "Lib",
    },
    plugins: [
        ...plugins,
        babel({
            babelHelpers: "bundled",
            exclude: ["node_modules/**"],
        }),
    ],
};

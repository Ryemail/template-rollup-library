// 解决commonjs模块转为es6 模块
import commonjs from '@rollup/plugin-commonjs';

// 在node 模块中查找第三方依赖项
import resolve from '@rollup/plugin-node-resolve';

// rollup babel转换
import babel from '@rollup/plugin-babel';

// 将json 转为 es6模块
import json from '@rollup/plugin-json';

// 代码优化，如压缩、混淆
import { terser } from 'rollup-plugin-terser';

//  代码格式化
import prettier from 'rollup-plugin-prettier';

// 开启本地服务
import serve from 'rollup-plugin-serve';

// 热更新
import livereload from 'rollup-plugin-livereload';

// 注册环境变量
import replace from '@rollup/plugin-replace';

// eslint
import eslint from '@rollup/plugin-eslint';

//  ts 配置
import typescript from '@rollup/plugin-typescript';

// 获取环境;
const NODE_ENV = process.env.NODE_ENV;

//  判断是否是开发环境
const isProd = function () {
    return NODE_ENV === 'production';
};

// const resolveFile = function (filePath) {
//     return path.join(__dirname, "..", filePath);
// };

const devPlugin = () => {
    if (isProd()) return [];

    // 开发环境所需插件
    return [
        livereload({
            watch: ['src'],
        }),
        serve({
            open: true,
            contentBase: '',
            openPage: '/public/index.html',
        }),
    ];
};

const plugins = [
    json(),
    resolve(),
    commonjs(),
    prettier(),
    eslint(),
    typescript({ tsconfig: './tsconfig.json' }),
    replace({
        'process.env.NODE_ENV': NODE_ENV,
        preventAssignment: true,
    }),
    // isProd() && terser({ compress: { drop_console: true } }),

    ...devPlugin(),
];

export default {
    input: {
        main: './src/main.ts',
        test: './src/test.ts',
    },
    output: [
        {
            dir: 'lib',
            format: 'cjs', // cjs
            exports: 'named',
        },
        {
            dir: 'es',
            format: 'esm', // esm
            exports: 'named',
        },
    ],
    watch: {
        exclude: 'node_modules/**',
    },
    plugins: [
        ...plugins,
        babel({
            babelHelpers: 'runtime',
            exclude: ['node_modules/**'],
        }),
    ],
};

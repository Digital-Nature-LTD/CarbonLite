import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default [
    // ESM build
    {
        input: 'src/CarbonLite.ts',
        output: {
            file: 'dist/carbon-lite.esm.js',
            format: 'esm',
            sourcemap: true,
        },
        plugins: [resolve(), commonjs(), typescript({ tsconfig: './tsconfig.json' })],
    },
    // CommonJS build
    {
        input: 'src/CarbonLite.ts',
        output: {
            file: 'dist/carbon-lite.cjs.js',
            format: 'cjs',
            sourcemap: true,
        },
        plugins: [resolve(), commonjs(), typescript({ tsconfig: './tsconfig.json' })],
    },
    // UMD build
    {
        input: 'src/CarbonLite.ts',
        output: {
            file: 'dist/carbon-lite.umd.js',
            format: 'umd',
            name: 'CarbonLite', // <-- This is the global variable exposed in browsers
            sourcemap: true,
        },
        plugins: [resolve(), commonjs(), typescript({ tsconfig: './tsconfig.json' })],
    },
    // UMD build with auto-config
    {
        input: 'src/carbon-lite-props.js',
        output: {
            file: 'dist/carbon-lite-auto.umd.js',
            format: 'umd',
            name: 'CarbonLite', // <-- This is the global variable exposed in browsers
            sourcemap: true,
        },
        plugins: [resolve(), commonjs(), typescript({ tsconfig: './tsconfig.json' })],
    }
];
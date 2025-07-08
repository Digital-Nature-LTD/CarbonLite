import typescript from '@rollup/plugin-typescript';

export default [
    // ESM build
    {
        input: 'src/CarbonLite.ts',
        output: {
            dir: 'dist/esm',
            format: 'esm',
            sourcemap: true,
            preserveModules: true,
            preserveModulesRoot: 'src'
        },
        plugins: [
            typescript({
                tsconfig: './tsconfig.json',
                // IMPORTANT: Do NOT emit declarations here
                declaration: false,
                emitDeclarationOnly: false
            })
        ],
        external: []
    },
    // CJS build
    {
        input: 'src/CarbonLite.ts',
        output: {
            dir: 'dist/cjs',
            format: 'cjs',
            sourcemap: true,
            preserveModules: true,
            preserveModulesRoot: 'src'
        },
        plugins: [
            typescript({
                tsconfig: './tsconfig.json',
                declaration: false,
                emitDeclarationOnly: false
            })
        ],
        external: []
    },
    // UMD build (single file)
    {
        input: 'src/CarbonLite.ts',
        output: {
            file: 'dist/umd/carbonlite.js',
            format: 'umd',
            name: 'CarbonLite',
            sourcemap: true
        },
        plugins: [
            typescript({
                tsconfig: './tsconfig.json',
                declaration: false,
                emitDeclarationOnly: false
            })
        ],
        external: []
    },
    // UMD build (auto start file)
    {
        input: 'src/CarbonLiteSimple.js',
        output: {
            file: 'dist/umd/carbonlite-simple.js',
            format: 'umd',
            name: 'CarbonLite',
            sourcemap: true
        },
        plugins: [
            typescript({
                tsconfig: './tsconfig.json',
                declaration: false,
                emitDeclarationOnly: false
            })
        ],
        external: []
    }
];
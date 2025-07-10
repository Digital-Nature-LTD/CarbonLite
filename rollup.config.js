import typescript from '@rollup/plugin-typescript';

export default [
    // ESM build
    {
        input: 'src/CarbonLite.ts',
        output: {
            dir: 'dist',
            format: 'esm',
            sourcemap: true,
            preserveModules: true,
            preserveModulesRoot: 'src',
            entryFileNames: '[name].mjs',
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
    // UMD build (single file)
    {
        input: 'src/CarbonLite.ts',
        output: {
            file: 'dist/CarbonLite.js',
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
            file: 'dist/CarbonLiteSimple.js',
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
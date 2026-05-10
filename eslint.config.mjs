import coreWebVitals from 'eslint-config-next/core-web-vitals';
import typescriptConfig from 'eslint-config-next/typescript';

const config = [
    ...coreWebVitals,
    ...typescriptConfig,
    {
        ignores: [
            '.next/**',
            '.velite/**',
            'node_modules/**',
            'public/static/**',
        ],
    },
];

export default config;

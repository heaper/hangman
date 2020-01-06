const rollup = require('rollup');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const replace = require('rollup-plugin-replace');

const inputOptions = {
    input: 'src/scripts/index.js',
    plugins: [
        replace({
            ENVIRONMENT: () => JSON.stringify(process.env.NODE_ENV || 'development'),
            'process.env.NODE_ENV': () => JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        babel({
            babelrc: false,
            presets: [
                [
                    '@babel/preset-env',
                    {
                        modules: false,
                        targets: {
                        esmodules: true
                        }
                    }
                ]
            ],
            plugins: [
                "@babel/plugin-transform-react-jsx"
            ],
        }),
        resolve(),
        commonjs({
            include: 'node_modules/**',
            namedExports: {
                'node_modules/react/index.js': [
                    'Component', 
                    'PureComponent', 
                    'Fragment', 
                    'Children', 
                    'createElement', 
                    'cloneElement', 
                    'createContext',
                    'useState',
                    'useEffect',
                    'useRef',
                    'useReducer',
                    'forwardRef'
                ],
                'node_modules/react-dom/index.js': [
                    'render'
                ],
                'node_modules/react-is/index.js': [
                    'isValidElementType'
                ]
            }
        })
    ]
};

const outputOptions = {
    file: 'dist/scripts/hangman.js',
    format: 'esm'
};

async function buildScripts() {
    let bundle;

    try {
        bundle = await rollup.rollup(inputOptions);
    }
    catch(error) {
        console.log(error);
        return;
    }

    await bundle.write(outputOptions);

    console.log('Scripts built.');
}

module.exports = buildScripts;
const postcss = require('postcss');
const fs = require('fs-extra');
const path = require('path');

const srcFile = 'src/styles/styles.css';
const destFile = 'dist/styles/styles.css';

async function buildStyles() {
    const css = await fs.readFile(srcFile);

    let result;

    try {
        result = await postcss([ require('postcss-easy-import') ])
                .process(css, { from: srcFile, to: destFile });
    } catch(error) {
        console.log(error);
        return;
    }

    await fs.ensureDir(path.dirname(destFile));
    await fs.writeFile(destFile, result.css);

    console.log('Styles built.');
}

module.exports = buildStyles;
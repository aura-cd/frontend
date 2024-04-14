import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, join, dirname } from 'path';

/**
 * timestampPlugin
 * 書き出したindex.htmlにビルド日時を埋め込むためのプラグイン
 */
const timestampPlugin = () => {
  const modifyPath = (path) => path.replace(/^file:\/\//, '').replace(/\/timestampPlugin\.js$/, '');

  const path = dirname(import.meta.url) ?? '';
  const buildDir = resolve(modifyPath(path), 'dist');
  const indexPath = join(buildDir, 'index.html');

  return {
    name: 'timestamp-plugin',
    closeBundle() {
      if (existsSync(indexPath)) {
        let htmlContent = readFileSync(indexPath, 'utf-8');
        const timestampJST = JSON.stringify(
          new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })
        );
        htmlContent = htmlContent.replace(
          `<!DOCTYPE html>`,
          `<!-- Build time: ${timestampJST} -->\n<!DOCTYPE html>`
        );
        writeFileSync(indexPath, htmlContent);
      }
    },
  };
};

export default timestampPlugin;

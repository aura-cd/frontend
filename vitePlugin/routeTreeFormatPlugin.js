import { exec } from 'child_process';
import { normalize } from 'path';

/**
 * routeTreeFormatPlugin
 * 生成されるrouteTree.gen.tsをフォーマットするためのプラグイン
 */
const routeTreeFormatPlugin = (targetPath) => {
  return {
    name: 'routeTreeFormatPlugin',
    handleHotUpdate: async ({ file }) => {
      const fileName = normalize(file);
      const isRouteTreeGenTs = fileName.endsWith('ts') || fileName.endsWith('tsx');

      if (isRouteTreeGenTs) {
        exec(`prettier --write ${targetPath}`, (err, _, stderr) => {
          if (err) return console.error(err);
          if (stderr) return console.error(stderr);
          return null;
        });
      }
    },
  };
};

export default routeTreeFormatPlugin;

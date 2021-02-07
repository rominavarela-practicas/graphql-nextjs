const fs = require('fs');
const path = require('path');

const rootDir = __dirname;

module.exports.loadDir = (_path) => {
  const dirPath = path.resolve(rootDir, _path);

  const childrenPaths = fs.readdirSync(dirPath, {withFileTypes: true})
    .filter(_ => _.isDirectory())
    .map(childDir => path.resolve(dirPath, childDir.name));

  const requireAll = (moduleName) => childrenPaths.map(childPath => {
    try {
      return require(path.resolve(childPath, moduleName));
    } catch {
      return undefined;
    }
  }).filter(_ => _);

  return { dirPath, childrenPaths, requireAll };
};

module.exports.joinObjects = (objs) => {
  const combined = {};
  objs.forEach(obj => {
    Object.assign(combined, obj || {});
  });
  return combined;
};

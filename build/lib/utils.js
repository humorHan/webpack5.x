const path = require('path');

const cwd = path.resolve(process.cwd());

module.exports = {
  cwd,
  resolve() {
    return path.resolve(cwd, ...arguments);
  }
};

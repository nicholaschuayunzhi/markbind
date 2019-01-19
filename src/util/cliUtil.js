const findUp = require('find-up');
const fs = require('fs-extra-promise');
const path = require('path');

const SITE_CONFIG_NAME = 'site.json';

module.exports = {
  findRootFolder: (userSpecifiedRoot, siteConfigPath = SITE_CONFIG_NAME) => {
    if (userSpecifiedRoot) {
      const expectedConfigPath = path.join(userSpecifiedRoot, siteConfigPath);
      if (!fs.existsSync(expectedConfigPath)) {
        throw new Error(`Config file not found at user specified root ${userSpecifiedRoot}`);
      }
      return userSpecifiedRoot;
    }

    const currentWorkingDir = process.cwd();
    // Enforces findUp uses value of process.cwd() to determine starting dir
    // This allows us to define starting dir when testing by mocking process.cwd()
    const foundConfigPath = findUp.sync(siteConfigPath, { cwd: currentWorkingDir });
    if (!foundConfigPath) {
      throw new Error(`No config file found in parent directories of ${currentWorkingDir}`);
    }
    const foundRootPath = path.dirname(foundConfigPath);
    return foundRootPath;
  },
};

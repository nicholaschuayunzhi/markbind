const cliUtil = require('../../src/util/cliUtil');
const fs = require('fs');

const { SITE_JSON_DEFAULT } = require('./utils/data');

jest.mock('fs');
jest.mock('process');

afterEach(() => {
  fs.vol.reset();
  jest.resetModules();
});

test('findRootFolder returns user specified root if site config is found there', () => {
  const json = {
    'userSpecifiedRoot/site.json': SITE_JSON_DEFAULT,
  };
  fs.vol.fromJSON(json, '');
  expect(cliUtil.findRootFolder('userSpecifiedRoot')).toBe('userSpecifiedRoot');
});

test('findRootFolder throws error if site config is found in user specified root', () => {
  expect(
    () => {
      cliUtil.findRootFolder('userSpecifiedRoot');
    })
    .toThrow('Config file not found at user specified root userSpecifiedRoot');
});

test('findRootFolder without user root returns the closest parent directory containing site config', () => {
  const json = {
    './site.json': SITE_JSON_DEFAULT,
    './nested/': {},
  };
  fs.vol.fromJSON(json, '/root');
  process.cwd = jest.fn().mockReturnValue('/root/nested');
  expect(cliUtil.findRootFolder()).toBe('/root');
});

test('findRootFolder without user root throws error if no parent directory contains site config', () => {
  const json = {
    './nested': {},
  };
  fs.vol.fromJSON(json, '/root');
  process.cwd = jest.fn().mockReturnValue('/root/nested');
  expect(
    () => {
      cliUtil.findRootFolder();
    })
    .toThrow('No config file found in parent directories of /root/nested');
});


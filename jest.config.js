const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: ["<rootDir>/src/__tests__/e2e"],
};
const asyncConfig = createJestConfig(config);

module.exports = async () => {
  const config = await asyncConfig();
  config.transformIgnorePatterns = [];

  return config;
};

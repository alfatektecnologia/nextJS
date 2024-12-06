export const testEnvironment = 'jsdom';
export const testPthIgnorePatterns = ['<rootDir>/node_modules/', '/.next/'];
export const collectCoverage = true;
export const collectCoverageFrom = ['<rootDir>/src/**/*.{js,jsx,ts,tsx}'];
export const modulePaths = ['<rootDir>/src/'];
export const transform = {'^.+\\.tsx?$': ['babel-jest', {presets: ['next/babel']}]};

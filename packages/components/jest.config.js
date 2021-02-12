module.exports = {
    setupFilesAfterEnv: ['<rootDir>/setupFilesAfterEnv.js'],
    transform: {
        '\\.[jt]sx?$': 'babel-jest',
    },
    testPathIgnorePatterns: ['/node_modules/'],
    moduleNameMapper: {
        '^@Utils(.*)$': '<rootDir>/utils$1',
    },
};

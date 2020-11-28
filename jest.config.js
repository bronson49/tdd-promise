module.exports = {
    moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx"],
    transform: {
        '^.+\\.(js|jsx)?$': 'babel-jest'
    },
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1'
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/vendor/vis/builder_lara_5/']
};

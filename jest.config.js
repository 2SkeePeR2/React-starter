module.exports = {
    name: 'eva-hr-ui-react',
    roots: ['./src'],
    transform: {
        '\\.(js|jsx|ts|tsx)?$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    testPathIgnorePatterns: [
        '/node_modules/',
        '/public/',
        '/build/',
        '/.github/',
        '/husky/',
        '/babel-in/',
        '/babel-out/',
    ],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};

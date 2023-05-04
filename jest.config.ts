module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    moduleFileExtensions: ['js', 'ts'],
    testMatch: ['**/__tests__/**/*.test.(ts)'],
    globals: {
      'ts-jest': {
        tsconfig: '<rootDir>/tsconfig.json',
      },
    },
  };
export default {
  preset: 'ts-jest',
  isolatedModules: true,
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { isolatedModules: true }],
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/src/__ mocks __/fileMock.js',
  },
  setupFilesAfterEnv: [
    '<rootDir>/jest-setup-files-after-env.ts'
  ],
}

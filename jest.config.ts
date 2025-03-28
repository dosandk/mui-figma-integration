export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    "^.+\\.tsx?$": "ts-jest"
    // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/src/__ mocks __/fileMock.js',
  },
  setupFilesAfterEnv: [
    '<rootDir>/jest-setup-files-after-env.ts'
  ],
}

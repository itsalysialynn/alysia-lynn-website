module.exports = {
  preset: 'ts-jest',
  reporters: ['default', ['jest-junit', { outputDirectory: 'reports', outputName: 'jest.xml' }]],
  testEnvironment: 'jsdom',
  coverageReporters: ['text', 'cobertura'],
  coverageDirectory: 'reports',
};

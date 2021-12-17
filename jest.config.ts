import type { InitialOptionsTsJest } from 'ts-jest/dist/types'

const config: InitialOptionsTsJest = {
  roots: ['<rootDir>/tests'],
  preset: 'ts-jest',
  testEnvironment: 'node',
}
export default config

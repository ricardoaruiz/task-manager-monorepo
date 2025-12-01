import '@testing-library/jest-dom'
import { afterAll, beforeAll } from 'vitest'

beforeAll(() => {
  console.log('Starting tests...')
})

afterAll(() => {
  console.log('Tests completed.')
})

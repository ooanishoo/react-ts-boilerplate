import { divide, add } from 'ramda'

/** Utility functions for the app goes here */
export const sum = (x: number) => (y: number): number => add(x, y)
export const average = (total: number) => (n: number): number => divide(total, n)

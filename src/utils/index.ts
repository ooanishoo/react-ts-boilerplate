import { divide } from 'ramda';

/* Utility functions for the app goes here */
export const sum = (x: number) => (y: number): number => x + y;
export const average = (total: number) => (n: number): number => divide(total, n);

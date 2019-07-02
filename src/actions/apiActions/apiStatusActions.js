import { apiCalls } from '../types';

export function apiCallStart() {
  return { type: apiCalls.API_CALL_START };
}

export function apiCallError() {
  return { type: apiCalls.API_CALL_ERROR };
}

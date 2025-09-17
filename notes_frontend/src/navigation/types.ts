import type { Note } from '../types';

// PUBLIC_INTERFACE
export type Route =
  | { name: 'home' }
  | { name: 'create' }
  | { name: 'edit'; note: Note }
  | { name: 'view'; note: Note }
  | { name: 'folders' }
  | { name: 'help' }
  | { name: 'about' };

/**
 * PUBLIC_INTERFACE
 * Helper to create strongly-typed routes.
 */
export function routeOf(r: Route): Route {
  /** Identity helper for route literals. */
  return r;
}

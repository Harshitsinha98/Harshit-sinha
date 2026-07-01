/**
 * Single source of truth for the intro loading-screen duration.
 *
 * This was the actual "navbar out of sync with page.tsx" bug: page.tsx had
 * its own hardcoded `2800` for the setTimeout, and Navbar.tsx separately
 * hardcoded `delay: 2.8` for its entrance animation. They happened to
 * match today, but the moment either number changes on its own, the
 * navbar will pop in too early/late relative to the loading screen.
 *
 * Both files now import from here instead, so there is exactly one
 * number to change and they can never drift apart again.
 *
 * Suggested location in your project: lib/constants.ts
 * (next to your existing lib/data.ts and lib/utils.ts)
 */
export const LOADING_DURATION_MS = 2800;
export const LOADING_DURATION_S = LOADING_DURATION_MS / 1000;

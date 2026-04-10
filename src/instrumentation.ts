// Polyfill Node.js 25's broken localStorage global.
// Node 25 exposes a localStorage global but getItem/setItem aren't functions
// unless --localstorage-file is configured, which breaks SSR for libraries
// that access localStorage without checking typeof window first.
if (
  typeof globalThis.localStorage !== "undefined" &&
  typeof globalThis.localStorage.getItem !== "function"
) {
  const store: Record<string, string> = {};
  globalThis.localStorage = {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, val: string) => {
      store[key] = String(val);
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      Object.keys(store).forEach((k) => delete store[k]);
    },
    get length() {
      return Object.keys(store).length;
    },
    key: (i: number) => Object.keys(store)[i] ?? null,
  } as Storage;
}

export async function register() {
  // instrumentation hook — intentionally empty
}

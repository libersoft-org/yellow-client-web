

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.5d4fa301.js","_app/immutable/chunks/index.ce530a3b.js","_app/immutable/chunks/singletons.acc20cd5.js","_app/immutable/chunks/index.ba8b4f8d.js"];
export const stylesheets = [];
export const fonts = [];

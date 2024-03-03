

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.Dk4ALbAv.js","_app/immutable/chunks/scheduler.DnbybavU.js","_app/immutable/chunks/index.C4QdxMTK.js"];
export const stylesheets = [];
export const fonts = [];

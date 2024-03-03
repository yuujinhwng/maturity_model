

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BXaE-FIW.js","_app/immutable/chunks/scheduler.DnbybavU.js","_app/immutable/chunks/index.C4QdxMTK.js","_app/immutable/chunks/index.CWMB_fyK.js"];
export const stylesheets = ["_app/immutable/assets/2.DpGzXXJt.css"];
export const fonts = [];

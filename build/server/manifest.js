const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","models/threlte.glb"]),
	mimeTypes: {".png":"image/png",".glb":"model/gltf-binary"},
	_: {
		client: {"start":"_app/immutable/entry/start.bCobPueL.js","app":"_app/immutable/entry/app.ZiCZRluI.js","imports":["_app/immutable/entry/start.bCobPueL.js","_app/immutable/chunks/scheduler.DnbybavU.js","_app/immutable/chunks/singletons.JdXu07xM.js","_app/immutable/chunks/index.CWMB_fyK.js","_app/immutable/entry/app.ZiCZRluI.js","_app/immutable/chunks/scheduler.DnbybavU.js","_app/immutable/chunks/index.C4QdxMTK.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-BUFjc1bY.js')),
			__memo(() => import('./chunks/1-CqeKdbl0.js')),
			__memo(() => import('./chunks/2-DkiF8jxx.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map

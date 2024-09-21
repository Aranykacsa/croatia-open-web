const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["compass.svg","content/content1.jpg","content/livelox-logo-white.png","content/Livelox.png","favicon.png","mik-logo.png","topography.svg"]),
	mimeTypes: {".svg":"image/svg+xml",".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.MCpwUhSL.js","app":"_app/immutable/entry/app.CimzY1Nx.js","imports":["_app/immutable/entry/start.MCpwUhSL.js","_app/immutable/chunks/entry.CxYijaRA.js","_app/immutable/chunks/runtime.CwLLRO5E.js","_app/immutable/entry/app.CimzY1Nx.js","_app/immutable/chunks/runtime.CwLLRO5E.js","_app/immutable/chunks/render.eDVqVbze.js","_app/immutable/chunks/disclose-version.CfR865xC.js","_app/immutable/chunks/if.VM7uLf1S.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-Bmo-BAgc.js')),
			__memo(() => import('./chunks/1-8LQg54Mp.js')),
			__memo(() => import('./chunks/2-CJXeBdnI.js')),
			__memo(() => import('./chunks/3-DrKK8u1Q.js')),
			__memo(() => import('./chunks/4-RrkiHx1Y.js')),
			__memo(() => import('./chunks/5-DwzdphnM.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/gallery",
				pattern: /^\/gallery\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/organizers",
				pattern: /^\/organizers\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map

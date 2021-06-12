const path = require('path');

module.exports = {
	transformer: {
		getTransformOptions: async () => ({
			transform: {
				experimentalImportSupport: false,
				inlineRequires: true,
			},
		}),
	},
	resolver: {
		extraNodeModules: new Proxy(
			{},
			{
				get: (_, name) => {
					return path.join(__dirname, `node_modules/${name}`);
				},
			}
		),
	},
	watchFolders: [path.resolve(__dirname, '../../')],
};

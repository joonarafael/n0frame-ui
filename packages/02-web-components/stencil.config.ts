import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";
import { reactOutputTarget } from "@stencil/react-output-target";

export const config: Config = {
	namespace: "n0f-web-components",
	plugins: [sass()],
	outputTargets: [
		{
			type: "dist",
			esmLoaderPath: "../loader",
		},
		{
			type: "dist-custom-elements",
			customElementsExportBehavior: "auto-define-custom-elements",
			externalRuntime: false,
		},
		{
			type: "docs-vscode",
			file: "vscode-data.json",
		},
		{
			type: "docs-readme",
		},
		reactOutputTarget({
			customElementsDir: "",
			outDir: "../react/lib/components/stencil-generated/",
		}),
		{
			type: "www",
			serviceWorker: null,
			copy: [
				{
					src: "../node_modules/@n0f/tokens/css/theme.css",
					dest: "@n0f/tokens/css/theme.css",
				},
				{
					src: "../node_modules/@n0f/css/dist/base.css",
					dest: "@n0f/css/dist/base.css",
				},
			],
		},
	],
	extras: {
		enableImportInjection: true,
	},
	testing: {
		browserHeadless: "shell",
	},
	devServer: {
		port: 5173,
		openBrowser: false,
	},
};

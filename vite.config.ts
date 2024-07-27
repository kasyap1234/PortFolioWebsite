import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';
import strip from '@rollup/plugin-strip';

export default defineConfig({
	plugins: [
		sveltekit(),
		strip({
			include: '**/*.(js|ts|svelte)',
			functions: ['use client']
		})
	],
	resolve: {
		alias: {
			'@mui/material': path.resolve(__dirname, 'node_modules/@mui/material'),
		}
	},
	optimizeDeps: {
		include: ['@mui/material'],
	},
	build: {
		rollupOptions: {
			external: ['@mui/material'],
		},
	},
});

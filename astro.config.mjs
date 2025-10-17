import { defineConfig } from 'astro/config';
import { storyblok } from '@storyblok/astro';
import { loadEnv } from 'vite';
import mkcert from 'vite-plugin-mkcert';

const env = loadEnv("", process.cwd(), 'STORYBLOK');
const { STORYBLOK_TOKEN } = loadEnv(import.meta.env.MODE, process.cwd(), "");

export default defineConfig({
	integrations: [
	storyblok({
		accessToken: env.STORYBLOK_TOKEN,
		components: {
			blogPost: 'storyblok/BlogPost',
			blogPostList: 'storyblok/BlogPostList',
			page: 'storyblok/Page',
		},
		apiOptions: {
			region: 'eu',
		},
		livePreview: true,
		bridge: true,
	}),
	],
	output: 'server',
	vite: {
		plugins: [mkcert()]
	},
});

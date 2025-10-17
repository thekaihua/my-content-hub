import { defineConfig } from 'astro/config';
import { storyblok } from '@storyblok/astro';
import { loadEnv } from 'vite';

const env = loadEnv("", process.cwd(), 'STORYBLOK');

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
		livePreview: false,
		bridge: false,
	}),
	],
});

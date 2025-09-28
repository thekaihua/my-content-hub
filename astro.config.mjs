// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Site URL from environment variables
	site: import.meta.env.SITE_URL || 'http://localhost:4321',
});

import { clsx } from "clsx"
import { createClient } from '@supabase/supabase-js';
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


function createClerkSupabaseClient() {
	return createClient(import.meta.env.VITE_SUPABASE_PROJECT_URL, import.meta.env.VITE_SUPABASE_KEY, {
		global: {
			// Get the Supabase token with a custom fetch method
			fetch: async (url, options = {}) => {
				const clerkToken = await window.Clerk.session?.getToken({
					template: 'supabase',
				});

				// Construct fetch headers
				const headers = new Headers(options?.headers);
				headers.set('Authorization', `Bearer ${clerkToken}`);

				// Now call the default fetch
				return fetch(url, {
					...options,
					headers,
				});
			},
		},
	});
}

export const client = createClerkSupabaseClient();
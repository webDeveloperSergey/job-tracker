import { createBrowserClient } from '@supabase/ssr'

// Используется в Client Components ('use client').
// Берёт сессию из состояния браузера напрямую.
export function createClient() {
	return createBrowserClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
	)
}

import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

// Используется в Server Components, Server Actions, Route Handlers.
// Читает сессию пользователя из cookies входящего HTTP-запроса —
// поэтому обязательно async и обязательно вызывается заново на каждый запрос
// (не сохраняйте в переменную на уровне модуля).
export async function createClient() {
	const cookieStore = await cookies()

	return createServerClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		{
			cookies: {
				getAll() {
					return cookieStore.getAll()
				},
				setAll(cookiesToSet, _headers) {
					try {
						cookiesToSet.forEach(({ name, value, options }) =>
							cookieStore.set(name, value, options)
						)
					} catch {
						// The `setAll` method was called from a Server Component.
						// This can be ignored if you have middleware refreshing
						// user sessions.
					}
				}
			}
		}
	)
}

import { type NextRequest } from 'next/server'
import { updateSession } from '@/shared/lib/supabase/middleware'

export async function proxy(request: NextRequest) {
	console.log('🔥 PROXY RUNNING:', request.nextUrl.pathname)

	return await updateSession(request)
}

export const config = {
	matcher: [
		/*
		 * Матчим все пути, кроме:
		 * - _next/static (статика)
		 * - _next/image (оптимизация картинок)
		 * - favicon.ico
		 * - явных файлов картинок
		 */
		'/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'
	]
}

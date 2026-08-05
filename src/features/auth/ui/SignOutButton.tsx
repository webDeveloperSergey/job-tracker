'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/shared/lib/supabase/client'
import { ROUTES } from '@/shared/config/routes'

export function SignOutButton() {
	const router = useRouter()
	const [isLoading, setIsLoading] = useState(false)

	async function handleSignOut() {
		setIsLoading(true)

		const supabase = createClient()
		await supabase.auth.signOut()

		// refresh — чтобы Server Components увидели, что сессии больше нет
		router.refresh()
		router.push(ROUTES.auth.logIn)
	}

	return (
		<button
			onClick={handleSignOut}
			disabled={isLoading}
			className="text-sm underline disabled:opacity-50"
		>
			{isLoading ? 'Выходим...' : 'Sign out'}
		</button>
	)
}

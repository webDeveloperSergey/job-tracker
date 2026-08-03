'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { loginSchema, type LoginFormValues } from '../model/loginSchema'
import { useState } from 'react'
import { createClient } from '@/shared/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/shared/config/routes'

export function useLoginForm() {
	const router = useRouter()

	const {
		register,
		handleSubmit,
		formState: { errors, isValid }
	} = useForm<LoginFormValues>({
		resolver: zodResolver(loginSchema),
		mode: 'onChange'
	})

	const [isLoading, setIsLoading] = useState(false)

	const onSubmit = handleSubmit(async ({ email, password }) => {
		setIsLoading(true)

		const supabase = createClient()
		const { error } = await supabase.auth.signInWithPassword({
			email,
			password
		})

		console.log('Login error:', error)

		setIsLoading(false)

		// Логин прошёл успешно — Supabase сам записал cookie с сессией.
		// router.refresh() заставляет Server Components перерендериться
		// и подхватить новую сессию через createServerClient (shared/lib/supabase/server.ts)
		router.refresh()
		router.push(ROUTES.board)
	})

	return { register, errors, onSubmit, isValid, isLoading }
}

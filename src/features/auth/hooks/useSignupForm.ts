'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { signupSchema, type SignupFormValues } from '../model/signupSchema'
import { createClient } from '@/shared/lib/supabase/client'
import { useState } from 'react'

export function useSignupForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid }
	} = useForm<SignupFormValues>({
		resolver: zodResolver(signupSchema),
		mode: 'onChange'
	})

	const [isLoading, setIsLoading] = useState(false)
	const [isSuccess, setIsSuccess] = useState(false)

	const onSubmit = handleSubmit(async ({ email, password }) => {
		setIsLoading(true)

		const supabase = createClient()
		const { error } = await supabase.auth.signUp({ email, password })

		console.log('Signup error:', error)

		setIsLoading(false)
		setIsSuccess(true)
	})

	return { register, errors, onSubmit, isLoading, isSuccess, isValid }
}

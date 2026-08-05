'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { signupSchema, type SignupFormValues } from '../model/signupSchema'
import { createClient } from '@/shared/lib/supabase/client'
import { useState } from 'react'
import { toast } from '@/shared/ui/shadcn/toast'

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

		setIsLoading(false)

		if (error) {
			toast.add({
				title: 'Signup failed',
				description: error.message,
				type: 'error'
			})
			return
		}

		toast.add({
			title: 'Signup successful',
			description:
				'You have successfully signed up. Please check your email to confirm your account.',
			type: 'success'
		})

		setIsSuccess(true)
	})

	return { register, errors, onSubmit, isLoading, isSuccess, isValid }
}

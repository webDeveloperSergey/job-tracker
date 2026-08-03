'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { signupSchema, type SignupFormValues } from '../model/signupSchema'

export function useSignupForm() {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<SignupFormValues>({ resolver: zodResolver(signupSchema) })

	const onSubmit = handleSubmit((values) => {
		console.log(values)
	})

	return { register, errors, onSubmit }
}

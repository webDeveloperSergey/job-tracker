'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { loginSchema, type LoginFormValues } from '../model/loginSchema'

export function useLoginForm() {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<LoginFormValues>({ resolver: zodResolver(loginSchema) })

	const onSubmit = handleSubmit((values) => {
		console.log(values)
	})

	return { register, errors, onSubmit }
}

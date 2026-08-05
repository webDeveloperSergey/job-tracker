import { z } from 'zod'

export const signupSchema = z
	.object({
		email: z.email('Enter a valid email address'),
		password: z.string().min(6, 'Password must be at least 6 characters'),
		confirmPassword: z.string()
	})
	.refine(data => data.password === data.confirmPassword, {
		message: "Passwords don't match",
		path: ['confirmPassword']
	})

export type SignupFormValues = z.infer<typeof signupSchema>

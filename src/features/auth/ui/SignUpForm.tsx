'use client'

import type { ReactNode } from 'react'
import { useSignupForm } from '../hooks/useSignupForm'
import { PasswordInput } from '@/shared/ui/PasswordInput'
import { Input } from '@/shared/ui/shadcn/input'
import { Label } from '@/shared/ui/shadcn/label'
import { CardContent } from '@/shared/ui/shadcn/card'

interface SignupFormProps {
	children: ReactNode
}

export function SignupForm({ children }: SignupFormProps) {
	const { register, errors, onSubmit } = useSignupForm()

	return (
		<form
			onSubmit={onSubmit}
			className="contents"
		>
			<CardContent>
				<div className="flex flex-col gap-6">
					<div className="grid gap-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							type="email"
							placeholder="m@example.com"
							{...register('email')}
						/>
						{errors.email && (
							<p className="text-sm text-destructive">
								{errors.email.message}
							</p>
						)}
					</div>
					<div className="grid gap-2">
						<Label htmlFor="password">Password</Label>
						<PasswordInput
							id="password"
							{...register('password')}
						/>
						{errors.password && (
							<p className="text-sm text-destructive">
								{errors.password.message}
							</p>
						)}
					</div>
					<div className="grid gap-2">
						<Label htmlFor="confirm-password">Confirm password</Label>
						<PasswordInput
							id="confirm-password"
							{...register('confirmPassword')}
						/>
						{errors.confirmPassword && (
							<p className="text-sm text-destructive">
								{errors.confirmPassword.message}
							</p>
						)}
					</div>
				</div>
			</CardContent>
			{children}
		</form>
	)
}

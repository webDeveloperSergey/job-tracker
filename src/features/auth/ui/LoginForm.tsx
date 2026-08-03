'use client'

import type { ReactNode } from 'react'
import { useLoginForm } from '../hooks/useLoginForm'
import { PasswordInput } from '@/shared/ui/PasswordInput'
import { Input } from '@/shared/ui/shadcn/input'
import { Label } from '@/shared/ui/shadcn/label'
import { CardContent } from '@/shared/ui/shadcn/card'

interface LoginFormProps {
	children: ReactNode
}

export function LoginForm({ children }: LoginFormProps) {
	const { register, errors, onSubmit } = useLoginForm()

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
						<div className="flex items-center">
							<Label htmlFor="password">Password</Label>
							<a
								href="#"
								className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
							>
								Forgot your password?
							</a>
						</div>
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
				</div>
			</CardContent>
			{children}
		</form>
	)
}

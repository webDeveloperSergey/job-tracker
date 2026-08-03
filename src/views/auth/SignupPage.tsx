// import { SignUpForm } from '@/features/auth'

import { ROUTES } from '@/shared/config/routes'
import Link from 'next/link'

export function SignupPage() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen gap-6">
			<h1 className="text-xl font-medium">Регистрация</h1>
			{/* <SignUpForm /> */}
			<Link
				href={ROUTES.auth.logIn}
				className="text-sm underline"
			>
				Уже есть аккаунт? Войти
			</Link>
		</div>
	)
}

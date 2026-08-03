import { AuthAside } from '@/views/auth/AuthAside'
import { ReactNode } from 'react'

export default function AuthLayout({ children }: { children: ReactNode }) {
	return (
		<main className="flex min-h-screen">
			<AuthAside />
			<div className="flex-1 flex flex-col items-center justify-center">
				{children}
			</div>
		</main>
	)
}

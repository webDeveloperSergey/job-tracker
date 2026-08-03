import { LoginCard } from '@/widgets/auth/ui/LoginCard'
import { Button } from '@/shared/ui/shadcn/button'
import Link from 'next/link'
import { ROUTES } from '@/shared/config/routes'

export function LoginPage() {
	return (
		<div className="flex w-full flex-col items-center gap-6">
			<LoginCard />

			<div className="flex items-center">
				<span className="text-muted-foreground text-sm">Have an account?</span>

				<Button
					variant="link"
					render={
						<Link
							href={ROUTES.auth.signUp}
							className="text-sm underline"
						/>
					}
				>
					Sign Up
				</Button>
			</div>
		</div>
	)
}

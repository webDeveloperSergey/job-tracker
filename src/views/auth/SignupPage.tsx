import { SignupCard } from '@/widgets/auth/ui/SignupCard'
import { Button } from '@/shared/ui/shadcn/button'
import { ROUTES } from '@/shared/config/routes'
import Link from 'next/link'

export function SignupPage() {
	return (
		<div className="flex w-full flex-col items-center gap-6">
			<SignupCard />

			<div className="flex items-center">
				<span className="text-muted-foreground text-sm">
					Already have an account?
				</span>

				<Button variant="link">
					<Link
						href={ROUTES.auth.logIn}
						className="text-sm underline"
					>
						Log in
					</Link>
				</Button>
			</div>
		</div>
	)
}

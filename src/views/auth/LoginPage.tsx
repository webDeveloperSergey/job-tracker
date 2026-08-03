import { LoginCard } from '@/widgets/auth/ui/LoginCard'
import { Button } from '@/shared/ui/shadcn/button'
import Link from 'next/link'

export function LoginPage() {
	return (
		<div className="flex w-full flex-col items-center gap-6">
			<LoginCard />

			<div className="flex items-center">
				<span className="text-muted-foreground text-sm">Have an account?</span>

				<Button variant="link">
					<Link
						href="/auth/sign-up"
						className="text-sm underline"
					>
						Sign Up
					</Link>
				</Button>
			</div>
		</div>
	)
}

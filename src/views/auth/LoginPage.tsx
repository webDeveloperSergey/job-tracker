import { LoginForm } from '@/features/auth/ui/LoginForm'
import { Button } from '@/shared/ui/shadcn/button'
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/shared/ui/shadcn/card'
import Link from 'next/link'

export function LoginPage() {
	return (
		<div className="flex w-full flex-col items-center gap-6">
			<Card
				variant="ghost"
				className="w-full max-w-sm"
			>
				<CardHeader>
					<CardTitle className="text-3xl">Welcome back</CardTitle>
					<CardDescription className="text-md">
						Sign in to your account
					</CardDescription>
					<CardAction></CardAction>
				</CardHeader>
				<LoginForm>
					<CardContent>
						<div className="flex items-center gap-4">
							<div className="h-px flex-1 bg-neutral-200" />
							<span className="text-sm text-neutral-400">Or continue with</span>
							<div className="h-px flex-1 bg-neutral-200" />
						</div>
					</CardContent>
					<CardFooter className="flex-col gap-2">
						<Button
							type="submit"
							className="w-full"
						>
							Login
						</Button>
					</CardFooter>
				</LoginForm>
			</Card>

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

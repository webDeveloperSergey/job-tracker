// import { LoginForm } from '@/features/auth'

import { PasswordInput } from '@/shared/ui/PasswordInput'
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
import { Input } from '@/shared/ui/shadcn/input'
import { Label } from '@/shared/ui/shadcn/label'
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
				<CardContent>
					<form>
						<div className="flex flex-col gap-6">
							<div className="grid gap-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									type="email"
									placeholder="m@example.com"
									required
								/>
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
									required
								/>
							</div>
						</div>
					</form>
				</CardContent>
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

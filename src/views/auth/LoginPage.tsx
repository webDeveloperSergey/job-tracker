// import { LoginForm } from '@/features/auth'

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
		<>
			<Card
				variant="ghost"
				className="w-full max-w-sm"
			>
				<CardHeader>
					<CardTitle>Login to your account</CardTitle>
					<CardDescription>
						Enter your email below to login to your account
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
								<Input
									id="password"
									type="password"
									required
								/>
							</div>
						</div>
					</form>
				</CardContent>
				<CardFooter className="flex-col gap-2">
					<Button
						type="submit"
						className="w-full"
					>
						Login
					</Button>
					<Button
						variant="outline"
						className="w-full"
					>
						Login with Google
					</Button>
				</CardFooter>
			</Card>

			<div>
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
		</>
	)
}

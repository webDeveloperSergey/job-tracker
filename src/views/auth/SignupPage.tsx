// import { SignUpForm } from '@/features/auth'

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
import { ROUTES } from '@/shared/config/routes'
import Link from 'next/link'

export function SignupPage() {
	return (
		<div className="flex w-full flex-col items-center gap-6">
			<Card
				variant="ghost"
				className="w-full max-w-sm"
			>
				<CardHeader>
					<CardTitle className="text-3xl">Create an account</CardTitle>
					<CardDescription className="text-md">
						Enter your details below to create your account
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
								<Label htmlFor="password">Password</Label>
								<PasswordInput
									id="password"
									required
								/>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="confirm-password">Confirm password</Label>
								<PasswordInput
									id="confirm-password"
									required
								/>
							</div>
						</div>
					</form>
				</CardContent>
				<CardContent>
					<div className="flex items-center gap-4">
						<div className="h-px flex-1 bg-border" />
						<span className="text-sm text-muted-foreground">
							Or continue with
						</span>
						<div className="h-px flex-1 bg-border" />
					</div>
				</CardContent>
				<CardFooter className="flex-col gap-2">
					<Button
						type="submit"
						className="w-full"
					>
						Create account
					</Button>
				</CardFooter>
			</Card>

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

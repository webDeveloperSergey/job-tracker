'use client'

import { Loader2 } from 'lucide-react'
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

export function LoginCard() {
	return (
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
				{({ isValid, isLoading }) => (
					<>
						<CardContent>
							<div className="flex items-center gap-4">
								<div className="h-px flex-1 bg-neutral-200" />
								<span className="text-sm text-neutral-400">
									Or continue with
								</span>
								<div className="h-px flex-1 bg-neutral-200" />
							</div>
						</CardContent>
						<CardFooter className="flex-col gap-2">
							<Button
								type="submit"
								className="w-full"
								disabled={!isValid || isLoading}
							>
								{isLoading && (
									<Loader2 className="size-4 animate-spin" />
								)}
								Login
							</Button>
						</CardFooter>
					</>
				)}
			</LoginForm>
		</Card>
	)
}

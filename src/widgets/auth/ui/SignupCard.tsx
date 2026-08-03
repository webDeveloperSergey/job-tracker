'use client'

import { Loader2 } from 'lucide-react'
import { SignupForm } from '@/features/auth/ui/SignupForm'
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

export function SignupCard() {
	return (
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
			<SignupForm>
				{({ isValid, isLoading }) => (
					<>
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
								disabled={!isValid || isLoading}
							>
								{isLoading && (
									<Loader2 className="size-4 animate-spin" />
								)}
								Create account
							</Button>
						</CardFooter>
					</>
				)}
			</SignupForm>
		</Card>
	)
}

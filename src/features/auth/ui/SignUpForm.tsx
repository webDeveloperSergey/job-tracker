import { PasswordInput } from '@/shared/ui/PasswordInput'
import { Input } from '@/shared/ui/shadcn/input'
import { Label } from '@/shared/ui/shadcn/label'

export function SignUpForm() {
	return (
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
	)
}

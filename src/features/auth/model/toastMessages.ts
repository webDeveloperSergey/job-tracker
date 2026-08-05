import { toast } from '@/shared/ui/shadcn/toast'

type AuthAction = 'login' | 'signup'
type TypeToast = 'success' | 'error'

export const generateAuthToasts = (
	authAction: AuthAction,
	typeToast: TypeToast = 'success',
	error?: Error
) => {
	const authToasts = {
		login: {
			success: {
				title: 'Login successful',
				description: 'You have successfully logged in.'
			},
			error: {
				title: 'Login failed',
				description:
					error?.message ||
					'There was an error logging in. Please check your credentials and try again.'
			}
		},
		signup: {
			success: {
				title: 'Signup successful',
				description:
					'You have successfully signed up. Please check your email to confirm your account.'
			},
			error: {
				title: 'Signup failed',
				description:
					error?.message ||
					'There was an error signing up. Please check your information and try again.'
			}
		}
	}

	return toast.add({
		...authToasts[authAction][typeToast],
		type: typeToast
	})
}

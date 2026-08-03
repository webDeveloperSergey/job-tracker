const authRoot = '/auth'

export const ROUTES = {
	auth: {
		root: authRoot,
		logIn: `${authRoot}/log-in`,
		signUp: `${authRoot}/sign-up`
	},
	board: '/board'
} as const

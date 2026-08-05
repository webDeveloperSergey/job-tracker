const authRoot = '/auth'

export const ROUTES = Object.freeze({
	auth: {
		root: authRoot,
		logIn: `${authRoot}/log-in`,
		signUp: `${authRoot}/sign-up`
	},
	board: '/board'
} as const)

export const PROTECTED_PREFIXES = Object.freeze([ROUTES.board] as const)

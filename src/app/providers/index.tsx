'use client'

import { Toaster } from '@/shared/ui/shadcn/toast'
import { ThemeProvider } from './theme-provider'

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
		>
			<Toaster />
			{children}
		</ThemeProvider>
	)
}

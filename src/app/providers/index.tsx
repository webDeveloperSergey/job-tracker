'use client'

import { Toaster } from '@/shared/ui/shadcn/toast'
import { ThemeProvider } from './theme-provider'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export function Providers({ children }: { children: React.ReactNode }) {
	const [queryClient] = useState(() => new QueryClient())

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
			>
				{children}
				<Toaster />
			</ThemeProvider>
		</QueryClientProvider>
	)
}

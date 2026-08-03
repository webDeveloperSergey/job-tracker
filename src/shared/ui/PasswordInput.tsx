'use client'

import { Eye, EyeOff } from 'lucide-react'
import { cn } from '@/shared/lib/styles/utils'
import { Input } from './shadcn/input'
import { useState } from 'react'
import { Button } from './shadcn/button'

function PasswordInput({
	className,
	...props
}: Omit<React.ComponentProps<'input'>, 'type'>) {
	const [visible, setVisible] = useState(false)

	return (
		<div className="relative">
			<Input
				type={visible ? 'text' : 'password'}
				className={cn('pr-9', className)}
				{...props}
			/>
			<Button
				type="button"
				onClick={() => setVisible(value => !value)}
				className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground hover:bg-transparent"
				tabIndex={-1}
				variant="ghost"
			>
				{visible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
				<span className="sr-only">
					{visible ? 'Hide password' : 'Show password'}
				</span>
			</Button>
		</div>
	)
}

export { PasswordInput }

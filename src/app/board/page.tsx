import { SignOutButton } from '@/features/auth/ui/SignOutButton'

export default function Board() {
	return (
		<div className="flex flex-col flex-1 items-center justify-center gap-4 bg-zinc-50 font-sans dark:bg-black">
			Board
			<SignOutButton />
		</div>
	)
}

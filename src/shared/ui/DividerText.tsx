export function Divider({ text = 'or' }: { text?: string }) {
	return (
		<div className="flex items-center gap-4">
			<div className="h-px flex-1 bg-neutral-200" />
			<span className="text-sm text-neutral-400">{text}</span>
			<div className="h-px flex-1 bg-neutral-200" />
		</div>
	)
}

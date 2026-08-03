import classNames from 'classnames'
import { Logo } from '@/shared/ui/Logo'

export function AuthAside() {
	return (
		<aside className="hidden md:flex flex-1 flex-col justify-between border-r border-neutral-200 p-12">
			<Logo className="text-neutral-900" />

			<div className="max-w-md">
				<h1 className="text-4xl font-semibold leading-tight tracking-tight text-neutral-900">
					Turn job hunting into
					<br />a system you control.
				</h1>
				<p className="mt-4 text-neutral-500 text-sm leading-relaxed">
					Track every application, every stage, every next step — in one board
					built for the search, not against it.
				</p>
			</div>

			<PipelineIllustration />
		</aside>
	)
}

function PipelineIllustration() {
	const columns = [
		{ count: 3, opacityClass: 'opacity-10' },
		{ count: 2, opacityClass: 'opacity-30' },
		{ count: 1, opacityClass: 'opacity-100', accent: true }
	]

	return (
		<div
			className="flex items-end gap-3"
			aria-hidden="true"
		>
			{columns.map((col, colIndex) => (
				<div
					key={colIndex}
					className="flex flex-col-reverse gap-2"
				>
					{Array.from({ length: col.count }).map((_, cardIndex) => (
						<div
							key={cardIndex}
							className={classNames(
								'w-14 h-8 rounded-md',
								col.accent ? 'bg-amber-400' : 'bg-neutral-900',
								col.opacityClass
							)}
						/>
					))}
				</div>
			))}
		</div>
	)
}

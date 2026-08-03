export function Logo({ className }: { className?: string }) {
	return (
		<div className={`flex gap-2 ${className ?? ''}`}>
			<svg
				width="28"
				height="28"
				viewBox="0 0 20 20"
				fill="none"
				aria-hidden="true"
				className="shrink-0"
			>
				<rect
					x="1"
					y="1"
					width="5"
					height="18"
					rx="1.5"
					fill="currentColor"
					opacity="0.35"
				/>
				<rect
					x="7.5"
					y="6"
					width="5"
					height="13"
					rx="1.5"
					fill="currentColor"
					opacity="0.65"
				/>
				<rect
					x="14"
					y="10"
					width="5"
					height="9"
					rx="1.5"
					fill="currentColor"
				/>
			</svg>
			<span className="text-2xl font-semibold tracking-wide translate-y-1">
				Job Trackr
			</span>
		</div>
	)
}

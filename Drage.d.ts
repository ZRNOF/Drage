export function Drage({
	width,
	height,
	posX,
	posY,
	ver,
	hor,
	padding,
	roundCorner,
	color,
}?: {
	width?: string
	height?: string
	posX?: string
	posY?: string
	ver?: string
	hor?: string
	padding?: string
	roundCorner?: string
	color?: string
}): {
	onDrage: () => boolean
	contentArea: HTMLDivElement
}

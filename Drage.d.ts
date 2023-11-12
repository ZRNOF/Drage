export function Drage({
	width,
	height,
	posX,
	posY,
	ver,
	hor,
	padding,
	roundCorner,
	containerColor,
	dragAreaColor,
}?: {
	width?: string
	height?: string
	posX?: string
	posY?: string
	ver?: string
	hor?: string
	padding?: string
	roundCorner?: string
	containerColor?: string
	dragAreaColor?: string
}): {
	onDrage: () => boolean
	contentArea: HTMLDivElement
}

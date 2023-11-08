export const Drage = ({
	width = "300px",
	height = "25px",
	posX = "1rem",
	posY = "1rem",
	ver = "top",
	hor = "left",
	padding = "0px 10px 10px 10px",
	roundCorner = "6px 6px 6px 6px",
	color = "rgb(0, 0, 0, 0.5)",
} = {}) => {
	let MOUSEOVER = false
	let DRAGGING = false
	const onMouseOver = () => (MOUSEOVER = true)
	const onMouseOut = () => (MOUSEOVER = false)
	const onDrage = () => MOUSEOVER

	const container = document.createElement("div")
	container.onmouseover = () => onMouseOver()
	container.onmouseout = () => onMouseOut()
	container.ontouchstart = () => onMouseOver()
	container.ontouchend = () => onDragEnd()
	container.style.cssText = `
		width: ${width};
		position: absolute;
		background-color: ${color};
		${ver}: ${posY};
		${hor}: ${posX};
		border-radius: ${roundCorner};
		display: flex;
		flex-direction: column;
		z-index: 999;
	`

	const dragArea = document.createElement("div")
	dragArea.style.cssText = `
		height: ${height};
		cursor: grab;
		user-select: none;
		touch-action: none;
	`

	const contentArea = document.createElement("div")
	contentArea.style.cssText = `
		margin: ${padding};
		user-select: none;
		touch-action: none;
	`

	document.querySelector("body").appendChild(container)
	container.appendChild(dragArea)
	container.appendChild(contentArea)
	let [offsetX, offsetY] = [0, 0]
	let initLeft = container.getBoundingClientRect().left
	let initTop = container.getBoundingClientRect().top

	const onDragStart = (e) => {
		DRAGGING = true
		const { clientX, clientY } = e.type === "mousedown" ? e : e.touches[0]
		offsetX = clientX - container.getBoundingClientRect().left
		offsetY = clientY - container.getBoundingClientRect().top
		dragArea.style.cursor = "grabbing"
		document.body.style.cursor = "grabbing"
	}

	const onDragMove = (e) => {
		const bottomShift = ver === "top" ? 0 : contentArea.offsetHeight
		const { clientX, clientY } = e.type === "mousemove" ? e : e.touches[0]
		if (!DRAGGING) return
		onMouseOver()
		const newX = clientX - offsetX - initLeft
		const newY = clientY - offsetY - initTop + bottomShift
		container.style.transform = `translate(${newX}px, ${newY}px)`
	}

	const onDragEnd = () => {
		DRAGGING = false
		onMouseOut()
		dragArea.style.cursor = "grab"
		document.body.style.cursor = ""
	}

	dragArea.addEventListener("mousedown", onDragStart)
	document.addEventListener("mousemove", onDragMove)
	document.addEventListener("mouseup", onDragEnd)
	document.addEventListener("mouseleave", onDragEnd)
	dragArea.addEventListener("touchstart", onDragStart)
	document.addEventListener("touchmove", onDragMove)
	document.addEventListener("touchend", onDragEnd)

	return { onDrage, contentArea }
}

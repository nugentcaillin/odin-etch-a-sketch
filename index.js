
function initializeSquareSketchboard(rowCellCount) {

	const sketchboard = document.querySelector("#sketchboard");

	// create enough square cells to fill sketchboard
	for (let i = 0; i < rowCellCount ** 2; i++) {
		const div = document.createElement("div");
		const sideLength = `${100 / rowCellCount}%`;
		div.style["width"] = sideLength;
		div.style["height"] = sideLength;
		div.style["flex-grow"] = 1;
		sketchboard.appendChild(div);
	}
}

initializeSquareSketchboard(10);

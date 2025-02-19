
const INITIAL_SIZE = 16;
const MAX_SIZE = 100;


main()

function main() {
	initializeSquareSketchboard(INITIAL_SIZE);
	setCellCountInputValue(INITIAL_SIZE);
	setUpEventHandlers();
}

function setCellCountInputValue(num) {
	const cellCountInput = document.querySelector("#cellCountInput");
	cellCountInput.value = num;
}

function getCellCountInputValue() {
	const cellCountInput = document.querySelector("#cellCountInput");
	return cellCountInput.value	
} 

function initializeSquareSketchboard(rowCellCount) {

	const sketchboard = document.querySelector("#sketchboard");
	
	// remove children if present
	sketchboard.textContent = "";

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

function setUpEventHandlers() {
	
	const sketchboard = document.querySelector("#sketchboard");
	sketchboard.addEventListener("mouseover", e => {
		let target = e.target;
		if (target.id !== "sketchboard") {
			colourSquare(target);
		}
	})

	// reset board on refresh button click, correct input if needed
	const refreshButton = document.querySelector("#refresh");
	refreshButton.addEventListener("click", () => {
		let cellCount = getCellCountInputValue();
		if (isNaN(cellCount) ||
			+cellCount <= 0 ||
			+cellCount > MAX_SIZE ||
			Math.floor(+cellCount) !== +cellCount // only integer values
		) {
			setCellCountInputValue(INITIAL_SIZE);
			initializeSquareSketchboard(INITIAL_SIZE);
		} else {
			initializeSquareSketchboard(+cellCount);
		}
	})
}

function colourSquare(square) {
	square.style["background-color"] = "darkblue";
}


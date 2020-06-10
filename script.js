let rectHeightInput = document.getElementById("rect-width");
let rectWidthInput = document.getElementById("rect-height");
let sqSideLengthInput = document.getElementById("sq-side-length");
let cirRadiusInput = document.getElementById("cir-radius");
let triWidthInput = document.getElementById("tri-width");
let triHeightInput = document.getElementById("tri-height");
let drawContainer = document.getElementById("draw-container");
let rectBtn = document.getElementById("rect-btn");
let squareBtn = document.getElementById("square-btn");
let circleBtn = document.getElementById("circle-btn");
let triangleBtn = document.getElementById("triangle-btn");
let sideBar = document.getElementById("sidebar");
let shapeName = document.getElementById("shape-name");
let shapeDetails = document.getElementById("shape-details");

class Shape {
  constructor(height) {
    this.shape = document.createElement("div");
    this.height = height;
  }
  render() {
    drawContainer.appendChild(this.shape);
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
    this.render();
  }

  render() {
    this.shape.className = "circle";
    this.setSize();
    drawContainer.appendChild(this.shape);
  }
  setSize() {
    let cirRadius = parseInt(cirRadiusInput.value);
    let cirHeight = parseInt(cirRadiusInput.value) * 2;
    this.shape.style.top = `${Math.floor(Math.random() * 500)}px`;
    this.shape.style.left = `${Math.floor(
      Math.random() * (500 - cirRadius)
    )}px`;
    this.shape.style.height = `${cirHeight}px`;
    this.shape.style.width = `${cirHeight}px`;
    this.shape.style.borderRadius = `50%`;
    this.shape.style.backgroundColor = `purple`;

    this.shape.addEventListener("click", () => {
      this.describe();
    });
  }

  describe() {
    let cirRadius = parseInt(cirRadiusInput.value);
    let cirHeight = parseInt(cirRadiusInput.value) * 2;
    let area = Math.ceil(3.14 * cirRadius ** 2);
    let perimeter = Math.ceil(2 * 3.14 * cirRadius);
    shapeName.innerText = "Circle";
    shapeDetails.innerText = `
    Width: ${cirHeight},
    Height: ${cirHeight},
    Radius: ${cirRadius},
    Area: ${area},
    Perimeter: ${perimeter}
    `;
  }
}

// Show a sidepanel beside this shape canvas. It should display the following information for a clicked shape:
// Shape Name:
// Width:
// Height:
// Radius:
// Area:
// Perimeter:

class Triangle extends Shape {
  constructor(height) {
    super(height);
    this.render();
  }

  render() {
    this.shape.className = "triangle";
    this.setSize();
    drawContainer.appendChild(this.shape);
  }
  setSize() {
    let triWidth = parseInt(triWidthInput.value);
    let triHeight = parseInt(triHeightInput.value);
    this.shape.style.top = `${Math.floor(Math.random() * 500)}px`;
    this.shape.style.left = `${Math.floor(Math.random() * (500 - triWidth))}px`;
    this.shape.style.height = `0px`;
    this.shape.style.width = `0px`;
    this.shape.style.borderStyle = `solid`;
    this.shape.style.borderWidth = `0 ${triWidth /
      2}px ${triHeight}px ${triWidth / 2}px`;
    this.shape.style.borderColor = `transparent transparent yellow transparent`;
    this.shape.addEventListener("click", () => {
      this.describe();
    });
  }

  describe() {
    let triHeight = parseInt(triHeightInput.value);
    let area = (triHeight * triWidth) / 2;
    let perimeter = triWidth + triHeight;
    shapeName.innerText = "Triangle";
    shapeDetails.innerText = `
    Width: ${triWidth},
    Height: ${triHeight},
    Area: ${area},
    Perimeter: ${perimeter}
    `;
  }
}

class Rect extends Shape {
  constructor(height, width) {
    super(height);
    this.width = width;
    this.render();
  }

  render() {
    this.shape.className = "rectangle";
    this.setSize();
    drawContainer.appendChild(this.shape);
  }

  setSize() {
    let rectHeight = parseInt(rectHeightInput.value);
    let rectWidth = parseInt(rectWidthInput.value);
    this.shape.style.top = `${Math.floor(Math.random() * 550)}px`;
    this.shape.style.left = `${Math.floor(
      Math.random() * (550 - rectWidth)
    )}px`;
    this.shape.style.height = `${rectHeight}px`;
    this.shape.style.width = `${rectWidth}px`;
    this.shape.style.backgroundColor = `green`;
    this.shape.addEventListener("click", () => {
      this.describe();
    });
  }
  describe() {
    let rectHeight = parseInt(rectHeightInput.value);
    let rectWidth = parseInt(rectWidthInput.value);
    let area = rectWidth * rectHeight;
    let perimeter = 2 * (rectWidth * rectHeight);
    shapeName.innerText = "Rectangle";
    shapeDetails.innerText = `
      Width: ${rectWidth},
      Height: ${rectHeight},
      Area: ${area},
      Perimeter: ${perimeter}
      `;
  }
}

class Square extends Rect {
  constructor(height, width) {
    super(height, width);
    this.render();
  }
  render() {
    this.shape.className = "square";
    this.setSize();
    drawContainer.appendChild(this.shape);
  }

  setSize() {
    let sideLength = parseInt(sqSideLengthInput.value);
    this.shape.style.top = `${Math.floor(Math.random() * 550)}px`;
    this.shape.style.left = `${Math.floor(
      Math.random() * (550 - sideLength)
    )}px`;
    this.shape.style.height = `${sideLength}px`;
    this.shape.style.width = `${sideLength}px`;
    this.shape.style.backgroundColor = `red`;
    this.shape.addEventListener("click", () => {
      this.describe();
    });
  }

  describe() {
    let sideLength = parseInt(sqSideLengthInput.value);
    let area = sideLength ** 2;
    let perimeter = 4 * sideLength;
    shapeName.innerText = `Square`;
    shapeDetails.innerText = `
      Width: ${sideLength},
      Height: ${sideLength},
      Area: ${area},
      Perimeter: ${perimeter}
      `;
  }
}

circleBtn.addEventListener("click", () => {
  new Circle();
});
triangleBtn.addEventListener("click", () => {
  new Triangle();
});
rectBtn.addEventListener("click", () => {
  new Rect();
});
squareBtn.addEventListener("click", () => {
  new Square();
});

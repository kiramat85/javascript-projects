// Exercise #1

function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += '#';

        console.log(makeLine(5));
    }
    return line;
}

// Exercise #2

function makeRectangle(size) {
    let rectangle = '';
    for (let i = 0; i < size; i++) {
    if (i < size - 1) {
        rectangle += '#';

    console.log(makeRectangle(5, 3));
    }
    return rectangle;
    }
}

// Exercise 3

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
      rectangle += (makeLine(width) + '\n');
      console.log(makeRectangle(5, 3));
    }
    return rectangle.slice(0, -1);
  }

//   Exercise 4

function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
      stairs += (makeLine(i+1) + '\n');

      console.log(makeDownwardStairs(5));
    }
    return stairs.slice(0, -1);
  }

// Exercise 5

function makeSpaceLine(numSpaces, numChars) {
    let spaces = ' '.repeat(numSpaces);
    let hashes = '#'.repeat(numChars);
    console.log(makeSpaceLine(3, 5));
    return spaces + hashes + spaces;
}

// Exercise 6

function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
      console.log(makeIsoscelesTriangle(5));
    }
    return triangle.slice(0, -1);
  }

//   Exercise 7

function makeDiamond() {
    let diamond = '';
    for (let i =0; i < height; i++) {
        for (let j = 0; j < height - i - 1; j++) {
            diamond += ' ';
        for (let j = 0; j < 2 * i + 1; j++) {
            diamond += '*';

            diamond += '#';
        }
        }
    }
}


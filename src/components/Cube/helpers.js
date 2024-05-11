export const initializeLayer = (value, size) => {
  return Array(size)
    .fill()
    .map(() => Array(size).fill(value));
};

//create a new face/layer based on the given props
const createNewFace = (
  currentFace,
  direction,
  targets,
  conditions,
  allIndex
) => {
  const newFace = currentFace.map((row, rowIndex) => {
    return row.map((column, columnIndex) => {
      const [clockwiseTarget, counterclockwiseTarget] = targets;
      const [condition, conditionValue] = conditions;
      const [
        cwRowIndex,
        cwColumnIndex,
        counterCWRowIndex,
        counterCWColumnIndex,
      ] = allIndex;
      const target =
        direction === "clockwise"
          ? clockwiseTarget[eval(cwRowIndex)][eval(cwColumnIndex)]
          : counterclockwiseTarget[eval(counterCWRowIndex)][
              eval(counterCWColumnIndex)
            ];
      return eval(condition) !== conditionValue
        ? currentFace[rowIndex][columnIndex]
        : target;
    });
  });

  return newFace;
};

export const rotateLayer = (layer, direction, cube) => {
  // switch (layer) {
  //   case "F": {
  //     const { U, L, R, D } = cube;
  //     rotateFace("F", direction, cube);
  //     const newU = createNewFace(U, direction, L, R);
  //     //   const newU = U.map((row, rowIndex) => {
  //     //     return row.map((column, columnIndex) => {
  //     //       const target =
  //     //         direction === "clockwise"
  //     //           ? L[2 - columnIndex][2]
  //     //           : R[columnIndex][0];
  //     //       return rowIndex !== 2 ? U[rowIndex][columnIndex] : target;
  //     //     });
  //     //   });

  //     const newD = D.map((row, rowIndex) => {
  //       return row.map((column, columnIndex) => {
  //         const target =
  //           direction === "clockwise"
  //             ? R[2 - columnIndex][0]
  //             : L[columnIndex][2];
  //         return rowIndex !== 0 ? D[rowIndex][columnIndex] : target;
  //       });
  //     });

  //     const newL = L.map((row, rowIndex) => {
  //       return row.map((column, columnIndex) => {
  //         const target =
  //           direction === "clockwise" ? D[0][rowIndex] : U[2][2 - rowIndex];
  //         return columnIndex !== 2 ? L[rowIndex][columnIndex] : target;
  //       });
  //     });

  //     const newR = R.map((row, rowIndex) => {
  //       return row.map((column, columnIndex) => {
  //         const target =
  //           direction === "clockwise" ? U[2][rowIndex] : D[0][2 - rowIndex];
  //         return columnIndex !== 0 ? R[rowIndex][columnIndex] : target;
  //       });
  //     });

  //     cube = { ...cube, U: newU, L: newL, R: newR, D: newD };
  //     break;
  //   }
  //   case "B": {
  //     const { U, L, R, D } = cube;
  //     rotateFace("B", direction, cube);
  //     const newU = U.map((row, rowIndex) => {
  //       return row.map((column, columnIndex) => {
  //         const target =
  //           direction === "clockwise"
  //             ? R[columnIndex][2]
  //             : L[2 - columnIndex][0];
  //         return rowIndex !== 0 ? U[rowIndex][columnIndex] : target;
  //       });
  //     });

  //     const newD = D.map((row, rowIndex) => {
  //       return row.map((column, columnIndex) => {
  //         const target =
  //           direction === "clockwise"
  //             ? L[columnIndex][0]
  //             : R[2 - columnIndex][2];
  //         return rowIndex !== 2 ? D[rowIndex][columnIndex] : target;
  //       });
  //     });

  //     const newL = L.map((row, rowIndex) => {
  //       return row.map((column, columnIndex) => {
  //         const target =
  //           direction === "clockwise" ? U[0][2 - rowIndex] : D[2][rowIndex];
  //         return columnIndex !== 0 ? L[rowIndex][columnIndex] : target;
  //       });
  //     });

  //     const newR = R.map((row, rowIndex) => {
  //       return row.map((column, columnIndex) => {
  //         const target =
  //           direction === "clockwise" ? D[2][2 - rowIndex] : U[0][rowIndex];
  //         return columnIndex !== 2 ? R[rowIndex][columnIndex] : target;
  //       });
  //     });

  //     cube = { ...cube, U: newU, L: newL, R: newR, D: newD };
  //     break;
  //   }
  //   case "L": {
  //     const { U, B, F, D } = cube;
  //     rotateFace("L", direction, cube);
  //     const newU = U.map((row, rowIndex) => {
  //       return row.map((column, columnIndex) => {
  //         const target =
  //           direction === "clockwise" ? B[2 - rowIndex][2] : F[rowIndex][0];
  //         return columnIndex !== 0 ? U[rowIndex][columnIndex] : target;
  //       });
  //     });

  //     const newD = D.map((row, rowIndex) => {
  //       return row.map((column, columnIndex) => {
  //         const target =
  //           direction === "clockwise" ? F[rowIndex][0] : B[2 - rowIndex][2];
  //         return columnIndex !== 0 ? D[rowIndex][columnIndex] : target;
  //       });
  //     });

  //     /////??????????????????
  //     const newF = F.map((row, rowIndex) => {
  //       return row.map((column, columnIndex) => {
  //         const target =
  //           direction === "clockwise" ? U[rowIndex][0] : D[rowIndex][0];
  //         return columnIndex !== 0 ? F[rowIndex][columnIndex] : target;
  //       });
  //     });

  //     const newB = B.map((row, rowIndex) => {
  //       return row.map((column, columnIndex) => {
  //         const target =
  //           direction === "clockwise" ? D[2 - rowIndex][0] : U[rowIndex][0];
  //         return columnIndex !== 2 ? B[rowIndex][columnIndex] : target;
  //       });
  //     });

  //     cube = { ...cube, U: newU, B: newB, F: newF, D: newD };
  //     break;
  //   }
  // }
  switch (layer) {
    case "F": {
      const { U, L, R, D } = cube;
      rotateFace("F", direction, cube);
      const newU = createNewFace(
        U,
        direction,
        [L, R],
        ["rowIndex", 2],
        ["2 - columnIndex", 2, "columnIndex", 0]
      );
      const newD = createNewFace(
        D,
        direction,
        [R, L],
        ["rowIndex", 0],
        ["2 - columnIndex", 0, "columnIndex", 2]
      );
      const newL = createNewFace(
        L,
        direction,
        [D, U],
        ["columnIndex", 2],
        [0, "rowIndex", 2, "2 - rowIndex"]
      );
      const newR = createNewFace(
        R,
        direction,
        [U, D],
        ["columnIndex", 0],
        [2, "rowIndex", 0, "2 - rowIndex"]
      );

      cube = { ...cube, U: newU, L: newL, R: newR, D: newD };
      break;
    }
    case "B": {
      const { U, L, R, D } = cube;
      rotateFace("B", direction, cube);
      const newU = createNewFace(
        U,
        direction,
        [R, L],
        ["rowIndex", 0],
        ["columnIndex", 2, "2 - columnIndex", 0]
      );
      const newD = createNewFace(
        D,
        direction,
        [L, R],
        ["rowIndex", 2],
        ["columnIndex", 0, "2 - columnIndex", 2]
      );
      const newL = createNewFace(
        L,
        direction,
        [U, D],
        ["columnIndex", 0],
        [0, "2 - rowIndex", 2, "rowIndex"]
      );
      const newR = createNewFace(
        R,
        direction,
        [D, U],
        ["columnIndex", 2],
        [2, "2 - rowIndex", 0, "rowIndex"]
      );

      cube = { ...cube, U: newU, L: newL, R: newR, D: newD };
      break;
    }
    case "L": {
      const { U, B, F, D } = cube;
      rotateFace("L", direction, cube);
      const newU = createNewFace(
        U,
        direction,
        [B, F],
        ["columnIndex", 0],
        ["2 - rowIndex", 2, "rowIndex", 0]
      );
      const newD = createNewFace(
        D,
        direction,
        [F, B],
        ["columnIndex", 0],
        ["rowIndex", 0, "2 - rowIndex", 2]
      );
      const newF = createNewFace(
        F,
        direction,
        [U, D],
        ["columnIndex", 0],
        ["rowIndex", 0, "rowIndex", 0]
      );
      const newB = createNewFace(
        B,
        direction,
        [D, U],
        ["columnIndex", 2],
        ["2 - rowIndex", 0, "rowIndex", 0]
      );

      cube = { ...cube, U: newU, B: newB, F: newF, D: newD };
      break;
    }
  }

  // other case would be similar...
  return cube;
};

//rotate the current face itself
const rotateFace = (face, direction, cube) => {
  const newFace = Array(3)
    .fill()
    .map(() => Array(3).fill(""));
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (direction === "clockwise") {
        newFace[j][2 - i] = cube[face][i][j];
      } else {
        newFace[2 - j][i] = cube[face][i][j];
      }
    }
  }
  cube[face] = newFace;
};

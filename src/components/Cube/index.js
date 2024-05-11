import { useState } from "react";
import { initializeLayer, rotateLayer } from "./helpers";
import { Container, RowContainer, Cell, CellContainer } from "./styled";
import { Button } from "./components";

export const Cube = ({ ...props }) => {
  const [cubeFace, setCubeFace] = useState({
    F: initializeLayer("green", 3),
    B: initializeLayer("blue", 3),
    L: initializeLayer("orange", 3),
    R: initializeLayer("red", 3),
    U: initializeLayer("yellow", 3),
    D: initializeLayer("black", 3),
  });

  const renderLayer = (layer) => {
    return (
      <CellContainer>
        {layer.map((row, index) => (
          <div>
            {row.map((cell) => (
              <Cell cell={cell} />
            ))}
          </div>
        ))}
      </CellContainer>
    );
  };

  const handleOnClick = (e) => {
    const direction = !e.target.innerText.includes("'")
      ? "clockwise"
      : "counter-clockwise";
    setCubeFace({ ...rotateLayer(e.target.innerText[0], direction, cubeFace) });
  };

  return (
    <>
      <Container>{renderLayer(cubeFace.U)}</Container>
      <RowContainer>
        {renderLayer(cubeFace.L)}
        {renderLayer(cubeFace.F)}
        {renderLayer(cubeFace.R)}
        {renderLayer(cubeFace.B)}
      </RowContainer>
      <Container>{renderLayer(cubeFace.D)}</Container>
      <RowContainer>
        <Button handleOnClick={handleOnClick}>F</Button>
        <Button handleOnClick={handleOnClick}>B</Button>
        <Button handleOnClick={handleOnClick}>L</Button>
      </RowContainer>
      <Button handleOnClick={handleOnClick}>F'</Button>
      <Button handleOnClick={handleOnClick}>B'</Button>
      <Button handleOnClick={handleOnClick}>L'</Button>
    </>
  );
};

import styled from "@emotion/styled";

export const Container = styled.div({
  position: "relative",
  left: 212,
});

export const RowContainer = styled.div({
  display: "flex",
});

export const CellContainer = styled.div({
  margin: 10,
});

export const Cell = styled.div`
  width: 50px; // Size of the cube cell
  height: 50px; // Size of the cube cell
  display: inline-block;
  margin: 5px;
  background-color: ${(props) =>
    colorMapping[props.cell] || "#FFF"}; // Default or prop-based color
  background-image: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(0, 0, 0, 0.1) 100%
  );
  border: 2px solid rgba(0, 0, 0, 0.2); // Subtle border for depth
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); // Deeper shadow for 3D effect
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1); // Scale up slightly on hover
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4); // Enhanced shadow on hover
  }
`;

export const colorMapping = {
  red: "#C41E3A",
  green: "#009E60",
  blue: "#0051BA",
  orange: "#FF5800",
  yellow: "#FFD500",
  black: "#000000",
};

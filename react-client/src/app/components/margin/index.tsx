import React from "react";
import styled from "styled-components";

export interface IMarginProps {
  margin: number | string;
  direction?: "horizontal" | "vertical";
}

const HorizontalMargin = styled.span<IMarginProps>`
  display: flex;
  min-width: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;

const VerticalMargin = styled.span<IMarginProps>`
  display: flex;
  min-height: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;

function Margin(props: IMarginProps) {
  const { direction } = props;

  if (direction === "horizontal") return <HorizontalMargin {...props} />;
  else {
    return <VerticalMargin {...props} />;
  }
}

Margin.defaultProps = {
  direction: "horizontal",
};

export { Margin };

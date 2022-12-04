import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {
  it("display counter", () => {
    // Arrange
    render(<Counter number={0} />);

    // Act
    const numberDefaultText = screen.getByText("0");
    const increaseText = screen.getByText("+1");
    const decreaseText = screen.getByText("-1");

    // Assert
    expect(numberDefaultText).toBeInTheDocument();
    expect(increaseText).toBeInTheDocument();
    expect(decreaseText).toBeInTheDocument();
  });

  it("increase functions", () => {
    // Arrange
    const mockIncrease = jest.fn();

    render(<Counter number={0} onIncrease={mockIncrease} />);

    const increaseBtn = screen.getByText("+1");

    // Act
    fireEvent.click(increaseBtn);

    // Assert
    expect(mockIncrease.mock.calls.length).toBe(1);
  });

  it("decrease functions", () => {
    // Arrange
    const mockDecrease = jest.fn();
    render(<Counter number={0} onDecrease={mockDecrease} />);
    const decreaseBtn = screen.getByText("-1");

    // Act
    fireEvent.click(decreaseBtn);

    // Assert
    expect(mockDecrease.mock.calls.length).toBe(1);
  });
});

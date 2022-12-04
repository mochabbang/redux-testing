import { render, screen } from "@testing-library/react";
import Post from "./Post";

describe("display Post", () => {
  it("should be Post tag", () => {
    // Arrange
    render(<Post />);

    const title = screen.getByText("hello");
    const body = screen.getByText("world");

    expect(title).toBeInTheDocument();
    expect(body).toBeInTheDocument();
  });
});

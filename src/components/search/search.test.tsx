import { fireEvent, render, screen } from "@testing-library/react";
import Search from "./search";

describe("Search", () => {
  it("Should call onInputChange with the typed input text", () => {
    const handleInputChange = jest.fn();
    const expectedInput = "octocat";

    render(<Search onInputChange={handleInputChange} onSearch={() => {}} />);
    const input = screen.getByPlaceholderText("Search Github Username");

    fireEvent.change(input, { target: { value: "octocat" } });

    expect(handleInputChange).toHaveBeenCalledWith(expectedInput);
  });

  it("Should call onSearch when clicking in the search button", () => {
    const handleSearch = jest.fn();

    render(<Search onInputChange={() => {}} onSearch={handleSearch} />);
    const button = screen.getByRole("button", {
      name: "Search",
    });

    fireEvent.click(button);

    expect(handleSearch).toHaveBeenCalled();
  });
});

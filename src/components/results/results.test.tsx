import { render, screen } from "@testing-library/react";
import { mockedUser } from "../../mocks/user";
import Results from "./results";

describe("Results", () => {
  const loadingMSG = "Loading...";
  const errorMSG =
    "The user was not found. Try to search again or refresh the page.";

  it("Should display user card when has data", () => {
    render(<Results isLoading={false} isError={false} data={mockedUser} />);

    const name = screen.getByText(mockedUser.name as string);
    const loading = screen.queryByText(loadingMSG);
    const error = screen.queryByText(errorMSG);

    expect(name).toBeVisible();
    expect(loading).not.toBeInTheDocument();
    expect(error).not.toBeInTheDocument();
  });
  it("Should display loading message", () => {
    render(<Results isLoading={true} isError={false} data={undefined} />);
    const loading = screen.queryByText(loadingMSG);
    const error = screen.queryByText(errorMSG);

    expect(loading).toBeVisible();
    expect(error).not.toBeInTheDocument();
  });
  it("Should display error message", () => {
    render(<Results isLoading={false} isError={true} data={undefined} />);
    const loading = screen.queryByText(loadingMSG);
    const error = screen.queryByText(errorMSG);

    expect(loading).not.toBeInTheDocument();
    expect(error).toBeVisible();
  });
});

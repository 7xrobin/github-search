import { render, screen } from "@testing-library/react";
import { UserInterface } from "../../interfaces/user";
import Results from "./results";

describe("Results", () => {
  const loadingMSG = "Loading...";
  const errorMSG =
    "The user was not found. Try to search again or refresh the page.";

  it("Should display user card when has data", () => {
    const mockedUser: UserInterface = {
      login: "octocat",
      avatar_url: "img.url",
      html_url: "link.url",
      name: "octocat",
      company: "github",
      blog: "link.url",
      location: "location",
      email: "email",
      bio: "bio",
      twitter_username: "twitter",
      public_repos: 10,
      followers: 1,
    };
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

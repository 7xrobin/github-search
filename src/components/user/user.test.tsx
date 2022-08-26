import { render, screen } from "@testing-library/react";
import { UserInterface } from "../../interfaces/user";
import User from "./user";

describe("User Card", () => {
  it("Should display user data fields", () => {
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
    render(<User user={mockedUser} />);

    const name = screen.getByText(mockedUser.name as string);
    const username = screen.getByText(`@${mockedUser.login}`);
    const email = screen.getByText(`Email : ${mockedUser.email}`);
    const location = screen.getByText(`Location : ${mockedUser.location}`);
    const company = screen.getByText(`Company : ${mockedUser.company}`);
    const blog = screen.getByText(`Blog : ${mockedUser.blog}`);
    const twitter = screen.getByText(
      `Twitter : ${mockedUser.twitter_username}`
    );
    const repos = screen.getByText(`Public Repos : ${mockedUser.public_repos}`);
    const followers = screen.getByText(`Followers : ${mockedUser.followers}`);

    expect(name).toBeVisible();
    expect(username).toBeVisible();
    expect(email).toBeVisible();
    expect(location).toBeVisible();
    expect(company).toBeVisible();
    expect(blog).toBeVisible();
    expect(twitter).toBeVisible();
    expect(repos).toBeVisible();
    expect(followers).toBeVisible();
  });

  it("Should display replacement on not availables fields", () => {
    const mockedUser: UserInterface = {
      login: "octocat",
      avatar_url: "img.url",
      html_url: "link.url",
      name: null,
      company: null,
      blog: null,
      location: null,
      email: null,
      bio: null,
      twitter_username: null,
      public_repos: 10,
      followers: 1,
    };
    render(<User user={mockedUser} />);
    const notAvailable = "Not Available";

    function getNestText(content: string, node: any, text: string) {
      const hasText = (node: any) => node.textContent === text;
      const nodeHasText = hasText(node);
      // eslint-disable-next-line testing-library/no-node-access
      const childrenDontHaveText = Array.from(node.children).every(
        (child) => !hasText(child)
      );

      return nodeHasText && childrenDontHaveText;
    }

    const name = screen.getByText(mockedUser.login);
    const username = screen.getByText(`@${mockedUser.login}`);
    const email = screen.getByText((content, node) =>
      getNestText(content, node, `Email : ${notAvailable}`)
    );
    const location = screen.getByText((content, node) =>
      getNestText(content, node, `Location : ${notAvailable}`)
    );
    const company = screen.getByText((content, node) =>
      getNestText(content, node, `Company : ${notAvailable}`)
    );
    const blog = screen.getByText((content, node) =>
      getNestText(content, node, `Blog : ${notAvailable}`)
    );
    const twitter = screen.getByText((content, node) =>
      getNestText(content, node, `Twitter : ${notAvailable}`)
    );
    const repos = screen.getByText((content, node) =>
      getNestText(content, node, `Public Repos : ${mockedUser.public_repos}`)
    );
    const followers = screen.getByText((content, node) =>
      getNestText(content, node, `Followers : ${mockedUser.followers}`)
    );

    expect(name).toBeVisible();
    expect(username).toBeVisible();
    expect(email).toBeVisible();
    expect(location).toBeVisible();
    expect(company).toBeVisible();
    expect(blog).toBeVisible();
    expect(twitter).toBeVisible();
    expect(repos).toBeVisible();
    expect(followers).toBeVisible();
  });
});

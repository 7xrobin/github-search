import { fireEvent, render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import * as queries from "../queries/useFetchUser";
import { mockedUser } from "../mocks/user";
import App from "./App";

beforeEach(() => {
  jest.mock("../queries/useFetchUser", () => ({
    useFetchUser: () => ({
      data: { ...mockedUser },
      isLoading: false,
      isError: false,
      error: {},
    }),
  }));
});

describe("App", () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        enabled: false,
      },
    },
  });

  it("Should get and display mocked Octocat when it is mounted", async () => {
    jest.spyOn(queries, "useFetchUser").mockImplementation(() => {
      return {
        data: { ...mockedUser },
        isLoading: false,
        isError: false,
        error: {},
      };
    });

    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );
    expect(await screen.findByText("octocat")).toBeInTheDocument();
    expect(await screen.findByText("@octocat")).toBeInTheDocument();
  });

  it("Should fetch username typed in the search", async () => {
    const usersearch = "octopussy";
    const mockedFetch = jest.fn((username: string) => {
      return {
        data: { ...mockedUser },
        isLoading: false,
        isError: false,
        error: {},
      };
    });
    jest
      .spyOn(queries, "useFetchUser")
      .mockImplementation((username) => mockedFetch(username));

    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );
    const input = screen.getByPlaceholderText("Search Github Username");

    fireEvent.change(input, { target: { value: usersearch } });

    expect(mockedFetch).toBeCalledWith(usersearch);
  });
});

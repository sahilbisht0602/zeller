import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MockedProvider } from "@apollo/client/testing";
import { CustomersList } from "./List";
import { ListZellerCustomers } from "../../graphql/queries";

const mockData = {
  request: {
    query: ListZellerCustomers,
  },
  result: {
    data: {
      listZellerCustomers: {
        items: [
          {
            id: "f47813cf-0482-4326-afc9-12f53218ed06",
            name: "Lynn Warr",
            email: "lynn@gmail.com",
            role: "MANAGER",
          },
          {
            id: "73bae2af-4fa4-4023-8829-1034604e7590",
            name: "David Miller",
            email: "david@gmail.com",
            role: "ADMIN",
          },
        ],
      },
    },
  },
};

const errorMock = {
  request: {
    query: ListZellerCustomers,
  },
  error: new Error("Network error"),
};

const emptyMock = {
  request: {
    query: ListZellerCustomers,
  },
  result: {
    data: {
      listZellerCustomers: {
        items: [],
      },
    },
  },
};

describe("CustomersList Component", () => {
  test("renders loading state initially", () => {
    render(
      <MockedProvider mocks={[mockData]} addTypename={false}>
        <CustomersList role="ADMIN" />
      </MockedProvider>
    );
    expect(screen.getByText("Loading....")).toBeInTheDocument();
  });

  test("admins list renders correctly", async () => {
    render(
      <MockedProvider mocks={[mockData]} addTypename={false}>
        <CustomersList role="ADMIN" />
      </MockedProvider>
    );

    await waitFor(() =>
      expect(screen.getByText("David Miller")).toBeInTheDocument()
    );
    expect(screen.queryByText("Lynn Warr")).not.toBeInTheDocument();
  });

  test("managers list renders correctly", async () => {
    render(
      <MockedProvider mocks={[mockData]} addTypename={false}>
        <CustomersList role="MANAGER" />
      </MockedProvider>
    );

    await waitFor(() =>
      expect(screen.getByText("Lynn Warr")).toBeInTheDocument()
    );
    expect(screen.queryByText("David Miller")).not.toBeInTheDocument();
  });

  test("renders all users when no filter applied", async () => {
    render(
      <MockedProvider mocks={[mockData]} addTypename={false}>
        <CustomersList role={null} />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("Lynn Warr")).toBeInTheDocument();
      expect(screen.getByText("David Miller")).toBeInTheDocument();
    });
  });

  test("displays error message on fetch error", async () => {
    render(
      <MockedProvider mocks={[errorMock]} addTypename={false}>
        <CustomersList role="ADMIN" />
      </MockedProvider>
    );

    await waitFor(() =>
      expect(screen.getByText("Error loading....")).toBeInTheDocument()
    );
  });

  test("displays no customers message when list is empty", async () => {
    render(
      <MockedProvider mocks={[emptyMock]} addTypename={false}>
        <CustomersList role="ADMIN" />
      </MockedProvider>
    );

    await waitFor(() =>
      expect(screen.getByText("No customers found")).toBeInTheDocument()
    );
  });

  test("displays formatted role correctly", async () => {
    render(
      <MockedProvider mocks={[mockData]} addTypename={false}>
        <CustomersList role="ADMIN" />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("Admin")).toBeInTheDocument();
    });
  });
});

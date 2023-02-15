import React from "react";
import { render, cleanup, fireEvent, findByText, act } from "@testing-library/react";
import '@testing-library/jest-dom'
import Home from "../page";


afterEach(cleanup);

test("should render a loading button before fetching data and render the fetched data", async () => {
  jest.mock("../Components/CustomList", () => () => {
    return (
      <div data-testid="CustomListMock" />
    )
  });
  const { getByText, queryByTestId } = render(<Home />);

  expect(getByText("Fetch data")).toBeInTheDocument();
  expect(queryByTestId("CustomListMock")).not.toBeInTheDocument();

});


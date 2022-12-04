import CounterContainer from "./CounterContainer";
import configureStore from "redux-mock-store";
import * as counterActions from "../modules/counter";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

describe("CounterContainer", () => {
  const mockStore = configureStore();

  let store = mockStore({
    counter: {
      number: 0,
    },
  });

  it("renders properly", () => {
    render(
      <Provider store={store}>
        <CounterContainer />
      </Provider>
    );

    expect(screen.getByText("0")).toBeInTheDocument();
    expect(screen.getByText("+1")).toBeInTheDocument();
    expect(screen.getByText("-1")).toBeInTheDocument();
  });

  it("dispatches INCREASE action", () => {
    render(
      <Provider store={store}>
        <CounterContainer />
      </Provider>
    );

    const increaseBtn = screen.getByText("+1");
    fireEvent.click(increaseBtn);

    expect(store.getActions()[0]).toEqual(counterActions.increase());
  });

  it("dispatches DECREASE action", () => {
    render(
      <Provider store={store}>
        <CounterContainer />
      </Provider>
    );

    const decreaseBtn = screen.getByText("-1");
    fireEvent.click(decreaseBtn);

    expect(store.getActions()[1]).toEqual(counterActions.decrease());
  });
});

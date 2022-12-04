import counter, * as counterActions from "./counter";

describe("counter redux testting", () => {
  describe('actions', () => {
      it("test actions", () => {
      // Arrange
      const expect_actions = [
        { type: "counter/INCREASE" },
        { type: "counter/DECREASE" },
      ];
  
      // Act
      const fact_actions = [counterActions.increase(), counterActions.decrease()];
  
      // Assert
      expect(fact_actions).toEqual(expect_actions);
    });
  });

  describe('reducer', () => {
    let state = counter(undefined, {});
    it('should return the initialState', () => {
        expect(state).toHaveProperty('number', 0);
    });

    it('should increase', () => {
        state = counter(state, counterActions.increase());
        expect(state).toHaveProperty('number', 1);
    });

    it('should decrease', () => {
        state = counter(state, counterActions.decrease());
        expect(state).toHaveProperty('number', 0);
    });
  });
});

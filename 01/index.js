const elBox = document.querySelector("#box");

const machine = {
  initial: "inactive",
  states: {
    inactive: {
      on: {
        CLICK: "active",
      },
    },
    active: {
      on: {
        CLICK: "inactive",
      },
    },
  },
};
// Pure function that returns the next state,
// given the current state and sent event
function transition(state, event) {
  if (!state) return machine.initial;
  return machine.states[state].on[event] || state;
}

// Keep track of your current state
let currentState = undefined;

function send(event) {
  // Determine the next value of `currentState`
  currentState = transition(currentState, event);

  elBox.dataset.state = currentState;
}

elBox.addEventListener("click", () => {
  send("CLICK");
});

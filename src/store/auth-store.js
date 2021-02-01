import { Subject } from "rxjs";

const subject = new Subject();

const getInitialState = () => ({
  loggedIn: false,
  displayName: "no display name",
  id: 0,
});

let state = getInitialState();

const authStore = {
  init: () => subject.next(state),
  subscribe: (setState) => subject.subscribe(setState),
  login(user) {
    state = {
      ...state,
      ...user,
      loggedIn: true,
    };

    subject.next(state);
  },

  logout() {
    state = getInitialState();
    subject.next(state);
  },

  initialState: getInitialState(),
};

export default authStore;

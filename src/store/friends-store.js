import { Subject } from "rxjs";
import friendsService from "../services/friends-service";

const subject = new Subject();

const getInitialState = () => [];

var state = getInitialState();

const friendsStore = {
  init: () => subject.next(state),
  subscribe: (setState) => subject.subscribe(setState),
  getFriends: async (userId) => {
    state = await friendsService.getFriends(userId);
    subject.next(state);
  },
  addFriend: (friend) => {
    const friends = [...state];
    friends.push(friend);

    state = friends;

    subject.next(state);
  },
  initialState: getInitialState(),
};

export default friendsStore;

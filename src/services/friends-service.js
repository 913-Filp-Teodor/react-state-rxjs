const defaultFriends = [
  {
    id: 1,
    name: "Pamela",
    age: 12,
  },
  {
    id: 2,
    name: "Teofil",
    age: 13,
  },
  {
    id: 3,
    name: "Gagauta",
    age: 14,
  },
  {
    id: 4,
    name: "LoveStory",
    age: 26,
  },
  {
    id: 5,
    name: "Jasmine",
    age: 26,
  },
];

class FriendsService {
  getFriends(userId) {
    return Promise.resolve([...defaultFriends]);
  }
}

export default new FriendsService();

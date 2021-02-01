import friendsStore from "../../store/friends-store";
import authStore from "../../store/auth-store";
import { useState, useEffect } from "react";

const Friends = () => {
  const [friends, setFriends] = useState(friendsStore.initialState);

  useEffect(() => {
    const friendsSubscription = friendsStore.subscribe((friends) =>
      setFriends(friends)
    );

    const authSubscription = authStore.subscribe((user) => {
      friendsStore.getFriends(user.id);
    });

    authStore.init();

    return () => {
      friendsSubscription.unsubscribe();
      authSubscription.unsubscribe();
    };
  }, []);

  const handleAddFriend = () => friendsStore.addFriend({});

  return (
    <>
      <h2>number of friends: {friends.length}</h2>
      <button onClick={handleAddFriend}>Add a friend</button>
    </>
  );
};

export default Friends;

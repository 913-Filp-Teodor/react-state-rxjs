import { useEffect, useState } from "react";
import authStore from "../../store/auth-store";
import { Link } from "react-router-dom";
import "./header.css";
import { useHistory } from "react-router-dom";

const Header = () => {
  const [displayName, setDisplayName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const unsub = authStore.subscribe((user) => {
      setDisplayName(user.displayName);
      setLoggedIn(user.loggedIn);
    });
    authStore.init();

    return () => unsub.unsubscribe();
  }, []);

  const handleLogout = () => {
    authStore.logout();
    history.push("/");
  };

  return (
    <div className="header">
      <h2>{displayName}</h2>
      {loggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};

export default Header;

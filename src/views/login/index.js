import { useEffect, useState } from "react";
import authService from "../../services/auth-service";
import authStore from "../../store/auth-store";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    const unsub = authStore.subscribe((user) => {
      if (user.loggedIn) {
        history.push("/friends");
      }
    });

    return () => {
      unsub.unsubscribe();
    };
  }, [history]);

  const handleSubmit = async () => {
    const userData = await authService.login(email, password);

    authStore.login(userData);
  };

  return (
    <>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <button onClick={handleSubmit}>Login</button>
    </>
  );
};

export default Login;

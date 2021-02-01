class AuthService {
  login(email, password) {
    return Promise.resolve({
      token: "randomValidToken",
      userId: 1,
      displayName: "logged in displayName",
    });
  }
}

export default new AuthService();

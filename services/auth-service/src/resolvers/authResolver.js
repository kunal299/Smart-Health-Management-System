import AuthService from "../services/AuthService.js";

export const authResolver = {
  Query: {
    healthCheck: () => "Auth Service up and running",
  },

  Mutation: {
    register: (_, { email, password, role }) =>
      AuthService.register(email, password, role),

    login: (_, { email, password }) => AuthService.login(email, password),
  },
};

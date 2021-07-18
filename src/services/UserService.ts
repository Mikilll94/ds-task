import { User } from "@/models/User";

export const UserService = {
  getUserData() {
    const userFromSessionStorage = sessionStorage.getItem("user");
    if (userFromSessionStorage === null) {
      return null;
    }
    return JSON.parse(userFromSessionStorage) as User;
  },
  saveUserData(user: User) {
    sessionStorage.setItem("user", JSON.stringify(user));
  },
};

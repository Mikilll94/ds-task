import { User } from "@/models/User";

export const UserService = {
  getUserData(): User | null {
    const userFromSessionStorage = sessionStorage.getItem("user");
    if (userFromSessionStorage === null) {
      return null;
    }
    return JSON.parse(userFromSessionStorage) as User;
  },
  saveUserData(user: User): void {
    sessionStorage.setItem("user", JSON.stringify(user));
  },
};

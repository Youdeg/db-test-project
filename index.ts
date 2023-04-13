import axios from "axios";
import UserService from "./service/UserService";

axios.get("https://randomuser.me/api/").then(async (response) => {
  for (const user of response.data.results) {
    await UserService.saveUser(user);
  }
});


import { server } from "../../config/config";
import { getHeaders } from "./config/serverConfig";

const userapis = {
  getSession: async () => {
    try {
      const url = `${server}/user`
      const res = await fetch(url, {
        method: "GET",
        headers: getHeaders()
      });
      const session = await res.json();
      if (!res.ok) return null;
      return session as SessionProps;
    } catch (err) {
      return null;
    }
  },
};

export default userapis;

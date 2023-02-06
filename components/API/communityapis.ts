import { server } from "../../config/config";
import { ModalContextProps } from "../auth/modal/ModalsProvider";
import { catchError } from "./config/apiErrors";
import { HEADERS } from "./config/clientConfig";

const communityapis = {
  getCommunities: async (limit: number) => {
    try {
      const url = `${server}/communities?limit=${limit}`;
      const res = await fetch(url, {
        method: "get",
        credentials: "include",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.msg);
      return data as CommunityProps[];
    } catch (err) {
      throw catchError(err);
    }
  },
  subscribe: async (
    community: string,
    modals: ModalContextProps
  ) => {
    try {
      const url = `${server}/communities/subscribe`;
      const body = JSON.stringify({
        community,
      });
      const res = await fetch(url, {
        method: "POST",
        headers: HEADERS,
        body,
        credentials: "include",
      });
      const data = await res.json();
      if (!res.ok) {
        if (res.status === 401) {
          modals.setShowAuth('login')
        }
        throw new Error(data?.msg);
      }
      return data as true;
    } catch (err) {
      throw catchError(err);
    }
  },
};

export default communityapis;

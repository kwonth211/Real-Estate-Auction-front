import React from "react";
import { useState, useEffect, createContext } from "react";
import Router from "next/router";
import { Cookies } from "react-cookie";
import { axios } from "@/libs/axios";
import { User } from "@/components/auth";

const useSession = (): [any, boolean] => {
  const [session, setSession] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function _getSession() {
      const session = await getSession();
      setSession(session);
      setLoading(false);
    }
    _getSession();
  }, []);

  return [session, loading];
};

const cookies = new Cookies();

const getSession = async () => {
  const token = cookies.get("token");
  const res = await axios.get("/auth/session", {
    headers: { Authorization: token },
  });

  const session = res?.data?.user;

  return session ? session : null;
};

export const signOut = () => {
  Router.push("/");
  setTimeout(() => {
    Router.reload();
  }, 100);
  cookies.set("token", "");
};

//@Todo why use createEvent
// const refreshSession = () => {
//   if (typeof window !== "undefined") {
//     // window.dispatchEvent(new Event(EVENT_REFRESH_SESSION));
//     let event;
//     if (typeof Event === "function") {
//       event = new Event(EVENT_REFRESH_SESSION);
//     } else {
//       event = document.createEvent("Event");
//       event.initEvent(EVENT_REFRESH_SESSION, true, true);
//     }
//     window.dispatchEvent(event);
//   }
// };

export { getSession, useSession };

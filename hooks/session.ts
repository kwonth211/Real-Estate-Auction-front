import React from "react";
import {
  useState,
  useEffect,
  useContext,
  createContext,
  createElement,
} from "react";
import Router from "next/router";
import { Cookies } from "react-cookie";

import { axios } from "@/libs/axios";

let __AUTH_EVENT_LISTENER_ADDED = false;
const EVENT_REFRESH_SESSION = "refresh.session";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const SessionContext = createContext(null);
// client side method
const useSession = (session) => {
  useEffect(() => {
    getSession();
  }, []);
  //   const value = useContext(SessionContext);

  //   if (value) {
  //     return _useSessionData(session);
  //   }
};

const cookies = new Cookies();

const getSession = async () => {
  const token = cookies.get("token");
  const res = await axios.get("/auth/session", {
    headers: { Authorization: token },
  });
  const session = res.data;

  //   const name = session?.data?.name ? session.data.name : "-";
  //   const localStorageName =
  //     typeof localStorage !== undefined &&
  //     localStorage.getItem("userName") === name;
  //   localStorageName || localStorage.setItem("userName", name);

  return session && session.data ? session.data : null;
};

const _useSessionData = (session) => {
  const [data, setData] = useState(session);
  const [loading, setLoading] = useState(true);

  const _getSession = async (send_event = true) => {
    const getSessionResponse = await getSession();
    setData(getSessionResponse);
    setLoading(false);

    if (send_event) {
      _refreshSession();
    }
  };

  if (typeof window !== "undefined" && __AUTH_EVENT_LISTENER_ADDED === false) {
    __AUTH_EVENT_LISTENER_ADDED = true;
    window.addEventListener(EVENT_REFRESH_SESSION, async () => {
      await _getSession(false);
    });
  }

  useEffect(() => {
    _getSession();
    return () => {
      _getSession();
    };
  }, []);

  return [data, loading];
};

// client method
const signIn = async ({ email, password } = {}) => {
  // request to backend server
  const signInUrl = `${BASE_URL}/auth/signin`;

  const config = {
    method: "post",
    url: signInUrl,
    data: { email, password },
    mode: "cors",
    withCredentials: true,
  };

  const res = await axios(config);
  _refreshSession();

  return res.data;
};

const signOut = async () => {
  const signoutUrl = `${BASE_URL}/auth/signout`;

  const config = {
    method: "post",
    url: signoutUrl,
    mode: "cors",
    credentials: "include",
    withCredentials: true,
  };

  const res = await axios(config);
  _refreshSession();

  return res.data.data;
};

const _refreshSession = () => {
  if (typeof window !== "undefined") {
    // window.dispatchEvent(new Event(EVENT_REFRESH_SESSION));
    let event;
    if (typeof Event === "function") {
      event = new Event(EVENT_REFRESH_SESSION);
    } else {
      event = document.createEvent("Event");
      event.initEvent(EVENT_REFRESH_SESSION, true, true);
    }
    window.dispatchEvent(event);
  }
};

const refreshSession = () => {
  _refreshSession();
};

export { getSession, refreshSession, signIn, signOut, useSession };

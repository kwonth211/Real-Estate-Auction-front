import React from "react";
import { useState, useEffect, createContext } from "react";
import Router from "next/router";
import { Cookies } from "react-cookie";

import { axios } from "@/libs/axios";
import { User } from "@/components/auth";

let __AUTH_EVENT_LISTENER_ADDED = false;
const EVENT_REFRESH_SESSION = "refresh.session";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const useSession = (): [User, boolean] => {
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

const signOut = async () => {
  const signoutUrl = `${BASE_URL}/auth/signout`;

  const config = {
    method: "post",
    url: signoutUrl,
    mode: "cors",
    credentials: "include",
    withCredentials: true,
  };

  // const res = await axios(config);
  // _refreshSession();

  // return res.data.data;
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

export { getSession, refreshSession, signOut, useSession };

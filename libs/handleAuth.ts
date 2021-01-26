import Router from "next/router";
import { axios } from "@/libs/axios";

// set up cookies

export async function handleAuthSSR(ctx) {
  let token = null;

  // if context has request info aka Server Side
  if (ctx.req) {
    // ugly way to get cookie value from a string of values
    token = ctx.req.headers.cookie?.replace(
      /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
  } else {
    token = localStorage.getItem("token");
  }

  try {
    const response = await axios.get("/auth/user-info", {
      headers: { Authorization: token },
    });
  } catch (err) {
    console.log("redirecting back to main page");
    // redirect to login
    if (ctx.res) {
      ctx.res.writeHead(302, {
        Location: "/",
      });
      ctx.res.end();
    } else {
      Router.push("/signin");
    }
  }
}

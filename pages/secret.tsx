import React from "react";

import { axios } from "@/libs/axios";
import { handleAuthSSR } from "@/libs/handleAuth";
// const serverUrl = 'http://localhost:3001';

// // set up cookies
// const cookies = new Cookies();

export async function getServerSideProps(ctx) {
  // Must validate JWT
  // If the JWT is invalid it must redirect
  // back to the main page. You can do that
  // with Router from 'next/router
  await handleAuthSSR(ctx);

  // Must return an object
  return {
    props: {},
  };
}

const Secret = () => {
  const onPingCall = async (e) => {
    const token = localStorage.getItem("token");

    try {
      const res = await axios.get("/api/ping", {
        headers: { Authorization: token },
      });
      console.log(res.data.msg);
    } catch (err) {
      //   console.log(err.response.data.msg);
    }
  };

  return (
    <div>
      <h2>Secret page</h2>
      <p>Only accessible via a valid JWT</p>
      <br></br>
      <button onClick={onPingCall}>Ping Call</button>
      <p>Check console for response</p>
    </div>
  );
};

// Server-Side Rendering

export default Secret;

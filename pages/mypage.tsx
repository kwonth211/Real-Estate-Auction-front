import React from "react";

import { axios } from "@/libs/axios";
import { handleAuthSSR } from "@/libs/handleAuth";

export async function getServerSideProps(ctx) {
  // Must validate JWT
  await handleAuthSSR(ctx);

  return {
    props: {},
  };
}

const Secret = () => {
  return (
    <div>
      <h2>Secret page</h2>
      <p>Only accessible via a valid JWT</p>
      <br></br>
      <button>Ping Call</button>
      <p>Check console for response</p>
    </div>
  );
};

// Server-Side Rendering

export default Secret;

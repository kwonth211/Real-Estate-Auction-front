//
// Copyright 2020 fastcampus language
//

import React from "react";
import SignInFrom from "@/components/auth/signin/signin";

export async function getServerSideProps(context) {
  return {
    props: {}, // Will be passed to the page component as props
  };
}
/**
 * SignIn form
 *
 * @returns sign in form
 */
const SignIn = () => {
  return <SignInFrom />;
};

export default SignIn;

//
// Copyright 2020 fastcampus language
//

const _ = require("lodash");
const withCss = require("@zeit/next-css");
const withFonts = require("nextjs-fonts");
const withLess = require("@zeit/next-less");
const withSass = require("@zeit/next-sass");

// fix: prevents error when .less files are required by node
if (typeof require !== "undefined") {
  require.extensions[".less"] = () => {};
}

// [
//   'NEXT_PUBLIC_BASE_URL',
//   'NEXT_PUBLIC_EMAIL_SERVER_URL',
//   'NEXT_PUBLIC_FROM_EMAIL',
//   'NEXT_PUBLIC_IAMPORT_USER_CODE',
//   'NEXT_PUBLIC_SERVICE_ENVIRONMENT',
// ].forEach((key) => {
//   if (!_.has(process.env, key)) {
//     console.error(`${key} is not exist on process environment`);
//     process.exit(1);
//   }
// });

module.exports = withFonts(
  withCss(
    withSass(
      withLess({
        lessLoaderOptions: {
          javascriptEnabled: true,
        },
      })
    )
  )
);
